# Karioka website

The site is a static export published with GitHub Pages:

https://jeakob.github.io/karioka/

## Image performance

- Source images are encoded as AVIF.
- Each image has 480 px and 960 px variants.
- HTML uses `srcset` and `sizes`, so browsers choose an appropriate file for the viewport.
- Below-the-fold images load eagerly at low priority to avoid a blank image when scrolling.
- The original full-size AVIF remains as the fallback for larger screens.

The current image set is about 5.3 MB in total. All five HTML pages and all 63 referenced AVIF assets were checked after deployment.

## Publishing

Push changes to `main`. `.github/workflows/pages.yml` creates `index.html` from `out/Karioka.html` and deploys `out/` to GitHub Pages.
