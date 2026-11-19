# SCRUM-101 Checkout Test Report

## Executive Summary
The checkout workflow was tested against https://www.saucedemo.com using Chromium. Three scenarios passed in both interactive browser testing and Playwright automation. No confirmed application defects were identified.

## Manual Results
- PASS: 3
- FAIL: 0
- BLOCKED: 2
- NOT EXECUTED: 5

## Automation Results
- Passed: 3
- Failed: 0
- Skipped: 0
- Browser: Chromium
- Healing: No justified automation fixes required

## Coverage
AC1 through AC4 have verified coverage. AC5 has only missing-first-name coverage. Special-character and field-boundary behavior remains blocked by missing requirements.

## Evidence
- screenshots/TC-01-cart.png
- screenshots/TC-03-confirmation.png
- ../playwright-report/index.html

## Risks
- Firefox and Safari not executed
- Mobile responsiveness not executed
- Cancel and empty-cart scenarios not executed
- Field format and limits not documented

## Conclusion
The verified happy path and required-field validation passed. Full workflow quality assessment remains partial.
