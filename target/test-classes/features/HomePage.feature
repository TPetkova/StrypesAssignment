Feature: Smoke tests on Strypes home page
  As a user
  I want to verify that the home page is loaded successfully with all of its content
  So that I can use the website and view the website's visual content

  @SmokeTest
  Scenario: 1. Home page loads successfully
    When the user is on the home page
    Then the home page should be loaded successfully

  @SmokeTest
  Scenario: 2. Images on home page load successfully
    When the user is on the home page
    Then the images on the page should be loaded successfully

  @SmokeTest
  Scenario Outline: 3. Navigation menu on the page works correctly
    Given the user is on the home page
    And the navigation menu item <Items> is visible on the page
    When user clicks on a navigation menu item <Items>
    Then the user should be directed to the corresponding page <Page>

    Examples:
      | Items       | Page                              |
      | About       | https://strypes.eu/about-strypes/ |
      | Services    | https://strypes.eu/services/      |
      | Customers   | https://strypes.eu/customers/     |
      | Nearsurance | https://strypes.eu/nearsurance/   |
      | Resources   | https://strypes.eu/resources/     |
      | Careers     | https://strypes.eu/careers/       |

  @SmokeTest
  Scenario: 4. Contact form is functional
    Given the user is on the home page
    And the the contact form is visible on the page
    When user clicks on the contact form button
    Then the user should be directed to the corresponding page

  @SmokeTest
  Scenario: 5. Search button is functional
    Given the user is on the home page
    And search button is visible on the page
    When user clicks on the search button
    Then the search pop up section should be visible on the page





















