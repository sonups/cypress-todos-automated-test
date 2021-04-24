import { todoObjects } from '../../pageobjects/todo_pageobjects'
import { todoItemObjects } from '../../pageobjects/todo_entry_item_pageobjects'

describe('Drive todos UI automation tests with data from JsonPlaceholder.com', () => {
    it('automated test', () => {
        cy.visit("https://todomvc.com/examples/react/#/")
        cy.request('http://localhost:3000/todos/')
            .then((resp) => {
                let counter = 1
                let responseBody = resp.body
                responseBody.length = 30
                cy.wrap(responseBody).each((item) => {
                    let id = item.id
                    let title = item.title
                    let userId = item.userId
                    let completedStatus = item.completed
                    todoObjects.addNewToDoEntry(title)
                    cy.log("created todo item:" + counter++)
                });
                counter = 1
                cy.wrap(responseBody).each((item) => {
                    let id = item.id
                    let title = item.title
                    let userId = item.userId
                    let completedStatus = item.completed
                    if (completedStatus == true) {
                        todoItemObjects.markItemAsCompleted(title)
                    }
                    cy.log("changed status of todo item: " + counter++)
                });
                counter = 1
                cy.wrap(responseBody).each((item) => {
                    let id = item.id
                    let title = item.title
                    let userId = item.userId
                    let completedStatus = item.completed
                    if (completedStatus == true) {
                        todoItemObjects.verifyStatusOfTodoItemAsCompleted(title)
                    }
                    else {
                        todoItemObjects.verifyStatusOfTodoItemAsNotCompleted(title)
                    }
                    cy.log("verified status of todo item: " + counter++)

                });


            })


    })


})
