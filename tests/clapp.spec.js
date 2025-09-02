

const { test, expect } = require('@playwright/test');
 
 
 
 
test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   //const productName = 'zara coat 3';
   //const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
 await page.waitForSelector('#userEmail');
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');


})
