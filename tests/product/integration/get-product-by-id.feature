Feature: Get a product that already exists in the database.

  Scenario: Get a product Succesfully
    Given in the db a Product is save with the following properties:
      """
      {
        "id": "17e9764e-b851-4a2a-87ca-0b7315e61330",
        "title": "test product",
        "price": 13.5,
        "description": "lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue",
        "image": "https://i.pravatar.cc/",
        "category": "electronic"
      }
      """
    When I send a GET request to "/product/17e9764e-b851-4a2a-87ca-0b7315e61330"
    Then the response status code should be 200
    And the response should have a payload:
      """
      {
        "id": "17e9764e-b851-4a2a-87ca-0b7315e61330",
        "title": "test product",
        "price": 13.5,
        "description": "lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue",
        "image": "https://i.pravatar.cc/",
        "category": "electronic"
      }
      """
