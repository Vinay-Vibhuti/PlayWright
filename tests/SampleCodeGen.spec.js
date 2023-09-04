import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('Vinay');
  await page.getByPlaceholder('Search').press('Enter');
});npx