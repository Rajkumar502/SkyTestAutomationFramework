@deals
Feature: Sky deals page navigation

  Scenario: customer navigates to sky deals page
    Given I am on the home page
    When I navigate to Deals
    Then the user should be on the deals page as expected
