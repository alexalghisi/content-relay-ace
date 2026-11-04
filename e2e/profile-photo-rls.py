"""Opt-in real-account regression: run after `lovable auth-session --json --self`.
Requires a non-admin session; uploads and removes only its own temporary photo.
"""
import asyncio
import json
import os
import struct
import zlib
from pathlib import Path
from playwright.async_api import async_playwright


async def main():
    with open(os.path.expanduser("~/.cache/lovable-auth/session.json")) as handle:
        minted = json.load(handle)
    session = minted["session"]
    output = Path("/tmp/browser/profile-photo-rls")
    output.mkdir(parents=True, exist_ok=True)
    def chunk(kind, value):
        return struct.pack(">I", len(value)) + kind + value + struct.pack(">I", zlib.crc32(kind + value))
    png = b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", struct.pack(">IIBBBBB", 1, 1, 8, 2, 0, 0, 0)) + chunk(b"IDAT", zlib.compress(b"\x00\x33\x99\x66")) + chunk(b"IEND", b"")
    photo = output / "regression.png"
    photo.write_bytes(png)
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1280, "height": 1800})
        page = await context.new_page()
        await page.goto("http://localhost:8080")
        await page.evaluate("([k,v]) => localStorage.setItem(k,v)", [minted["storage_key"], json.dumps(session)])
        await page.goto("http://localhost:8080/cont")
        await page.get_by_test_id("avatar-input").wait_for(state="attached")
        initial = await page.evaluate("""async () => {
          const {supabase: s} = await import('/src/integrations/supabase/client.ts');
          const {data: auth} = await s.auth.getUser();
          const id = auth.user.id;
          const roles = await s.from('user_roles').select('role').eq('user_id',id);
          if (roles.error || roles.data.some(r => r.role === 'admin')) throw Error('Non-admin required');
          const photos = await s.from('profile_photos').select('id,storage_path').eq('user_id',id);
          const profile = await s.from('profiles').select('avatar_url').eq('user_id',id).single();
          if (photos.error || profile.error) throw Error('Initial read failed');
          return {id, photos:photos.data, primary:profile.data.avatar_url};
        }""")
        try:
            await page.get_by_test_id("avatar-input").set_input_files(str(photo))
            await page.wait_for_function("""async (count) => {
              const {supabase:s} = await import('/src/integrations/supabase/client.ts');
              const r = await s.from('profile_photos').select('id').eq('user_id',(await s.auth.getUser()).data.user.id);
              return !r.error && r.data.length === count + 1;
            }""", arg=len(initial["photos"]), timeout=45000)
            await page.get_by_role("progressbar", name="Progres încărcare").wait_for(state="detached", timeout=45000)
            await page.get_by_alt_text("Fotografie de profil", exact=True).first.wait_for()
            await page.reload()
            await page.get_by_test_id("avatar-input").wait_for(state="attached")
            result = await page.evaluate("""async (initial) => {
              const {supabase:s} = await import('/src/integrations/supabase/client.ts');
              await s.auth.getUser();
              const r = await s.from('profile_photos').select('id,storage_path').eq('user_id',initial.id);
              const added = r.data.filter(p => !initial.photos.some(old => old.id === p.id));
              if (added.length !== 1) throw Error('Photo did not persist');
              const listing = await s.storage.from('avatars').list(initial.id);
              if (listing.error || !listing.data.some(o => added[0].storage_path.endsWith('/'+o.name))) throw Error('Owner cannot read uploaded object');
              const other = await s.storage.from('avatars').list('00000000-0000-4000-8000-000000000000');
              if (other.error || other.data.length) throw Error('Unexpected other-folder access');
              const missing = await s.from('profile_photos').insert({user_id:initial.id, storage_path:initial.id+'/missing-regression.png'});
              if (!missing.error || missing.error.code !== '42501') throw Error('Missing object must remain rejected');
              const foreign = await s.from('profile_photos').insert({user_id:'00000000-0000-4000-8000-000000000000', storage_path:added[0].storage_path});
              if (!foreign.error) throw Error('Foreign ownership must remain rejected');
              const profile = await s.from('profiles').select('avatar_url').eq('user_id',initial.id).single();
              if (!initial.primary && profile.data.avatar_url !== s.storage.from('avatars').getPublicUrl(added[0].storage_path).data.publicUrl) throw Error('First photo not primary');
              return true;
            }""", initial)
            assert result
            await page.get_by_role("heading", name="Fotografii de profil").locator("..").screenshot(path=str(output / "saved.png"))
            print("PASS: non-admin upload, persistence, owner read, missing-object and foreign-owner rejection")
        finally:
            await page.evaluate("""async initial => {
              const {supabase:s} = await import('/src/integrations/supabase/client.ts');
              await s.auth.getUser();
              const r = await s.from('profile_photos').select('id,storage_path').eq('user_id',initial.id);
              const added = (r.data || []).filter(p => !initial.photos.some(old => old.id === p.id));
              for (const photo of added) {
                const storage = await s.storage.from('avatars').remove([photo.storage_path]);
                if (storage.error) throw Error('Cleanup storage failed');
                const row = await s.from('profile_photos').delete().eq('id',photo.id);
                if (row.error) throw Error('Cleanup row failed');
              }
              const profile = await s.from('profiles').update({avatar_url:initial.primary}).eq('user_id',initial.id);
              if (profile.error) throw Error('Restore primary failed');
            }""", initial)
            await browser.close()


asyncio.run(main())