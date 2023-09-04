exports.Login = class Login{

    constructor (page){
        this.page = page;
        this.LoginLink = "#login2";
        this.UsernameInput = "id=loginusername";
        this.PasswordInput = "id=loginpassword";
        this.LoginButton = "//button[@class='btn btn-primary' and @onclick='logIn()']";
    }

    async LanuchApp(){
        await this.page.goto("https://demoblaze.com/");
    }

    async LoginToApp(Username, Password){
        await this.page.click(this.LoginLink);
        await this.page.fill(this.UsernameInput, Username)
        await this.page.fill(this.PasswordInput, Password)
        await this.page.click(this.LoginButton)
    }
}