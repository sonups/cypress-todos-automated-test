
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { todoObjects } from '../../pageobjects/todo_pageobjects'
import { todoItemObjects } from '../../pageobjects/todo_entry_item_pageobjects'

Given('I open todo web application', () => {
    cy.visit("https://todomvc.com/examples/react/#/")
})

//     Then I add a new todo entry with text "task one"
// Then I remove a todo entry with text "task two"
// Then I mark a todo entry with text "task two" as completed
// Then I mark all todo entries as completed
// Then the number of todos left should be "0 items left"
// Then I click on view All todo entries
// Then I click on view only Active todo entries
// Then I click on view only Completed todo entries
// Then the Clear completed link should be visible
// Then the number of todos left should be "4 items left"


Then('I add a new todo entry with text {string}', (text) => {
    todoObjects.addNewToDoEntry(text)
})

Then('I remove a todo entry with text {string}', (text) => {
    todoItemObjects.removeToDoEntry(text)
})

Then('I mark a todo entry with text {string} as completed', (text) => {
    todoItemObjects.markItemAsCompleted(text)
})

Then('I mark all todo entries as completed', () => {
    todoObjects.markAllToDoEntriesAsCompleted()
})


Then('the number of todos left should be {string}', (text) => {
    todoObjects.verifyNumberOfTodos(text)
})

Then('Verify the todo item {string} to be displayed as completed', (item) => {
    todoItemObjects.verifyStatusOfTodoItemAsCompleted(item, status)
})

Then('Verify the todo item {string} to be displayed as not-completed', (item) => {
    todoItemObjects.verifyStatusOfTodoItemAsNotCompleted(item, status)
})


Then('I click on view All todo entries', () => {
    todoObjects.viewAllTodos()
})


Then('I click on view only Active todo entries', () => {
    todoObjects.viewActiveTodos()
})

Then('I click on view only Completed todo entries', () => {
    todoObjects.viewCompletedTodos()
})

Then('the Clear completed link should be visible', () => {
    todoObjects.verifyClearCompletedLinkVisible()
})

Then('I click on the Clear completed Link', () => {
    todoObjects.ClickOnClearCompletedLink()
})

Then('I add a new todo entry with text {string}', (text) => {
    todoObjects.addNewToDoEntry(text)
})

