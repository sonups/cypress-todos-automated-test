// import { forEach,sortBy } from "cypress/types/lodash"
const _ = require('lodash');

export const getArrayRandomelement = (arr) => {
  if (arr && arr.length) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
};

export const selectDropdownValue = (dropdownelement, text) => {
  cy.log(`${dropdownelement}:${text}`);
  cy.get(dropdownelement).select(text)
      .should('contain', text);
};

export const verifydescendingOrderOfMovieRating = (movieRatingIdentifier) => {
  cy.get(movieRatingIdentifier)
      .within(() => {
        const cellsToRatingObjects = (cells$) => {
          return _.map(cells$, (cell$) => {
            return {
              rating: Number(cell$.textContent),
            };
          });
        };

        cy.get('strong')
            .then(cellsToRatingObjects)
            .then((rating) => {
              // console.table(rating)
              const sorted = _.sortBy(rating);

              expect(rating, 'cells are sorted').to.deep.equal(sorted);
            });
      });
};


