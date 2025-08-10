import { test, expect } from "@playwright/test";

test("should navigate to the about page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("http://localhost:3000/");
  // Find an element with the text 'About' and click on it
  await page.click("text=About");
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL("http://localhost:3000/about");
  // The new page should contain an h1 with "About"
  await expect(page.locator("h1")).toContainText("About");

  await expect(page).toHaveScreenshot();
});

test("should navigate to the about home", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("http://localhost:3000/about");
  // Find an element with the text 'About' and click on it
  await page.click("text=Home");
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL("http://localhost:3000");
  // The new page should contain an h1 with "About"
  await expect(page.locator("h1")).toContainText("Home");

  await expect(page).toHaveScreenshot();
});
