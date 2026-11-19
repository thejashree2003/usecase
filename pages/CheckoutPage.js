class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async login(username, password) {
    await this.page.goto('/');
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click();
  }

  async addBackpackAndOpenCart() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }

  async startCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }

  async submitInformation(firstName, lastName, postalCode) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(postalCode);
    await this.page.locator('[data-test="continue"]').click();
  }

  async finishOrder() {
    await this.page.locator('[data-test="finish"]').click();
  }
}

module.exports = { CheckoutPage };
