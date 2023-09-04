import {test, expect} from '@playwright/test'

test.skip('Alert', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")


    page.on('dialog', async dialog=>{

        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })

    await page.click("//button[@onclick='myFunctionAlert()']")
})


test.skip('Alert1', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")


    page.on('dialog', async dialog=>{

        expect(dialog.message()).toContain('Press a button!')
        await dialog.dismiss();
    })

    await page.click("//button[@onclick='myFunctionConfirm()']")
    expect(await page.locator("#demo")).toHaveText("You pressed Cancel!")
})


test('Alert2', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")


    page.on('dialog', async dialog=>{

        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain("Harry Potter")
        await dialog.accept("Vinay")
    })

    await page.click("//button[@onclick='myFunctionPrompt()']")
    expect(await page.locator("#demo")).toHaveText("Hello Vinay! How are you today?")
})