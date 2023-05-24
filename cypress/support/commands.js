// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add("loginBE", () => {
  cy.request({
    method: "POST",
    url: `${Cypress.env("apiUrl")}/login`,
    body: {
      email: Cypress.env("email"),
      password: Cypress.env("password"),
    },
  }).then((response) => {
    window.localStorage.setItem("token", response.body.token);
    window.localStorage.setItem("user", JSON.stringify(response.body.user));
    window.localStorage.setItem("user_id", response.body.user.id);
  });
});


Cypress.Commands.add("createOrganization", (orgName) => {
  cy.request({
    method: "POST",
    url: "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: {
      name: orgName,
    },
  }).then((response) => {
    window.localStorage.setItem("orgId", response.body.id);
  });
});

Cypress.Commands.add("createScrumBoard", (boardName, orgId) => {
  cy.request({
    method: "POST",
    url: "https://cypress-api.vivifyscrum-stage.com/api/v2/boards",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: {
      name: boardName,
      type: "scrum_board",
      organization_id: orgId,
    },
  }).then((response) => {
    console.log('ID', response.body)
    window.localStorage.setItem("boardId", response.body.id);
  });
});

Cypress.Commands.add("createTask", (body) => {
  cy.request({
    method: "POST",
    url: "https://cypress-api.vivifyscrum-stage.com/api/v2/tasks",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: body
  }).then((response) => {
    console.log(response.body.code, "Task")
    window.localStorage.setItem("taskCode", response.body.code);
  });
});

Cypress.Commands.add("deleteOrganization", (orgId) => {
  cy.request({
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    url: `https://cypress-api.vivifyscrum-stage.com/api/v2/organizations/${orgId}`,
    body: {
      passwordOrEmail: "test1234",
    },
  });
});

Cypress.Commands.add("deleteBoard", (boardId) => {
  cy.request({
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    url: `https://cypress-api.vivifyscrum-stage.com/api/v2/boards/${boardId}`,
  });
});







