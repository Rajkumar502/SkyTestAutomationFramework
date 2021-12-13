@dealList
Feature: Sky deals lists

  Scenario: User sees a list of deals on the deals page
    Given I am on the deals page
    Then I see a list of deals with a price to it
    | price |
    | 26    |
    | 41    |
    | 37    |
