Feature: Test to verify the expose REST API endpoints from jsonplaceholder.typicode.com

    # pointing the jsonplaceholder application to http://localhost:3000 due to service unavailability .
    # This is achived by running the jsonplaceholder app from docker

    # The features tested here are
    # Get a todo item using GET http method
    # Create a todo resource on /todos endpoint using POST http method
    # Delete an todo item on /todos endpoint using DELETE http method


    #GET http method
    @read-rest-api @dev @rest-tests
    Scenario: Get a todo item using GET http method
    When Using REST service I get a todo ITEM - GET method

    #POST http method
    @create-rest-api @dev @rest-tests
    Scenario: Create a todo resource on /todos endpoint using POST http method
        When Using REST service I add a todo ITEM - POST method

    #DELETE http method
    @delete-rest-api @dev @rest-tests
    Scenario: Delete an todo item on /todos endpoint using DELETE http method
    When Using REST service I delete a todo ITEM - DELETE method

