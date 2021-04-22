Feature: Test to verify the features of todo app 
# The features tested here are

#  -Add a todo entry 
#  -Remove a todo entry, 
#  -Mark a todo entry as completed
#  -Mark all todo entries as completed
#  -View All todo entries 
#  -View Active todo entries
#  -View Completed todo entries
#  - Verify 'Clear completed' link is visible once few items are marked as completed
#  -Remove Completed todo entries by clicking on 'Clear completed' link
#  -Verify what needs to be done label present in new-todo input text field 
#
# And the data generated from the endpoint https://jsonplaceholder.typicode.com/users/1/todos are used to drive these UI tests 

@add-todo @dev
Scenario: Add a todo entry 
  Given I open todo web application
   Then I add a new todo entry with text "task one"


@remove-todo @dev
Scenario: Remove a todoentry
  Given I open todo web application
   Then I add a new todo entry with text "task one"
    And I add a new todo entry with text "task two"
    And I add a new todo entry with text "task three"
    And I add a new todo entry with text "task four"
    And I add a new todo entry with text "task five"
    And I add a new todo entry with text "task six"
    And I add a new todo entry with text "task seven"
    And I add a new todo entry with text "task eight"
    And I add a new todo entry with text "task nine"
    And I add a new todo entry with text "task ten"
    And I add a new todo entry with text "task eleven"
    And I add a new todo entry with text "task twelve"
   Then I remove a todo entry with text "task two"
   Then I remove a todo entry with text "task four"
   Then I remove a todo entry with text "task six"
   Then I remove a todo entry with text "task eight"
   Then I remove a todo entry with text "task ten"
   Then I remove a todo entry with text "task twelve"

@mark-todo-as-completed @dev
Scenario: Mark a todo entry as completed
  Given I open todo web application
   Then I add a new todo entry with text "task one"
    And I add a new todo entry with text "task two"
    And I add a new todo entry with text "task three"
    And I add a new todo entry with text "task four"
    And I add a new todo entry with text "task five"
    And I add a new todo entry with text "task six"
    And I add a new todo entry with text "task seven"
    And I add a new todo entry with text "task eight"
   Then I mark a todo entry with text "task two" as completed
   Then I mark a todo entry with text "task four" as completed
   Then I mark a todo entry with text "task six" as completed
   Then I mark a todo entry with text "task eight" as completed

@mark-all-todos-as-completed @dev
Scenario: Mark all todo entries as completed
  Given I open todo web application
   Then I add a new todo entry with text "task one"
    And I add a new todo entry with text "task two"
    And I add a new todo entry with text "task three"
    And I add a new todo entry with text "task four"
    And I add a new todo entry with text "task five"
    And I add a new todo entry with text "task six"
    And I add a new todo entry with text "task seven"
    And I add a new todo entry with text "task eight"
   Then I mark all todo entries as completed
   Then the number of todos left should be "0 items left"

@view-all-todos @dev
Scenario: View All todo entries 
  Given I open todo web application
   Then I add a new todo entry with text "task one"
    And I add a new todo entry with text "task two"
    And I add a new todo entry with text "task three"
    And I add a new todo entry with text "task four"
    And I add a new todo entry with text "task five"
    And I add a new todo entry with text "task six"
    And I add a new todo entry with text "task seven"
    And I add a new todo entry with text "task eight"
   Then I mark a todo entry with text "task two" as completed
   Then I mark a todo entry with text "task four" as completed
   Then I mark a todo entry with text "task six" as completed
   Then I mark a todo entry with text "task eight" as completed
   Then I click on view All todo entries
   Then the number of todos left should be "4 items left"

@view-active-todos @dev
Scenario: View only Active todo entries
  Given I open todo web application
   Then I add a new todo entry with text "task one"
    And I add a new todo entry with text "task two"
    And I add a new todo entry with text "task three"
    And I add a new todo entry with text "task four"
    And I add a new todo entry with text "task five"
    And I add a new todo entry with text "task six"
    And I add a new todo entry with text "task seven"
    And I add a new todo entry with text "task eight"
   Then I mark a todo entry with text "task two" as completed
   Then I mark a todo entry with text "task four" as completed
   Then I mark a todo entry with text "task six" as completed
   Then I mark a todo entry with text "task eight" as completed
   Then I click on view only Active todo entries
   Then the number of todos left should be "4 items left"

@view-completed-todos @dev
Scenario: View only Completed todo entries
  Given I open todo web application
   Then I add a new todo entry with text "task one"
    And I add a new todo entry with text "task two"
    And I add a new todo entry with text "task three"
    And I add a new todo entry with text "task four"
    And I add a new todo entry with text "task five"
    And I add a new todo entry with text "task six"
    And I add a new todo entry with text "task seven"
    And I add a new todo entry with text "task eight"
   Then I mark a todo entry with text "task two" as completed
   Then I mark a todo entry with text "task four" as completed
   Then I mark a todo entry with text "task six" as completed
   Then I mark a todo entry with text "task eight" as completed
   Then I click on view only Completed todo entries
   Then the number of todos left should be "4 items left"

@verify-clear-completed-link @dev
Scenario:  Verify 'Clear completed' link is visible once few items are marked as completed
  Given I open todo web application
   Then I add a new todo entry with text "task one"
    And I add a new todo entry with text "task two"
    And I add a new todo entry with text "task three"
    And I add a new todo entry with text "task four"
   Then I mark a todo entry with text "task two" as completed
   Then I mark a todo entry with text "task four" as completed
   Then I click on view only Completed todo entries
   Then the number of todos left should be "2 items left"
   Then the Clear completed link should be visible

@remove-completed-from-clear-completed-link @dev
Scenario:  Remove Completed todo entries by clicking on 'Clear completed' link
  Given I open todo web application
   Then I add a new todo entry with text "task one"
    And I add a new todo entry with text "task two"
    And I add a new todo entry with text "task three"
    And I add a new todo entry with text "task four"
   Then I mark a todo entry with text "task two" as completed
   Then I mark a todo entry with text "task four" as completed
   Then I click on view only Completed todo entries
   Then the number of todos left should be "2 items left"
   And I click on the Clear completed Link



