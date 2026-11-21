import { modeleVerificate, type ModelVerificat } from "./bac-verificare";

/** The same audited models as the public pages; profiles share one subject/year URL. */
export function bacModelSitemapPaths(models: readonly ModelVerificat[] = modeleVerificate()): string[] {
  const paths = new Set<string>();
  for (const model of models) {
    const year = model.subiect.split("/")[1];
    if (!year || !/^\d{4}$/.test(year)) continue;
    paths.add("/bac");
    paths.add(`/bac/${model.materie}`);
    paths.add(`/bac/${model.materie}/${year}`);
    paths.add(`/bac/${model.materie}/${year}/model`);
  }
  return [...paths].sort();
}