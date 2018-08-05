package com.Zone;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Eastenders_SearchPage {
    WebDriver driver;

    public Eastenders_SearchPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);


    }

    @FindBy(xpath = "//*[@id='bbcprivacy-continue-button']")
    private WebElement OkCookie;

    @FindBy(xpath = "//*[@id='bbccookies-continue-button']")
    private WebElement AgreeCookie;

    @FindBy(xpath = "//*[@id='orb-search-q']")
    private WebElement clickSearch;

    @FindBy(xpath = "//*[@id='se-searchbox-input-field']")
    private WebElement SearchField;

    @FindBy(id = ".//*[@id='searchboxDrawerForm']/button[1]")
    private WebElement Button;

    @FindBy(xpath = ".//*[@id='episode-0']/div/div[2]/h4")
    private WebElement Confirm;


    public void Ok() {
        OkCookie.click();
    }

    public void clickAgree() {
         AgreeCookie.click();
    }

    public void SearchBbc() {
        clickSearch.click();
    }

    public void enterSearch(String mysearch)  {
        SearchField.sendKeys(mysearch);
    }

    public void submitSearch() {

        Button.click();
    }

    public boolean AssertSynopsis() {
        return Confirm.isDisplayed();

    }
}
