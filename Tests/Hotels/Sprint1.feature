@Test @Sprint1
Feature: Sprint 1 Testcases

@Test18
Scenario: Verify user can update number of guests on Home page
    Given I am on Hotels landing page
    When I click on Travelers
    Then I enter 6 Adults
    Then I enter 3 Children
    Then I select first child age: 4
    Then I select second child age: Under 1
    Then I select third child age: 7
    Then I click Done
    Then I verify total number of guests in sum of adults and children as same as selected on step #4 and #5

@Test20
Scenario: Verify TermsAndConditions link and PrivacyStatements link open correct page on new tab
    Given I am on Hotels landing page
    When I click on Sign in button
    Then I click Sign up link
    Then I click “Terms and Conditions” link
    Then I verify “Terms and Conditions” page opens in new tab
    When I click “Privacy Statement” link
    Then I verify “Privacy Statement” page opens in new tab
  


@Test22
Scenario: Verify error message for invalid data in SignUp form
    Given I am on Hotels landing page
    When I click on Sign in button
    Then I click Sign up link
    Then I enter invalid email address
    Then I enter invalid first name
    Then I enter invalid last name
    Then I enter password
    Then I verify email error is displayed
    Then I verify first name error is displayed
    Then I verify last name error is displayed
    Then I verify “Keep me signed in” checkbox is displayed and enabled
    Then I verify “Continue” button is displayed but NOT enabled

@Test24
Scenario: Verify error is displayed when user submits the empty feedback form
    Given I am on Hotels landing page
    When I click on Sign in button
    Then I click Feedback
    Then I click on Submit button
    Then I verify error message is displayed
    Then I verify star boxes section is in a red dotted box

@Test25
Scenario: Verify user can submit feedback after completing the feedback form
    Given I am on Hotels landing page
    When I click on Sign in button
    Then I click Feedback
    Then I select any star-rating
    Then I enter any comments
    Then I select any option for How likely are you to return to Hotels.com
    Then I select any answer for Prior to this visit, have you ever booked on Hotels.com
    Then I select any answer for Did you accomplish what you wanted to do on this page
    Then I click on Submit button
    Then I verify THANK YOU FOR YOUR FEEDBACK. is displayed

@Test28
Scenario: Verify Child-age dropdowns are same as number of Children selected
    Given I am on Hotels landing page
    When I click on Travelers
    Then I select “Children” as 2
    Then I verify Children-age dropdown are 2
    Then I verify plus button is enabled
    Then I verify minus button is enabled
    When I select “Children” as 6
    Then I verify Children-age dropdown are 6
    Then I verify plus button is disabled
    Then I verify minus button is enabled
    When I select “Children” as 5
    Then I verify Children-age dropdown are 5
    Then I verify plus button is enabled
    Then I verify minus button is enabled
    When I select “Children” as 0
    Then I verify Children-age dropdown is NOT displayed
    Then I verify plus button is enabled
    When I verify minus button is disabled
