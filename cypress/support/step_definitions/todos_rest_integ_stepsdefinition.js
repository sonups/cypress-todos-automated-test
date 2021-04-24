
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { todoObjects } from '../../pageobjects/todo_pageobjects'
import { todoItemObjects } from '../../pageobjects/todo_entry_item_pageobjects'


When('I add {string} number of todo entries from the jsonplaceholder api', (number) => {
    todoObjects.addMultipleTodosFromRESTService(number)
})

And('I change status of {string} number of todo entries from the jsonplaceholder api', (number) => {
    todoObjects.changeTodoStatusOfMUltipleItemsBasedonValuesFromREST(number)
})

Then('I verify the status of {string} number of todo entries from the jsonplaceholder api', (number) => {
    todoObjects.verifyTodoStatusOfMUltipleItemsBasedonValuesFromREST(number)
})



