/// <reference types="Cypress" />
import "cypress-real-events/support";
import { labels } from "../page_object/labelsPOM";
import { storyTask } from "../fixtures/testData";

let boardId;
let taskCode;

describe('Create, assert and delete labels', () => {
    before(() => {
        cy.loginBE();
        cy.visit('/');
        cy.contains('My Organizations').should('be.visible');
        cy.createOrganization('test org').then(() => {
            expect(window.localStorage.getItem('orgId')).to.exist;
            cy.createScrumBoard('Test', window.localStorage.getItem('orgId')).then(() => {
                cy.createTask(storyTask('created BEEEEEE', window.localStorage.getItem('boardId')))
                boardId = window.localStorage.getItem('boardId');
            })
            taskCode = window.localStorage.getItem('taskCode');
        });
      
    })
    it('Create, assert and delete label successfully', () => {
        cy.log("TASK CODE", )
        cy.visit(`https://cypress.vivifyscrum-stage.com/boards/${boardId}/${window.localStorage.getItem('taskCode')}`)
        labels.labelSucces()
    })
})