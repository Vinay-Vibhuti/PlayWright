import {test, expect} from '@playwright/test';
import {Login} from '../tests/Pages/Login';
import { Homepage } from './Pages/Homepage';
import { Cartpage } from './Pages/Cartpage';

let page 

test.only ('Login to App',async ()=>{
    const Home = new Homepage(page);
    await Home.AddProductToCart('Samsung galaxy s6')
    await page.waitForTimeout(3000)
    await Home.ClickCartHomeLink()


    const Cart = new Cartpage(page)
    await page.waitForTimeout(3000)
    const Val = await Cart.Validate('Samsung galaxy s6')
    expect(await Val).toBe(true);
})

test ('Dummy Test', async()=>{
    console.log("Dummy Test")
})

test.beforeAll (async ({browser})=>{

    page = await browser.newPage();   
    const login = new Login(page);
    await login.LanuchApp();
    await login.LoginToApp('VinayVibhuti', 'Vinay');
    await page.waitForTimeout(3000)

})

test.afterAll (async ()=>{
    page.click("//a[@id='logout2']");
})