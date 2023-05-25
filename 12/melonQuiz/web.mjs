// eslint-disable-next-line import/no-extraneous-dependencies
import playwright from "playwright";
import fs from "fs";

(async () => {
  const browser = await playwright.chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://www.melon.com/chart/index.htm");

  // 모든 .link_txt 요소를 가져옵니다.
  const linkTexts = await page.evaluate(() => {
    const $trs = document.querySelectorAll("tbody tr");

    return JSON.stringify(
      [...$trs].map((tr) => {
        const $result = tr.querySelectorAll(".ellipsis");

        return {
          title: $result[0]?.innerText,
          author: $result[1]?.innerText,
          album: $result[2]?.innerText,
        };
      })
    );
  });
  try {
    fs.writeFileSync("melon.json", linkTexts, "utf8");
    console.log("파일이 성공적으로 저장되었습니다.");
  } catch (err) {
    console.log(`파일 저장 중 에러가 발생했습니다: ${err}`);
  }

  await browser.close();
})();
