Feature: Get a product that already exists in the database.

  Scenario: Get two exiting products Succesfully
    Given An empty database
    And in the db a Product is save with the following properties:
      """
      {
        "id": "64326ad7-4615-415e-8e1a-4e42ee82680e",
        "title": "test product 1",
        "price": 13.5,
        "description": "lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue",
        "image": "https://i.pravatar.cc/",
        "category": "electronic"
      }
      """
    And in the db a Product is save with the following properties:
      """
      {
        "id": "76130669-11f2-42f5-829d-6c22d0440426",
        "title": "test product 2",
        "price": 100.52,
        "description": "lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue",
        "image": "https://i.pravatar.cc/",
        "category": "electronic"
      }
      """
    When I send a GET request to "/products"
    Then the response status code should be 200
    And the response should have a payload:
      """
      [
        {
          "id": "64326ad7-4615-415e-8e1a-4e42ee82680e",
          "title": "test product 1",
          "price": 13.5,
          "description": "lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue",
          "image": "https://i.pravatar.cc/",
          "category": "electronic"
        },
        {
          "id": "76130669-11f2-42f5-829d-6c22d0440426",
          "title": "test product 2",
          "price": 100.52,
          "description": "lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue",
          "image": "https://i.pravatar.cc/",
          "category": "electronic"
        }
      ]
      """
