# Exploratory Testing Results

**Application:** https://www.saucedemo.com  
**Browser:** Chromium  
**Date:** 2026-11-20

## Modules Explored
- Login
- Inventory
- Cart
- Checkout Information
- Checkout Overview
- Checkout Confirmation

## Navigation
1. Opened the application login page.
2. Logged in with `standard_user`.
3. Added Sauce Labs Backpack.
4. Opened the cart.
5. Started checkout.
6. Tested empty required fields.
7. Entered valid information.
8. Reviewed overview totals.
9. Finished the order and returned to confirmation.

## Verified UI Elements
- Login username/password fields and Login button.
- Add to cart button.
- Shopping cart badge and cart link.
- Checkout and Continue Shopping buttons.
- First Name, Last Name, and Zip/Postal Code fields.
- Continue and Cancel buttons.
- Finish button.
- Back Home button.

## Exploratory Findings
- Login succeeded.
- Cart displayed the correct product, quantity 1, and $29.99.
- Empty required fields produced `Error: First Name is required`.
- Overview displayed $29.99 subtotal, $2.40 tax, and $32.39 total.
- Finish displayed `Thank you for your order!`.
- Confirmation showed an empty cart.

## Unexpected Behaviour
No unexpected behavior was observed in the tested happy path or first-name validation scenario.

## Evidence
- test-results/screenshots/TC-01-cart.png
- test-results/screenshots/TC-03-confirmation.png
