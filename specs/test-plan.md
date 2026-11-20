# KAN-4 Checkout Test Plan

**Jira Source:** https://thejashreetheja03.atlassian.net/browse/KAN-4

## Scope
- Login prerequisite
- Cart review
- Checkout information and mandatory fields
- Checkout overview and totals
- Order confirmation
- Cart clearing
- Cancel/navigation behavior
- Invalid/incomplete checkout data

## Test Strategy
- Functional and end-to-end testing
- Negative and validation testing
- Edge and boundary testing where requirements define limits
- Chromium Playwright automation for stable, automatable scenarios

## Entry Criteria
- KAN-4 is accessible.
- Application is reachable.
- Chromium and Playwright dependencies are available.

## Exit Criteria
- Test cases map to Jira acceptance criteria.
- Automated tests execute with actual evidence.
- Failures and blockers are reported honestly.

## Risks and Assumptions
- No field format or length limits are documented.
- SauceDemo is a public demo and may reset or change behavior.
- Safari and Firefox may require separate browser installations.
- No real payment or shipping service is used.
