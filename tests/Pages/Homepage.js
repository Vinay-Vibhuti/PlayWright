exports.Homepage = class Homepage{

    constructor(page){
        this.page = page
        this.LogoutLink = '#logout2'
        this.ProductsLinks = '//div/h4/a'
        this.AddTOCart = "//a[normalize-space()='Add to cart']"
        this.CartMenuLink = "//a[normalize-space()='Cart']"
    }


    async AddProductToCart(ProductName){

        //await this.page.click(ProductNameS)
        const Products = await this.page.$$(this.ProductsLinks);
        
        for(const Prod of Products)
        {
            if (ProductName === await Prod.textContent())
            {
                await Prod.click();
                break;
            }

        }

        await this.page.on('dialog', async dialog=>{
            if(dialog.message().includes('added'))
            {
                await dialog.accept();
            }
        })

        await this.page.click(this.AddTOCart)
    }

    async ClickCartHomeLink(){
        await this.page.click(this.CartMenuLink)
    }
    
}