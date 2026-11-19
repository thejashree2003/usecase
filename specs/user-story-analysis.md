# SCRUM-101 Requirement Analysis

- **User Story:** SCRUM-101 - E-commerce Checkout Process
- **Business Objective:** Allow a logged-in customer to review a cart and complete an online purchase.
- **Application:** https://www.saucedemo.com
- **Primary role:** Customer

## Acceptance Criteria

| ID | Requirement |
|---|---|
| AC1 | Logged-in cart review shows item details, price, quantity, total calculation, and cart actions. |
| AC2 | Checkout navigation reaches information entry; First Name, Last Name, and Zip/Postal Code are mandatory; empty fields show required-field errors. |
| AC3 | Valid information reaches an overview containing item summary, payment/shipping details, subtotal, tax, total, Cancel, and Finish. |
| AC4 | Finish reaches confirmation with success text and Back Home; cart is cleared. |
| AC5 | Invalid or incomplete information is rejected until all required values are valid. |

## Confirmed Behavior
- Login succeeds with `standard_user` and a securely supplied test password.
- Adding a backpack and opening the cart shows one item, quantity 1, and $29.99.
- Empty First Name produces `Error: First Name is required`.
- Valid information reaches the overview with item total $29.99, tax $2.40, and total $32.39.
- Finish shows `Thank you for your order!`, Back Home, and an empty cart.

## Assumptions and Gaps
- No minimum or maximum length rules are documented for checkout fields.
- AC5 special-character validation has no defined field format or error contract.
- Safari and Firefox coverage is not included in the current Chromium-only project because no browsers were requested in the live environment setup.
- Test credentials for this public demo are application-provided; no real payment or inventory transaction is performed.
