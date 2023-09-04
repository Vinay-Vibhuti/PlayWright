import {expect} from '@playwright/test'
exports.Cart_Page = class Cart_Page{

    constructor(page){
        this.page = page
        this.Products_Cart = "//tbody/tr/td[2]"
        this.CartMenu_Link = "//a[normalize-space()='Cart']"
        this.PlaceOrder_Button = "//button[normalize-space()='Place Order']"
        this.PlaceOrder_Name = "//input[@id='name']"
        this.PlaceOrder_Country = "//input[@id='country']"
        this.PlaceOrder_CC = "//input[@id='card']"
        this.PlaceOrder_PurchaseButton = "//button[normalize-space()='Purchase']"
        this.PlaceOrder_SuccessMessage = "//h2[normalize-space()='Thank you for your purchase!']"
        this.placeOrder_WindowClose = "//div[@id='orderModal']//button[@type='button'][normalize-space()='Close']"


    }

    async ValidateProductAddedToCart(ProductAddedToCart){
        const Prodcts = await this.page.$$(this.Products_Cart);
        for(const Prod1 of Prodcts)
        {
            if(ProductAddedToCart === await Prod1.textContent())
            {
                return true;
                break;
            }
        }

    }

    async PlaceOrder(Name, Country, CCNumb)
    {
        await this.page.click(this.PlaceOrder_Button);
        await this.page.fill(this.PlaceOrder_Name, Name)
        await this.page.fill(this.PlaceOrder_Country, Country)
        await this.page.fill(this.PlaceOrder_CC, CCNumb)
        await this.page.click(this.PlaceOrder_PurchaseButton)

        await expect(this.page.locator("//h2[normalize-space()='Thank you for your purchase!']")).toBeVisible();
        await this.page.click("//button[normalize-space()='OK']")
        await this.page.click(this.placeOrder_WindowClose)
    }
}