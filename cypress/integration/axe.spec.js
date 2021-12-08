/// <reference types="cypress" />

////https://www.mariedrake.com/post/test-reporting-with-cypress-and-mochawesome <== this has a lot of the config stuff for the reporting

//node_modules/.bin/cypress run --env url=https://www.mihc.org/la-puerta/ --spec "cypress/integration/axe.spec.js"
//npm run generate:html:report
//test reports run on Live Server (VSCode) @ http://127.0.0.1:5500/TestReport/tests-report.html
//there is a video of the automation in cypress/videos
const url = Cypress.env("url");
const selector = Cypress.env("selectors");
describe("Axe Demo", () => {
  it("should catch accessibility issues on the entire page", () => {
    cy.visit(`${url}`);
    cy.injectAxe();
    //how to exclude specific rules...
    // cy.checkA11y(
    //   {},
    //   {
    //     rules: {
    //       "page-has-heading-one": { enabled: false },
    //     },
    //   }
    // );
  });

  //to check for a11y errors in one part of the page:
  it(`has no a11y errors in ${selector}`, () => {
    cy.checkA11y(`${selector}`);
  });
});
