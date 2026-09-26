# Karioka website

The site is a static export published with GitHub Pages:

https://jeakob.github.io/karioka/

## Image performance

- Source images are encoded as AVIF.
- Each image has 480 px and 960 px variants.
- HTML uses `srcset` and layout-specific `sizes`, so small photos download smaller files.
- Below-the-fold images initially use native lazy loading and `sizes="auto, …"` to select files using their rendered width, with explicit sizes as a fallback.
- Hero photos load eagerly, with the main photo at high priority. Once the homepage finishes loading, its remaining photos begin downloading at low priority, before visitors scroll to them.
- The original full-size AVIF remains as the fallback for larger screens.

The current image set is about 5.3 MB in total. All five HTML pages and all 63 referenced AVIF assets were checked after deployment.

Run `node test-images.cjs` to check image loading on desktop, Retina desktop, and mobile. Set `CHROMIUM_PATH` if using an existing Chromium installation.

## Publishing

Push changes to `main`. `.github/workflows/pages.yml` creates `index.html` from `out/Karioka.html` and deploys `out/` to GitHub Pages.
