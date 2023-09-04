exports.Home_Page = class Home_Page{

    constructor(page){
        this.page = page;
        this.Products_NameId = "//h4/a"
        this.AddToCart_Button = "//div[@class='row']/div/a"
        this.CartMenuLink = "//a[normalize-space()='Cart']"
    }


    async AddProductToCart(ProductName){
        const Products = await this.page.$$(this.Products_NameId)
        for(let Prod of Products)
        {
            if(ProductName === await Prod.textContent())
            {
                await Prod.click();
                break;
            }
            
        }

        await this.page.on('dialog', async dialog=>{
            if(dialog.message().includes('added')){
                await dialog.accept();
            }
         })

        await this.page.click(this.AddToCart_Button);
    }

    async ClickCartHomeLink(){
        await this.page.click(this.CartMenuLink);
    }
}