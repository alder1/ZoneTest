@Daily
Feature: As a user of BBC Website I want to be able to search for Eastenders from the search suggestion so that I can view any Eastenders episodes
  Scenario:
    Given I am on the BBC Website
    When I click on the search tab
    When I enter the text "Eastenders" into the search field
    When I click on the search icon
    Then different episodes of Eastenders should be displayed
