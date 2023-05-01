package SeleniumStrypes.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features/HomePage.feature", glue = {"SeleniumStrypes.stepdefinitions"},
        plugin = {"pretty", "html:target/cucumber-reports"}, tags = "@SmokeTest", strict = true)
public class TestRunner {


}
