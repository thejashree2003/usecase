# KAN-4 Manual and Exploratory Execution Results

- **Jira issue:** KAN-4
- **Application:** https://www.saucedemo.com
- **Browser:** Chromium
- **Execution date:** 2026-11-20

| Test Case | Status | Actual Result | Evidence |
|---|---|---|---|
| TC-01 | PASS | Cart showed Sauce Labs Backpack, quantity 1, $29.99, Continue Shopping, and Checkout. | screenshots/TC-01-cart.png |
| TC-02 | PASS | First Name, Last Name, and Postal Code were visible. An empty submission displayed `Error: First Name is required`. | Browser observation |
| TC-03 | PASS | Valid checkout reached overview totals of $29.99, $2.40 tax, and $32.39 total, then confirmation and an empty cart. | screenshots/TC-03-confirmation.png |
| TC-04 | NOT EXECUTED | Missing-last-name scenario was not automated or manually completed. | None |
| TC-05 | NOT EXECUTED | Missing-postal-code scenario was not automated or manually completed. | None |
| TC-06 | NOT EXECUTED | Cancel behavior from information entry was not completed. | None |
| TC-07 | NOT EXECUTED | Cancel behavior from overview was not completed. | None |
| TC-08 | NOT EXECUTED | Empty-cart behavior was not completed. | None |
| TC-09 | BLOCKED | Jira requirements do not define special-character validation messages or accepted formats. | None |
| TC-10 | BLOCKED | Jira requirements do not define field-length limits. | None |

**Totals:** PASS 3, FAIL 0, BLOCKED 2, NOT EXECUTED 5.
