"""Public, real navigation checks; does not create requests or contact providers."""
import asyncio
from pathlib import Path
from playwright.async_api import async_playwright


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        for width in (1280, 390):
            page = await browser.new_page(viewport={"width": width, "height": 1800})
            await page.goto("http://localhost:8080", wait_until="networkidle")
            categories = page.locator("section").filter(
                has=page.get_by_role("heading", name="Categorii populare", exact=True)
            )
            await categories.locator('a[href="/meditatii-matematica"]').click()
            await page.wait_for_url("**/meditatii-matematica")
            await page.get_by_role("link", name="Cere meditații la matematică", exact=True).click()
            await page.wait_for_url("**/meditatii?materie=matematica")
            assert await page.locator('select').first.input_value() == "matematica"

            await page.goto("http://localhost:8080/meditatii-online", wait_until="networkidle")
            await page.get_by_role("link", name="Cere meditații online", exact=True).click()
            print("online target:", page.url)
            await page.wait_for_url(lambda u: "/meditatii?" in u and "online=" in u)
            assert await page.get_by_role("checkbox").first.is_checked()

            await page.goto("http://localhost:8080/meditatii-online", wait_until="networkidle")
            await page.get_by_role("link", name="Trimite cererea gratuită", exact=True).click()
            print("online target:", page.url)
            await page.wait_for_url(lambda u: "/meditatii?" in u and "online=" in u)
            assert await page.get_by_role("checkbox").first.is_checked()
            assert await page.evaluate("document.documentElement.scrollWidth <= window.innerWidth")
            screenshot = Path(f"/tmp/browser/meditatii-navigation-{width}.png")
            screenshot.parent.mkdir(parents=True, exist_ok=True)
            await page.screenshot(path=str(screenshot))
            print(f"PASS {width}px: subject hub → subject request; both online CTAs → online request")
            await page.close()
        await browser.close()


asyncio.run(main())