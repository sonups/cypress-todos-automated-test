
const listItem = 'ul.todo-list>li';
const destroyButton = 'button.destroy';
const markCompletedInput = 'input.toggle';

export const todoItemObjects = {
  verifyStatusOfTodoItemAsCompleted(item) {
    cy.get(listItem).each(($el,
      index, $list) => {
      // grabbing text from list item
      const txt = $el.text();
      // checking the matching item
      if (txt.includes(item)) {
        // capturing the next sibling with the help of next() method
        cy.get(listItem)
          .eq(index).then(($item) => {
            // verifying the status of Item
            //cy.wrap($item).contains(todoItemStatus, 'write tests').should('have.class', 'completed')
            cy.log($item)
            cy.log("check chek ")

            cy.wrap($item).should('have.class', 'completed')


          });
      }
    });
  },
  verifyStatusOfTodoItemAsNotCompleted(item) {
    cy.get(listItem).each(($el,
      index, $list) => {
      // grabbing text from list item
      const txt = $el.text();
      // checking the matching item
      if (txt.includes(item)) {
        // capturing the next sibling with the help of next() method
        cy.get(listItem)
          .eq(index).then(($item) => {
            // verifying the status of Item
            //cy.wrap($item).contains(todoItemStatus, 'write tests').should('have.class', 'completed')
            cy.log($item)
            cy.log("check chek ")

            cy.wrap($item).should('not.have.class', 'completed')


          });
      }
    });
  },
  removeToDoEntry(text) {
    cy.get(listItem).each(($el,
      index, $list) => {
      // grabbing text from list item
      const txt = $el.text();
      // checking the matching item
      if (txt.includes(text)) {
        // capturing the next sibling with the help of next() method
        cy.get(listItem)
          .eq(index).then(($item) => {
            // force clicking the item which uses :hover css
            cy.wrap($item).find(destroyButton).click({ force: true });
          });
      }
    });
  },
  markItemAsCompleted(text) {
    cy.get(listItem).each(($el,
      index, $list) => {
      // grabbing text from list item
      const txt = $el.text();
      // checking the matching item
      if (txt.includes(text)) {
        // capturing the next sibling with the help of next() method
        cy.get(listItem)
          .eq(index).then(($item) => {
            // click completed element
            cy.wrap($item).find(markCompletedInput).click();
          });
      }
    });
  },

};

let testdata = {};
before(function () {
  cy.fixture('testdata').then(function (data) {
    testdata.jsonplaceholder_url = data.jsonplaceholder_url;
  })
})

