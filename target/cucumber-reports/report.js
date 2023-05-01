$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/HomePage.feature");
formatter.feature({
  "name": "Smoke tests on Strypes home page",
  "description": "  As a user\n  I want to verify that the home page is loaded successfully with all of its content\n  So that I can use the website and view the website\u0027s visual content",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "1. Home page loads successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "When "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theUserIsOnTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the home page should be loaded successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theHomePageShouldBeLoadedSuccessfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "2. Images on home page load successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "When "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theUserIsOnTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the images on the page should be loaded successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theImagesOnThePageShouldBeLoadedSuccessfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "3. Navigation menu on the page works correctly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "name": "the navigation menu item \u003cItems\u003e is visible on the page",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on a navigation menu item \u003cItems\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "the user should be directed to the corresponding page \u003cPage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Items",
        "Page"
      ]
    },
    {
      "cells": [
        "About",
        "https://strypes.eu/about-strypes/"
      ]
    },
    {
      "cells": [
        "Services",
        "https://strypes.eu/services/"
      ]
    },
    {
      "cells": [
        "Customers",
        "https://strypes.eu/customers/"
      ]
    },
    {
      "cells": [
        "Nearsurance",
        "https://strypes.eu/nearsurance/"
      ]
    },
    {
      "cells": [
        "Resources",
        "https://strypes.eu/resources/"
      ]
    },
    {
      "cells": [
        "Careers",
        "https://strypes.eu/careers/"
      ]
    }
  ]
});
formatter.scenario({
  "name": "3. Navigation menu on the page works correctly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theUserIsOnTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the navigation menu item About is visible on the page",
  "keyword": "And "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theNavigationMenuItemItemsIsVisibleOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on a navigation menu item About",
  "keyword": "When "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.userClicksOnANavigationMenuItemItems(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be directed to the corresponding page https://strypes.eu/about-strypes/",
  "keyword": "Then "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theUserShouldBeDirectedToTheCorrespondingPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "3. Navigation menu on the page works correctly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theUserIsOnTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the navigation menu item Services is visible on the page",
  "keyword": "And "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theNavigationMenuItemItemsIsVisibleOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on a navigation menu item Services",
  "keyword": "When "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.userClicksOnANavigationMenuItemItems(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be directed to the corresponding page https://strypes.eu/services/",
  "keyword": "Then "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theUserShouldBeDirectedToTheCorrespondingPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "3. Navigation menu on the page works correctly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theUserIsOnTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the navigation menu item Customers is visible on the page",
  "keyword": "And "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theNavigationMenuItemItemsIsVisibleOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on a navigation menu item Customers",
  "keyword": "When "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.userClicksOnANavigationMenuItemItems(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be directed to the corresponding page https://strypes.eu/customers/",
  "keyword": "Then "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theUserShouldBeDirectedToTheCorrespondingPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "3. Navigation menu on the page works correctly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theUserIsOnTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the navigation menu item Nearsurance is visible on the page",
  "keyword": "And "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theNavigationMenuItemItemsIsVisibleOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on a navigation menu item Nearsurance",
  "keyword": "When "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.userClicksOnANavigationMenuItemItems(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be directed to the corresponding page https://strypes.eu/nearsurance/",
  "keyword": "Then "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theUserShouldBeDirectedToTheCorrespondingPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "3. Navigation menu on the page works correctly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theUserIsOnTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the navigation menu item Resources is visible on the page",
  "keyword": "And "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theNavigationMenuItemItemsIsVisibleOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on a navigation menu item Resources",
  "keyword": "When "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.userClicksOnANavigationMenuItemItems(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be directed to the corresponding page https://strypes.eu/resources/",
  "keyword": "Then "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theUserShouldBeDirectedToTheCorrespondingPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "3. Navigation menu on the page works correctly",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theUserIsOnTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the navigation menu item Careers is visible on the page",
  "keyword": "And "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theNavigationMenuItemItemsIsVisibleOnThePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on a navigation menu item Careers",
  "keyword": "When "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.userClicksOnANavigationMenuItemItems(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be directed to the corresponding page https://strypes.eu/careers/",
  "keyword": "Then "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theUserShouldBeDirectedToTheCorrespondingPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "4. Contact form is functional",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theUserIsOnTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the the contact form is visible on the page",
  "keyword": "And "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theTheContactFormIsVisibleOnThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the contact form button",
  "keyword": "When "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.userClicksOnTheContactFormButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be directed to the corresponding page",
  "keyword": "Then "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theUserShouldBeDirectedToTheCorrespondingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "5. Search button is functional",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "the user is on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theUserIsOnTheHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search button is visible on the page",
  "keyword": "And "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.searchButtonIsVisibleOnThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the search button",
  "keyword": "When "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.userClicksOnTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the search pop up section should be visible on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SeleniumStrypes.stepdefinitions.HomePageSteps.theSearchPopUpSectionShouldBeVisibleOnThePage()"
});
formatter.result({
  "status": "passed"
});
});