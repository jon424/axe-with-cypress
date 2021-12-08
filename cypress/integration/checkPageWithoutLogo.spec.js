/// <reference types="cypress" />

const url = Cypress.env("url");
const header = Cypress.env("header");
describe("Axe Demo", () => {
  it("should check for a11y issues while excluding the page header section", () => {
    cy.visit(`${url}`);
    // cy.get(".la-puerta__header");
    cy.injectAxe({ exclude: [`${header}`] });
    cy.checkA11y();
  });
});
