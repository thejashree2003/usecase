# KAN-4 Test Execution Report

## Jira Source
- **Issue:** KAN-4
- **Title:** SCRUM-101 - E-commerce Checkout Process
- **Jira URL:** https://thejashreetheja03.atlassian.net/browse/KAN-4
- **Application:** https://www.saucedemo.com

## Executive Summary
KAN-4 was retrieved from Jira and explored in the signed-in Jira/browser environment. The checkout workflow passed 3 Chromium Playwright scenarios. No confirmed application defects were identified.

## Coverage
- AC1: cart item, quantity, price, and actions verified.
- AC2: checkout navigation and missing First Name validation verified.
- AC3: overview item summary and totals verified.
- AC4: confirmation and cleared cart verified.
- AC5: incomplete input behavior partially verified; special-character and field-length rules remain unclear.

## Execution Totals
- Designed test cases: 10
- Automated test cases: 3
- Manual pass: 3
- Manual fail: 0
- Manual blocked: 2
- Manual not executed: 5
- Automation pass: 3
- Automation fail: 0
- Automation skipped: 0

## Evidence
- test-results/screenshots/TC-01-cart.png
- test-results/screenshots/TC-03-confirmation.png
- playwright-report/index.html

## Defects
No confirmed application defects identified during this execution.

## Limitations
- Firefox and Safari were not executed.
- Mobile responsiveness was not executed.
- Cancel flows, empty-cart behavior, and remaining mandatory-field scenarios were not executed.
- Jira does not provide format or field-length limits for special-character and boundary testing.
