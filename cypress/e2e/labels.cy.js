/// <reference types="Cypress" />
import "cypress-real-events/support";
import { labels } from "../page_object/labelsPOM";
import { storyTask } from "../fixtures/testData";

let boardId;
let taskCode;
let orgId;

describe('Create, assert and delete labels', () => {
    before(() => {
        cy.loginBE();
        cy.visit('/');
        cy.contains('My Organizations').should('be.visible');
        cy.createOrganization('Nova Org').then(() => {
            expect(window.localStorage.getItem('orgId')).to.exist;
            cy.createScrumBoard('Novi Board', window.localStorage.getItem('orgId')).then(() => {
                cy.createTask(storyTask('Novi Task', window.localStorage.getItem('boardId')))
                boardId = window.localStorage.getItem('boardId');
                orgId = window.localStorage.getItem('orgId')
            })
            taskCode = window.localStorage.getItem('taskCode');
        });
    })
    after(() => {
        cy.deleteOrganization(orgId);
    })

    it('Create, assert and delete label successfully', () => {
        cy.visit(`https://cypress.vivifyscrum-stage.com/boards/${boardId}/${window.localStorage.getItem('taskCode')}`)
        labels.labelSucces()
    })
})