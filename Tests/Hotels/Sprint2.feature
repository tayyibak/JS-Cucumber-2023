@Test @Sprint2
Feature: Sprint 2 Testcases


@Test21
Scenario: Verify user get error for invalid credentials
    Given I am on Hotels landing page
    When I click on Sign in link
    And I enter invalid email
    And I click Continue button
    And I enter invalid password
    And I click Sign in button
    Then I verify error is displayed

@Test29
Scenario: Verify "List your Property" flow
    Given I am on Hotels landing page
    When I click on List your property
    Then I verify What would you like to list is displayed
    And I verify Lodging and Private residence options are displayed
    When I click on Private residence
    Then I verify Step 1 of 3 is displayed
    And I verify See how much you could earn! is displayed
    When I enter 4 bedroom
    And I enter 2.5 bathroom
    And I click on Next button
    Then I verify Step 2 of 3 is displayed
    And I verify Where is your property located is displayed
    When I enter 121 in address
    And I select 1211 6th Avenue, New York, NY, USA from auto-suggestion
    Then I verify graph is displayed
    And I verify pin in graph is displayed
    And I verify Pin location may not be exact is displayed below graph



    @Test31
Scenario: Verify language can be changed successfully
    Given I am on Hotels landing page
    When I click on English language
    And I select Español in Language dropdown
    And I click on Save button
    Then I verify Español is displayed
    When I select English in Language dropdown
    And I click on Guardar button
    Then I verify English is displayed
