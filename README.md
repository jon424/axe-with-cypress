# Automated A11y Testing With Cypress

## To use this project

First, clone this repo to your local computer.

Then, change directories so that your command line is located at 'cypress-axe-project'. 
run:
```
npm i
```

run:
```
cypress install
```

to run a sample test from the command line:
```
npm run clean:reports & node_modules/.bin/cypress run --env url=https://www.mihc.org/la-puerta/,selectors=.la-puerta-logo
```

then, to generate the html report:
```
npm run generate:html:report
```

then, open the html file (located in TestReport/tests-report.html)

You can see some accessibility tests passing, and others failing. Clicking on the test result will show Additional Test Context which contains the types of accessiblity errors that are present on the page you are testing:

