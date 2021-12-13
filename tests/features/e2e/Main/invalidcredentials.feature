@invalidsigin
Feature: Invalid credentials error

  Scenario: customer should see error for invalid credentials
    Given I am on the home page
    When I try to sign in with invalid credentials
    Then I should see a box with the text Create your My Sky password
