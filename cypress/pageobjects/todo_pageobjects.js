import { todoItemObjects } from '../pageobjects/todo_entry_item_pageobjects'
const addNewToDoInputText = 'input.new-todo';
const markAllAsCompleted = 'label[for=\'toggle-all\']';
const toDoCount = 'span.todo-count';
const viewAllTodos = 'a[href=\'#/\']';
const viewActiveTodos = 'a[href=\'#/active\']';
const viewCompletedTodos = 'a[href=\'#/completed\']';
const clearCompletedLink = 'button.clear-completed';

// cy.request('http://localhost:3000/todos/')
// .then((resp) => {
//     let counter = 1
//     let responseBody = resp.body
//     responseBody.length = 30
//     cy.wrap(responseBody).each((item) => {
//         let id = item.id
//         let title = item.title
//         let userId = item.userId
//         let completedStatus = item.completed
//         todoObjects.addNewToDoEntry(title)
//         cy.log("todo item number = " + counter++)


//     });

export const todoObjects = {
  addMultipleTodosFromRESTService(number) {
    cy.request(testdata.jsonplaceholder_url + '/todos/')
      .then((resp) => {
        let counter = 1
        let responseBody = resp.body
        responseBody.length = number
        cy.wrap(responseBody).each((item) => {
          let id = item.id
          let title = item.title
          let userId = item.userId
          let completedStatus = item.completed
          todoObjects.addNewToDoEntry(title)
          cy.log("created todo item:" + counter++)


        });
      })
  },
  changeTodoStatusOfMUltipleItemsBasedonValuesFromREST(number) {
    cy.request(testdata.jsonplaceholder_url + '/todos/')
      .then((resp) => {
        let counter = 1
        let responseBody = resp.body
        responseBody.length = number
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
      })
  },
  verifyTodoStatusOfMUltipleItemsBasedonValuesFromREST(number) {
    cy.request(testdata.jsonplaceholder_url + '/todos/')
      .then((resp) => {
        let counter = 1
        let responseBody = resp.body
        responseBody.length = number
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
  },
  addNewToDoEntry(text) {
    cy.get(addNewToDoInputText).type(text).type('{enter}');
  },
  markAllToDoEntriesAsCompleted() {
    cy.get(markAllAsCompleted).click();
  },
  verifyNumberOfTodos(text) {
    cy.get(toDoCount).should('contain', text);
  },
  verifyClearCompletedLinkVisible() {
    cy.get(clearCompletedLink).should('be.visible');
  },
  ClickOnClearCompletedLink() {
    cy.get(clearCompletedLink).click();
  },
  viewAllTodos(text) {
    cy.get(viewAllTodos).click();
  },
  viewActiveTodos(text) {
    cy.get(viewActiveTodos).click();
  },
  viewCompletedTodos(text) {
    cy.get(viewCompletedTodos).click();
  },
  extractText(String) {
    cy.get(toDoCount).then(($span) => {
      const toDoCountText = $span.text();
      cy.log(toDoCountText);
    });
  },


};


let testdata = {};
before(function () {
  cy.fixture('testdata').then(function (data) {
    testdata.jsonplaceholder_url = data.jsonplaceholder_url;
  })
})

