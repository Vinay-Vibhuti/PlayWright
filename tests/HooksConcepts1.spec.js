import {test, expect} from '@playwright/test'

let page;

//Before Each

test.beforeAll(async({browser})=>{
    page = await browser.newPage();
    await page.goto("https://demoblaze.com/")
    await page.click('#login2')
    await page.fill('#loginusername','VinayVibhuti')
    await page.fill('#loginpassword','Vinay')
    await page.click("//button[@onclick='logIn()']")
});


test.afterAll(async()=>{
    await page.click('#logout2')
});

//Login to App
test('Vaidate Homepage', async()=>{

    expect(page).toHaveTitle('STORE')

})


//Validate Home page
test('Add Product', async()=>{

    await page.click("//a[normalize-space()='Samsung galaxy s6']")
    await page.click("//a[normalize-space()='Add to cart']")
    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })
});

