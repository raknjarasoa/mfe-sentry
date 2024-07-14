import { withModuleFederation } from '@nx/angular/module-federation';
import config from './module-federation.config';

export default async function (wco) {
  const wmf = await withModuleFederation({
    ...config,
    /*
     * Remote overrides for production.
     * Each entry is a pair of a unique name and the URL where it is deployed.
     */
    // remotes: [
    //   ['shop', 'http://localhost:3000/shop'],
    //   ['cart', 'http://localhost:3000/cart'],
    //   ['about', 'http://localhost:3000/about'],
    // ],
  });
  return wmf({
    ...wco,
    plugins: [...(wco.plugins ?? [])],
  });
}
