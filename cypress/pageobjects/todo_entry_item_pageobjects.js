//import {selectDropdownValue, verifydescendingOrderOfMovieRating} from '../utils/helper';

const listItem = 'ul.todo-list>li';
const destroyButton = 'button.destroy';
const markCompletedInput = 'input.toggle';


export const todoItemObjects = {
  removeToDoEntry(text) {
    cy.get(listItem).each(($el,
        index, $list) => {
      // grabbing text from list item
      const txt = $el.text();
      // checking the matching item
      if (txt.includes(text)) {
        // capturing the next sibling with the help of next() method
        cy.get(listItem)
            .eq(index).then(($item) =>{
              // force clicking the item which uses :hover css
              cy.wrap($item).find(destroyButton).click({force: true});
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
            .eq(index).then(($item) =>{
              // click completed element
              cy.wrap($item).find(markCompletedInput).click();
            });
      }
    });
  },

};
