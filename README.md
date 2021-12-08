# cypress-axe-project
A sample project to demonstrate how to catch basic accessibility issues with Cypress and Cypress-Axe

## Pre-requisites
[Node and NPM](https://nodejs.org/en/download/)

## Installing Dependencies
To install dependencies, please run `npm i` on the root of this project

## Adding to the project `<{application}_GUI />`
Essentially, just add your frontend idea here, and post about like creating a GUI that generates command line and outputs command line 

this will all depend on the cypress.json file, of course. 

this is a great a11y tester to be included within a CI/CD build
<br>`({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})({})`<br>
so that is <i>one</i> application for a command => GUI CI/CD runner... another would be... setting up notification emails from WordPress plugins when they are ready to be updated. 

## For this, you would need access to the `WP-API`
Gain access to the API, access all plugins and check current versions. Then:
- is there a place on the API where plugin updates are actually registered? Like, how do they enter the API? Just take that data. 





- And the GUI you are building will take the commands from the command line to basically query the WP-API to see if there are plugin updates/messages/other_content/etc... and the user will be able to sign in to notifications for this 

<i>On a higher level, this is a node project within the WP folder .... like the root folder of the WP project... and, it doesn't really depend on the project itself, since it is all going to be authorized/administrator approved in the GUI, but the project should be located at the root of the WP project, just for ease... 
and... maybe don't include the folder in the build... like, this is just a devX kinda thing, lol...</i>
<br><br>

## Then, cycle through different browsers 
- set it up to NOT destroy the old/current tests and so they cycle through the different browsers.
- the `<H1>` names in the HTML are seen with the browser names, because of the <span style="background-color:#F7F7F7;padding-left:2px;padding-right:2px;">browser</span> variable.


## Use the Jira Rest API to connect HTML results to Jira board: 
- https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/<br>
- https://stackoverflow.com/questions/60641860/need-to-get-project-issues-from-jira-using-jira-rest-api-with-nodejs
