import { expect } from "@playwright/test";
import { FileUtils } from "../utils/fileUtils";

export class ProductsPage {
    constructor(page) {
        this.page = page;
        this.menuBtn = this.page.getByRole('button', { name: 'Open Menu' });        
        this.aboutTitle = page.getByRole('heading', { name: 'Build apps users love with AI' });
        this.listInventory = this.page.locator('[data-test="inventory-list"]');    
        this.listInventoryItems = this.page.locator('[data-test="inventory-list"] div');     
        this.item1 = this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.item2 = this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    }

    async verifyInventoryList()
    {        
        const productNames = await this.listInventoryItems.allInnerTexts();
        const jsonData = productNames.map((name, index) => ({
            id: `product_${index + 1}`,
            name: name.trim(),
        }));        
        FileUtils.writeToFile("Inventory",JSON.stringify(jsonData, null, 2));
        const JSONData = FileUtils.readFromFile("Inventory");
        for (const name in JSONData.inventory) {
            this.listInventoryItems.filter({ hasText: name });
        }
    }

    async verifyItemsInCart()
    {         
        this.item1.click();        
        this.badge = this.page.locator('.shopping_cart_badge');
        await expect(this.badge).toBeVisible();
        await expect(this.badge).toHaveText('1');
        this.item2.click();
        await expect(this.badge).toHaveText('2');
    }
}
