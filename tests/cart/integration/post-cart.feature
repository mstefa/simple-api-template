Feature: Create a new cart an save it in the database

  Scenario: Create add a product to a cart Succesfully
    When I send a PUT request to "/cart/product" with body:
      """
      {
        "userId": "ef8ac118-8d7f-49cc-abec-78e0d05af80a",
        "productId": "ef8ac118-8d7f-49cc-abec-78e0d05af80a",
        "quantity": 1
      }
      """
    Then the response status code should be 200
    And the response should be empty
