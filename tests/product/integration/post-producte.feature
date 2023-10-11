Feature: Create a new product an save it in the database

  Scenario: Create a new Article Succesfully
    Given I send a POST request to "/product" with body:
      """
      {
        "id": "ef8ac118-8d7f-49cc-abec-78e0d05af80a",
        "title": "test product",
        "price": 13.5,
        "description": "lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue",
        "image": "https://i.pravatar.cc",
        "category": "electronic"
      }
      """
    Then the response status code should be 200
    And the response should be empty
# And the Metric should be save in the db:
#   """
#   {
#     "id": "ef8ac118-8d7f-49cc-abec-78e0d05af80a",
#     "title": "test product",
#     "price": 13.5,
#     "description": "lorem ipsum set",
#     "image": "https://i.pravatar.cc",
#     "category": "electronic"
#   }
#   """
