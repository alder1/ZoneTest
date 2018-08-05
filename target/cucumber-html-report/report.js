$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Eastenders_Search.feature");
formatter.feature({
  "line": 2,
  "name": "As a user of BBC Website I want to be able to search for Eastenders from the search suggestion so that I can view any Eastenders episodes",
  "description": "",
  "id": "as-a-user-of-bbc-website-i-want-to-be-able-to-search-for-eastenders-from-the-search-suggestion-so-that-i-can-view-any-eastenders-episodes",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Daily"
    }
  ]
});
formatter.before({
  "duration": 20490631674,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "",
  "description": "",
  "id": "as-a-user-of-bbc-website-i-want-to-be-able-to-search-for-eastenders-from-the-search-suggestion-so-that-i-can-view-any-eastenders-episodes;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the BBC Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the search tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter the text \"Eastenders\" into the search field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on the search icon",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "different episodes of Eastenders should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Eastenders_Search.i_am_on_the_BBC_Website()"
});
formatter.result({
  "duration": 5636818848,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat com.Zone.Eastenders_SearchPage.Ok(Eastenders_SearchPage.java:38)\r\n\tat com.Zone.step_definition.Eastenders_Search.i_am_on_the_BBC_Website(Eastenders_Search.java:19)\r\n\tat ✽.Given I am on the BBC Website(src/test/resources/Eastenders_Search.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Eastenders_Search.i_click_on_the_search_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Eastenders",
      "offset": 18
    }
  ],
  "location": "Eastenders_Search.iEnterTheTextIntoTheSearchField(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Eastenders_Search.i_click_on_the_search_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Eastenders_Search.different_episodes_of_Eastenders_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 45551,
  "status": "passed"
});
});