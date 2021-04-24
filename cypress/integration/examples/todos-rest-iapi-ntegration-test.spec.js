import { todoObjects } from '../../pageobjects/todo_pageobjects'
import { todoItemObjects } from '../../pageobjects/todo_entry_item_pageobjects'


let testdata = {};
describe('Drive todos UI automation tests with data from JsonPlaceholder.com', () => {
    before(function () {
        cy.fixture('testdata').then(function (data) {
          testdata.jsonplaceholder_url = data.jsonplaceholder_url;
        })
      })

      
    it('automated test', () => {
        cy.visit("https://todomvc.com/examples/react/#/")
        cy.request(testdata.jsonplaceholder_url+'/todos/')
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
                let counter1 = 1
                cy.wrap(responseBody).each((item) => {
                    let id = item.id
                    let title = item.title
                    let userId = item.userId
                    let completedStatus = item.completed
                    if (completedStatus == true) {
                        todoItemObjects.markItemAsCompleted(title)
                    }
                    cy.log("changed status of todo item: " + counter1++)
                });
                let counter2 = 1
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
                    cy.log("verified status of todo item: " + counter2++)

                });


            })


    })


})
