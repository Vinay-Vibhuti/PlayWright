import {test, expect} from '@playwright/test';

test('Auto Suggest', async({page})=>{

    await page.goto("https://www.redbus.in/")
    await page.fill('#src', 'Dharwad')
    await page.waitForSelector("//div[@class='sc-gZMcBi grvhsy']/text[@class='placeHolderMainText']")

    const LocDetails = await page.$$("//div[@class='sc-gZMcBi grvhsy']/text[@class='placeHolderMainText']")
    for(let loc of LocDetails)
    {
        let EachLoc = await loc.textContent();
        if(EachLoc.includes("Dharward Bypass"))
        {
            await loc.click();
            break;
        }
        
    }
    await page.waitForTimeout(5000)
})