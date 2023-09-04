exports.Contact_Page = class Contact_Page{
    constructor(page){
        this.page = page
        this.Contact_MenuLink = "//a[normalize-space()='Contact']"
        this.NewMessage_Message = "//textarea[@id='message-text']"
        this.SendMessage_Button = "//button[normalize-space()='Send message']"
    }


    async SendMessage(Message){

        await this.page.click(this.Contact_MenuLink);
        await this.page.fill(this.NewMessage_Message,Message);

        await this.page.on('dialog', async dialog=>{
            if(await dialog.message().includes('message'))
            {
                await dialog.accept();
            }
        })

        this.page.click(this.SendMessage_Button)
    }
}