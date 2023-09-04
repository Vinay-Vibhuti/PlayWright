exports.Cartpage = class Cartpage{

    constructor(page){
        this.page = page
        this.Products = "//tbody/tr/td[2]"
    }


    async Validate(ProdName){

        const ProdctsNames = await this.page.$$(this.Products)
        for(const Prod of ProdctsNames)
        {
            if (ProdName === await Prod.textContent())
            {
                return true;
                break;
            }
        }
    }
}