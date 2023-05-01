package SeleniumStrypes.stepdefinitions;

import SeleniumStrypes.hooks.Hooks;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;
import java.util.List;


public class HomePageSteps {

    private WebDriver driver;

    @Test
    @When("the user is on the home page")
    public void theUserIsOnTheHomePage() {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://strypes.eu/");
    }

    @Test
    @Then("the home page should be loaded successfully")
    public void theHomePageShouldBeLoadedSuccessfully() {
        Assert.assertEquals("Strypes | End-to-end software solutions", driver.getTitle());
        driver.close();
    }

    @Then("the images on the page should be loaded successfully")
    public void theImagesOnThePageShouldBeLoadedSuccessfully() {
        List<WebElement> images = driver.findElements(By.tagName("img"));
        for (WebElement image : images) {
            Assert.assertTrue("The image is should be on the home page", image.getAttribute("src").startsWith("https://strypes.eu"));
        }
        driver.close();
    }

    @Then("^the user should be directed to the corresponding page (.*)$")
    public void theUserShouldBeDirectedToTheCorrespondingPage(String page) {
        Assert.assertEquals(page,driver.getCurrentUrl());
        driver.close();
    }

    @And("the the contact form is visible on the page")
    public void theTheContactFormIsVisibleOnThePage() {
        WebElement contactForm = driver.findElement(By.linkText("Contact"));
        Assert.assertTrue(contactForm.isDisplayed());
    }

    @When("user clicks on the contact form button")
    public void userClicksOnTheContactFormButton() {
        driver.findElement(By.linkText("Contact")).click();
    }

    @And("search button is visible on the page")
    public void searchButtonIsVisibleOnThePage() {
        WebElement search = driver.findElement(By.className("elementor-search-form"));
        Assert.assertTrue(search.isDisplayed());
    }

    @When("user clicks on the search button")
    public void userClicksOnTheSearchButton() {
        driver.findElement(By.className("elementor-search-form")).click();
    }

    @And("^the navigation menu item (.*) is visible on the page$")
    public void theNavigationMenuItemItemsIsVisibleOnThePage(String item) {
        WebElement navigationItem = driver.findElement(By.linkText(item));
        Assert.assertTrue(navigationItem.isDisplayed());
    }

    @When("^user clicks on a navigation menu item (.*)$")
    public void userClicksOnANavigationMenuItemItems(String item) throws InterruptedException {
        WebElement element = driver.findElement(By.linkText(item));
        Actions actions = new Actions(driver);
        actions.moveToElement(element).build().perform();
        actions.moveToElement(element).click().build().perform();

        if (driver.getCurrentUrl().equalsIgnoreCase("https://strypes.eu/")) {
            actions.click(element).build().perform();
        }
    }

    @Then("the user should be directed to the corresponding page")
    public void theUserShouldBeDirectedToTheCorrespondingPage() {
        Assert.assertEquals("https://strypes.eu/contact/",driver.getCurrentUrl());
        driver.close();
    }

    @Then("the search pop up section should be visible on the page")
    public void theSearchPopUpSectionShouldBeVisibleOnThePage() {
        Duration duration = Duration.ofSeconds(5);
        new WebDriverWait(driver, duration).until(ExpectedConditions.visibilityOfElementLocated(By.className("elementor-search-form__input")));
        WebElement searchPopUp = driver.findElement(By.className("elementor-search-form__input"));
        Assert.assertTrue(searchPopUp.isDisplayed());
        driver.close();
    }
}
