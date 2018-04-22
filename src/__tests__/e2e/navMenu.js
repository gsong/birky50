import puppeteer from "puppeteer";

let browser, page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    // headless: false,
    // executablePath:
    //   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  });
  page = await browser.newPage();
  await page.goto("http://localhost:3000");
});

describe("Click item in nav menu should scroll to section", () => {
  const sections = {
    Details: "Details",
    Airport: "Where to Fly",
    Lodging: "Where to Stay",
    Food: "Where to Eat",
    Activities: "What to Do",
    Questions: "Questions"
  };

  Object.entries(sections).forEach(([item, sectionLabel], i) => {
    test(item, async () => {
      const link = await getByText(page, "a", item);
      const section = await getByText(page, "section//*", sectionLabel);

      // 1. Click on nav menu link
      // 2. Wait for the screen to stop scrolling
      // 3. Make sure the section associated with the link is visible
      await link.click();
      const boundingBox = await boundingBoxAfterScroll(section);
      expect(boundingBox.y).toBeLessThan(page.viewport().height);

      await page.screenshot({
        path: `src/__tests__/e2e/screenshots/${i}-${item}.png`
      });
    });
  });
});

afterAll(async () => {
  await browser.close();
});

const boundingBoxAfterScroll = async element => {
  let boundingBox = await element.boundingBox();
  let stillScrolling = true;

  while (stillScrolling) {
    await delay(50);
    const oldBoundingBox = boundingBox;
    boundingBox = await element.boundingBox();
    if (oldBoundingBox.y === boundingBox.y) stillScrolling = false;
  }

  return boundingBox;
};

const getByText = async (container, selector, text) => {
  const elements = await container.$x(
    `//${selector}[text()[contains(., '${text}')]]`
  );
  return elements[0];
};

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));
