Feature: Api check-health
  In order to know the server is up and running
  As a health check
  I want to check the api status

  Scenario: Check the api check-health
    When I send a GET request to "/check-health"
    Then the response status code should be 200
