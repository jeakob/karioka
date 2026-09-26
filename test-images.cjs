const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL, fileURLToPath } = require('node:url');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || undefined,
  });
  try {
    for (const [width, dpr] of [[1440, 1], [1440, 2], [390, 2]]) {
      for (const name of ['Karioka', 'Menu', 'Imprezy', 'O-nas']) {
        const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: dpr });
        await page.route('https://**', route => route.abort());
        if (name === 'Karioka') await page.addInitScript(() => {
          window.addEventListener('load', () => {
            window.imageLoadState = {
              deferred: document.querySelectorAll('img[loading="lazy"]').length,
              mainReady: [...document.querySelectorAll('img[loading="eager"]')]
                .every(image => image.complete && image.naturalWidth > 0),
            };
          });
        });
        await page.goto(pathToFileURL(path.resolve(`out/${name}.html`)).href);
        await page.waitForTimeout(500);
        const initial = await page.locator('img').evaluateAll(images => images
          .filter(image => image.complete && image.naturalWidth)
          .map(image => image.currentSrc));
        const bytes = initial.reduce((sum, url) => sum + fs.statSync(fileURLToPath(url)).size, 0);
        console.log(`${name} ${width}px @${dpr}x: ${initial.length} initial images, ${Math.round(bytes / 1024)} KiB`);
        if (!process.env.BASELINE) {
          assert.equal(await page.locator('img[fetchpriority="high"]').count(), 1);
          if (name === 'Karioka') {
            const state = await page.evaluate(() => window.imageLoadState);
            assert(state.mainReady && state.deferred > 0, 'Load main photos before promoting deferred photos');
            await page.locator('img').evaluateAll(images => Promise.all(images.map(image => image.decode())));
            assert.equal(await page.evaluate(() => window.scrollY), 0, 'Photos should load without scrolling');
          }
          for (const image of await page.locator('img').all()) {
            await image.scrollIntoViewIfNeeded();
            await image.evaluate(image => image.decode());
            assert(await image.evaluate(image => image.naturalWidth > 0 && image.clientWidth > 0));
          }
          if (name === 'Karioka' && width === 1440 && dpr === 1) {
            for (const name of ['hero-dish', 'room-twin', 'room-kitchen', 'playground']) {
              const url = await page.locator(`img[src*="/${name}-"]`).evaluate(image => image.currentSrc);
              assert(url.endsWith('-480.avif'), `${name} should use the small image: ${url}`);
            }
          }
        }
        await page.close();
      }
    }
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
