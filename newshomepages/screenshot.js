const { chromium } = require('playwright');
const fs = require('fs');

const timer = ms => new Promise( res => setTimeout(res, ms));

(async () => {
  const pathToExtension = require('path').join(__dirname, 'extensions/uBlock');
  console.log(pathToExtension);
  await fs.readdir(pathToExtension, function(err, items) {
      console.log(items);
  });
  const userDataDir = './.chromium';
  const context = await chromium.launchPersistentContext(userDataDir,{
    headless: false,
    channel: "chrome",
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`
    ]
  });
  const page = await context.newPage();
  await page.setViewportSize({ width: 1300, height: 1600 });
  await page.goto('https://www.latimes.com/');
  await timer(3000);
  await page.screenshot({ path: 'latimes.jpg' , quality: 80, type: "jpeg"});
  await context.close();
})();
