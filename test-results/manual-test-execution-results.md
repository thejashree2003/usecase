# Manual Test Execution Results

**Application:** https://www.saucedemo.com  
**Browser:** Chromium interactive session  
**Execution date:** 2026-11-20

| Test Case | Status | Actual Result | Evidence |
|---|---|---|---|
| TC-01 | PASS | Cart showed Sauce Labs Backpack, quantity 1, description, $29.99, Continue Shopping, and Checkout. | screenshots/TC-01-cart.png |
| TC-02 | PASS | Blank checkout fields showed `Error: First Name is required` and remained on the information page. | Interactive browser observation |
| TC-03 | PASS | Overview showed $29.99 subtotal, $2.40 tax, and $32.39 total. Finish showed confirmation and cleared the cart. | screenshots/TC-03-confirmation.png |
| TC-04 | NOT EXECUTED | Missing-last-name scenario was designed but not completed. | None |
| TC-05 | NOT EXECUTED | Missing-postal-code scenario was designed but not completed. | None |
| TC-06 | NOT EXECUTED | Cancel-from-information scenario was not completed. | None |
| TC-07 | NOT EXECUTED | Cancel-from-overview scenario was not completed. | None |
| TC-08 | NOT EXECUTED | Empty-cart scenario was not completed. | None |
| TC-09 | BLOCKED | No special-character validation contract was provided. | None |
| TC-10 | BLOCKED | No field-length limits were provided. | None |

**Totals:** PASS 3, FAIL 0, BLOCKED 2, NOT EXECUTED 5.
