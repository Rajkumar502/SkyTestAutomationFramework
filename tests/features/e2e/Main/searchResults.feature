@search
Feature: This feature will make the search show the results that are determined by editorial, as well as generic searches.

  Scenario: search and the results
    Given I am on the home page
    When I search sky in the search bar
    Then I should see an editorial section
    | EditorialSection|
    | Sky Deals |
    | TV|
    | Broadband|
    |Mobile|
    |Products & packages (view all)|
    |Sky Remotes & Accessories|
    |Team Sky Accessories|
    |Sky Broadband Equipment|
    |Switching to Sky TV|
    | Sky Channels and Shows|
    |Help articles & guides (view all)|
    |How to unlock your sky.com account|
    |Sky's approach to protecting copyright|
    |Sky's Network Resilience and Security|
    |Sky.com terms and conditions|
    |404 errors on sky.com|
