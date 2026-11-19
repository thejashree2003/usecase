const { test, expect } = require('@playwright/test');
const { CheckoutPage } = require('../../pages/CheckoutPage');

test('SCRUM-101 TC-01: add backpack and review cart', async ({ page }) => {
  const checkout = new CheckoutPage(page);
  await checkout.login('standard_user', process.env.TEST_PASSWORD);
  await checkout.addBackpackAndOpenCart();

  await expect(page).toHaveURL(/cart\.html/);
  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
  await expect(page.locator('.inventory_item_price')).toHaveText('$29.99');
  await expect(page.locator('[data-test="checkout"]')).toBeVisible();
  await page.screenshot({ path: 'test-results/screenshots/TC-01-cart.png', fullPage: true });
});

test('SCRUM-101 TC-02: required first name validation', async ({ page }) => {
  const checkout = new CheckoutPage(page);
  await checkout.login('standard_user', process.env.TEST_PASSWORD);
  await checkout.addBackpackAndOpenCart();
  await checkout.startCheckout();
  await page.locator('[data-test="continue"]').click();

  await expect(page.locator('[data-test="error"]')).toHaveText('Error: First Name is required');
  await expect(page).toHaveURL(/checkout-step-one\.html/);
});

test('SCRUM-101 TC-03: complete checkout end to end', async ({ page }) => {
  const checkout = new CheckoutPage(page);
  await checkout.login('standard_user', process.env.TEST_PASSWORD);
  await checkout.addBackpackAndOpenCart();
  await checkout.startCheckout();
  await checkout.submitInformation('QA', 'Tester', '560001');

  await expect(page).toHaveURL(/checkout-step-two\.html/);
  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
  await expect(page.locator('.summary_subtotal_label')).toHaveText('Item total: $29.99');
  await expect(page.locator('.summary_tax_label')).toHaveText('Tax: $2.40');
  await expect(page.locator('.summary_total_label')).toHaveText('Total: $32.39');

  await checkout.finishOrder();
  await expect(page).toHaveURL(/checkout-complete\.html/);
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
  await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveAttribute('aria-label', 'Cart, empty');
  await page.screenshot({ path: 'test-results/screenshots/TC-03-confirmation.png', fullPage: true });
});
