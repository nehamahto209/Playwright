import { test as base, chromium, firefox } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";

export const test = base.extend({
    browser: async ({}, use) => {
        const browser = await chromium.launch({
            headless: process.env.BROWSER_HEADLESS === "true"
            // args: ["--start-maximized", "--window-size=1920,1040"],
        });
        await use(browser);
    },

    browserContext: async ({ browser }, use) => {
        const context = await browser.newContext();
        await use(context);
    },
    // @ts-ignore
    page: async ({ browserContext }, use) => {
        const page = await browserContext.newPage();
        await use(page);
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    productPage: async ({ page }, use) => {
        await use(new ProductsPage(page));
    }
});
export { expect } from "@playwright/test";
