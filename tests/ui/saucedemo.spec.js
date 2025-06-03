import { test, expect } from "../../src/fixtures/fixtures";

import 'dotenv-expand/config'; 

test("Login to SauceDemo", async ({ page, loginPage }) => {
    console.log("Login to SauceDemo app");
    await loginPage.openLoginPage();
    await loginPage.performLogin(process.env.S_USERNAME, process.env.S_PASSWORD);
    await page.close();
});

test("Login Failed SauceDemo", async ({ page, loginPage }) => {
    console.log("Login to SauceDemo app");
    await loginPage.openLoginPage();
    await loginPage.performLogin(process.env.S_USERNAME, "NOt Pass");
    await loginPage.verifyError();
    await page.close();
});

test("Verify Inventroy Page", async ({ page, loginPage, productPage }) => {
    await loginPage.openLoginPage();
    await loginPage.performLogin(process.env.S_USERNAME, process.env.S_PASSWORD);
    await productPage.verifyInventoryList();
    await page.close();
});

test("Verify Item added in cart ", async ({ page, loginPage, productPage }) => {
    await loginPage.openLoginPage();
    await loginPage.performLogin(process.env.S_USERNAME, process.env.S_PASSWORD);
    await productPage.verifyItemsInCart();
    await page.close();
});

