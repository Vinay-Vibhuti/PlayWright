exports.Login_Page = class Login_Page{

    constructor(page){
        this.page = page
        this.Login_MenuLink = "#login2";
        this.Username = "id=loginusername";
        this.Password = "id=loginpassword";
        this.Login_Button = "//button[@class='btn btn-primary' and @onclick='logIn()']";
    }


    async LoginToApplication(Username, Password){
        await this.page.goto("https://demoblaze.com/index.html");
        await this.page.click(this.Login_MenuLink)
        await this.page.fill(this.Username, Username)
        await this.page.fill(this.Password, Password)
        await this.page.click(this.Login_Button)
    }
}