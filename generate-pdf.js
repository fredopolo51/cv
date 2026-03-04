const puppeteer = require("puppeteer");

(async () => {

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const page = await browser.newPage();

await page.goto("file://" + __dirname + "/index.html", {
waitUntil: "networkidle0"
});

await page.pdf({
path: "cv.pdf",
format: "A4",
printBackground: true
});

await browser.close();

})();