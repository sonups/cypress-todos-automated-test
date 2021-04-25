Feature: Test to core features of Todos app with data provided from JSON placehoder endpoint
  # The features tested here are:
  # Allows used to create n number of todos in Todos application
  # Sets the status of todo item as completed based on the value in the end point
  # finally these todos item are validated in UI as either completed or not as against the value from the API response

  @add-todo @dev @ui-rest-integrated-test
  Scenario: Test to core features of Todos app with data provided from JSON placehoder endpoint
    Given I open todo web application
    And I add "30" number of todo entries from the jsonplaceholder api
    And I change status of "30" number of todo entries from the jsonplaceholder api
    Then I verify the status of "30" number of todo entries from the jsonplaceholder api

