package com.Zone.step_definition;

import com.Zone.DriverInstance;
import com.Zone.Eastenders_SearchPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.lexer.Th;
import org.junit.Assert;

public class Eastenders_Search extends DriverInstance {

    Eastenders_SearchPage esp= new Eastenders_SearchPage(driver);

    @Given("^I am on the BBC Website$")
    public void i_am_on_the_BBC_Website() throws Throwable {
        Thread.sleep(5000);
        esp.Ok();
        System.out.print("This is to test Eastenders Search");
    }

    @When("^I click on the search tab$")
    public void i_click_on_the_search_tab() throws Throwable {
        Thread.sleep(5000);
        esp.clickAgree();
        Thread.sleep(2000);
        esp.SearchBbc();
    }
    @When("^I enter the text \"([^\"]*)\" into the search field$")
    public void iEnterTheTextIntoTheSearchField(String arg0) throws Throwable {
        Thread.sleep(2000);
        esp.enterSearch("EastEnders");
    }

    @When("^I click on the search icon$")
    public void i_click_on_the_search_icon() throws Throwable {
        Thread.sleep(2000);
        esp.submitSearch();
    }

    @Then("^different episodes of Eastenders should be displayed$")
    public void different_episodes_of_Eastenders_should_be_displayed() throws Throwable {
        Thread.sleep(2000);
        Assert.assertTrue(esp.AssertSynopsis());
    }


}
