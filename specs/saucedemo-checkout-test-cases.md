# SCRUM-101 Checkout Test Cases

| ID | Title | Type | Priority | Acceptance Criteria | Automatable |
|---|---|---|---|---|---|
| TC-01 | Review cart with one item | Positive/Functional | High | AC1 | Yes |
| TC-02 | Missing first name is rejected | Negative/Validation | High | AC2, AC5 | Yes |
| TC-03 | Complete checkout end to end | E2E/Positive | High | AC1-AC4 | Yes |
| TC-04 | Missing last name is rejected | Negative/Validation | High | AC2, AC5 | Yes |
| TC-05 | Missing postal code is rejected | Negative/Validation | High | AC2, AC5 | Yes |
| TC-06 | Cancel from checkout information returns to cart | Navigation/Negative | Medium | AC2 | No |
| TC-07 | Cancel from overview returns to inventory/cart flow | Navigation/Negative | Medium | AC3 | No |
| TC-08 | Empty cart cannot proceed to checkout | Negative/Business Rule | High | Business Rule 3 | No |
| TC-09 | Special-character values have no documented validation contract | Edge/Negative | Medium | AC5 | Blocked |
| TC-10 | Field boundaries are not documented | Boundary | Medium | AC5 | Blocked |

## Execution Steps

### TC-01
1. Login with `standard_user`.
2. Add Sauce Labs Backpack.
3. Open the cart.
Expected: one row is displayed with quantity 1, description, $29.99, Remove, Continue Shopping, and Checkout.

### TC-02
1. Reach checkout information with one cart item.
2. Leave First Name, Last Name, and Postal Code blank.
3. Click Continue.
Expected: `Error: First Name is required`; stay on checkout information.

### TC-03
1. Complete TC-01.
2. Start checkout.
3. Enter QA, Tester, 560001.
4. Continue.
5. Verify overview totals.
6. Finish.
Expected: overview shows $29.99 subtotal, $2.40 tax, $32.39 total, then confirmation and cleared cart.

TC-04 through TC-10 are documented but require scenario-specific execution or clarification beyond the currently verified Chromium workflow.
