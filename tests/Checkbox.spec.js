import {test, expect} from '@playwright/test';

test('Sample Checkbox',async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(2000)

    let Options = await page.$$('#country option')
    for(let Option of Options)
    {
        let value = await Option.textContent();
        if(value.includes('India'))
        {
            
        }
    }
})