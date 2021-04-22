//import {selectDropdownValue, verifydescendingOrderOfMovieRating} from '../utils/helper';

const addNewToDoInputText = 'input.new-todo';
const markAllAsCompleted = 'label[for=\'toggle-all\']';
const toDoCount = 'span.todo-count';
const viewAllTodos = 'a[href=\'#/\']';
const viewActiveTodos = 'a[href=\'#/active\']';
const viewCompletedTodos = 'a[href=\'#/completed\']';
const clearCompletedLink = 'button.clear-completed';


export const todoObjects = {
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
    cy.get(toDoCount).then(($span) =>{
      const toDoCountText = $span.text();
      cy.log(toDoCountText);
    });
  },


};
