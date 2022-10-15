Feature: Create a new post an save it in the
  In order to create a new post that would be available for the reeders
  As a writer
  I want to save the post's data on the DB

  Scenario: Create a new BlogpPost Succesfully
    Given I send a POST request to "/blogpost" with body:
      """
      {
        "id": "ef8ac118-8d7f-49cc-abec-78e0d05af80a",
        "title": "mstefa",
        "description": "Test1234",
        "body": "matias",
        "date": "stefanutti",
        "authorEmail": "mstefanutti24@gmail.com"
      }
      """
    Then the response status code should be 200
    And the response should be empty