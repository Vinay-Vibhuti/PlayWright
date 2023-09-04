import{test, expect} from "@playwright/test";

test('Login to Application', async ({page})=>{

    await page.goto("https://demoblaze.com/index.html")
    await page.click("#login2")
    await page.fill("id=loginusername","23232VinayVibhuti")
    await page.fill("id=loginpassword","123Vinay")
    await page.click("//button[@class='btn btn-primary' and @onclick='logIn()']")

})