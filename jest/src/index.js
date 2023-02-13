const puppeteer = require('puppeteer');


// (async () => {
// 	const browser = await puppeteer.launch({headless:false});
// 	const page = await browser.newPage();
//     await page.goto("https://en.wikipedia.org/wiki/Coronavirus")
//     await page.screenshot({ path: "wiki.png" })
//     // await browser.waitForTarget(()=> false)
//     const result = await page.evaluate(()=>{
//         let a = document.querySelectorAll(".mw-headline")
//         const b =[...a]
//         return b.map(h=>h.innerText)
//     })
//     console.log(result);

//     await browser.close()
// })();


//get title and price 

// const puppeteer = require("puppeteer")

(async () => {
const browser = await puppeteer.launch({
    headless:false
});
const page = await browser.newPage();
await page.goto( 
    "https://www.amazon.com/s?i=computers-intl-ship&bbn=16225007011&rh=n%3A16225007011%2Cn%3A11036071%2Cp_36%3A1253503011&dc&fs=true&qid=1635596580&rnid=16225007011&ref=sr_pg_1"
)

const productsHandles = await page.$$(
    "div.s-main-slot.s-result-list.s-search-results.sg-row > .s-result-item"
  );

  let i=0;
  let item=[]
for(const products of productsHandles){
   let title = "Null"
   let price = "Null"
   let img="Null"

    try {
        title = await page.evaluate(
          (el) => el.querySelector("h2 > a > span").textContent,
          products
        );
        // console.log(title);
      } catch (error) {}

      try {
        price = await page.evaluate(
          (el) => el.querySelector(".a-price > .a-offscreen").textContent,
          products
        );
        // console.log(price);
      } catch (error) {}

      try {
        img = await page.evaluate(
          (el) => el.querySelector(".s-image").getAttribute("src"),
          products
        );
        // console.log(img);
      } catch (error) {}

      if(title !==" Null"){
      item.push(title, price,img)
 }
}

console.log(item.length);
})()