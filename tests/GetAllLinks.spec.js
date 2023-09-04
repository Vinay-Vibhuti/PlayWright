import {test, expect} from "@playwright/test";

test('Get All Product Names', async ({page})=>{

        await page.goto("https://demoblaze.com/index.html")
        await page.waitForTimeout(3000)
        let  ProdNames = await page.$$("//a[@class='hrefch']")
        for(let Prod of ProdNames)
            {
                //const linktext = await Prod.textContent()
                console.log(await Prod.textContent())
            }
})