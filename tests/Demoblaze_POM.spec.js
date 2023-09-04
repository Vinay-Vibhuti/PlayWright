import {test, expect} from '@playwright/test'
import { Login_Page } from './Demoblaze_pages/Login_Page'
import { Home_Page } from './Demoblaze_pages/Home_Page'
import { Cart_Page } from './Demoblaze_pages/Cart_Page'
import { Contact_Page } from './Demoblaze_pages/Contact_Page'


test.fail ('Login', async({page})=>{

    const Login = new Login_Page(page)
    await Login.LoginToApplication("VinayVibhuti","Vinay")

    await page.waitForTimeout(3000)

    const Home = new Home_Page(page)
    await Home.AddProductToCart('Nexus 6')
    await Home.ClickCartHomeLink();
    await page.waitForTimeout(3000)


    const Cart = new Cart_Page(page)
    const Status = await Cart.ValidateProductAddedToCart('Nexus 6')
    expect(Status).toBe(true)
    await Cart.PlaceOrder("Vinay", "India", "123")

    await page.waitForTimeout(3000)

    const Contact = new Contact_Page(page)
    await page.waitForTimeout(2000)
    await Contact.SendMessage("Satisfied with the Services")
})  