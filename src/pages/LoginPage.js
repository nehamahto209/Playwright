import { expect } from "../../src/fixtures/fixtures";
export class LoginPage {
    constructor(page) {
        this.page = page;

        this.username = this.page.getByPlaceholder("Username");
        this.password = this.page.getByPlaceholder("Password");        
        this.error = this.page.locator('#login_button_container div').nth(3);
        this.loginBtn = this.page.getByRole("button").getByText(" Login ");
    }

    async openLoginPage() {
        await this.page.goto("https://www.saucedemo.com");
        await this.page.waitForURL("https://www.saucedemo.com");
    }

    async performLogin(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();        
    }

    async verifyError() {
        await expect(this.error).toHaveText("Epic sadface: Username and password do not match any user in this service");
    }
}
