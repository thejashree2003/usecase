# Jira User Story: KAN-4

- **Jira URL:** https://thejashreetheja03.atlassian.net
- **Issue:** KAN-4
- **Issue Type:** Story
- **Project:** My Software Team
- **Status:** To Do
- **Priority:** Medium
- **Title:** SCRUM-101 - E-commerce Checkout Process
- **Reporter:** Thejashree Theja
- **Application URL:** https://www.saucedemo.com
- **Test Credentials:** Username `standard_user`; password supplied securely through the test environment

## Story
As a customer, I want to complete my purchase through a checkout process so that I can order products online.

Implement a complete checkout flow that allows customers to review their cart, enter shipping information, select a payment method, and confirm their order. The checkout process should be intuitive, secure, and provide clear feedback at each step.

## Acceptance Criteria

### AC1: Cart Review
- GIVEN I am a logged-in user with items in my cart
- WHEN I navigate to the cart page
- THEN I should see all added items with their details: name, description, price, and quantity
- AND I should see the total price calculation
- AND I should have options to continue shopping or proceed to checkout

### AC2: Checkout Information Entry
- GIVEN I am on the cart page with items
- WHEN I click Checkout
- THEN I should be redirected to the checkout information page
- AND I should see First Name, Last Name, and Zip/Postal Code fields
- AND all fields should be mandatory
- WHEN I leave any field empty and click Continue
- THEN I should see an error message indicating which field is required

### AC3: Order Overview
- GIVEN I have entered valid checkout information
- WHEN I click Continue
- THEN I should be redirected to the checkout overview page
- AND I should see a summary of all items
- AND I should see subtotal, tax, and total
- AND I should have Cancel and Finish options

### AC4: Order Completion
- GIVEN I am on the checkout overview page
- WHEN I click Finish
- THEN I should be redirected to the order confirmation page
- AND I should see a success message confirming the order
- AND I should see Back Home

### AC5: Error Handling
- GIVEN I am on the checkout information page
- WHEN I enter invalid data, including incomplete information or special characters
- THEN I should see appropriate validation messages
- AND I should not be able to proceed until all fields are valid

## Business Rules
1. All checkout form fields are mandatory.
2. Users must be logged in to access checkout.
3. Cart cannot be empty when proceeding to checkout.
4. Order confirmation should clear the cart.
5. Users can cancel checkout at any step and return to cart.

## Dependencies
- The application must be reachable.
- The public test account or securely supplied test credentials must work.
- Cart and checkout functionality must be available.

## Comments
No comments were visible in the checked Jira activity snapshot.
