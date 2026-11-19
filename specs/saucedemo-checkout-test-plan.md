# Saucedemo Checkout Test Plan

**Plan ID:** TP-SCRUM-101  
**Story:** SCRUM-101 - E-commerce Checkout Process

## Scope
- Login prerequisite
- Cart review
- Checkout information
- Required-field validation
- Order overview
- Order confirmation
- Cart reset after completion
- Browser navigation and cancel behavior

## Testing Types
- Functional and end-to-end testing
- Negative and validation testing
- Cart and navigation testing
- Boundary testing only where documented limits exist

## Entry Criteria
- Application is reachable.
- Playwright and Chromium are installed.
- Public demo login credentials are available.

## Exit Criteria
- All designed executable tests have a result.
- Automation results reconcile with test-case totals.
- Defects and blockers are documented.

## Risks
- The site discloses public demo credentials rather than environment-specific credentials.
- Safari and Firefox installations were not configured.
- Checkout fields have no documented format or length limits.

## Test Data
- Valid: QA, Tester, 560001
- Empty: leave required fields blank
- Product: Sauce Labs Backpack
