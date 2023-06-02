/// <reference types="Cypress" />
import { dragAndDrop } from "../page_object/dragAndDropPOM";
import { storyTask } from "../fixtures/testData";


let boardId;
// let taskId;
let orgId;
let orgName = 'Nova Org'
let boardName = 'Novi Board'
let taskName = 'Novi Task'

describe('Use drag and drop to move tasks', () => {
    before(() => {
        cy.loginBE();
        cy.visit('/');
        cy.contains('My Organizations').should('be.visible');
        cy.createOrganization(orgName).then(() => {
            expect(window.localStorage.getItem('orgId')).to.exist;
            cy.createScrumBoard(boardName, window.localStorage.getItem('orgId')).then(() => {
                cy.createTask(storyTask(taskName, window.localStorage.getItem('boardId')))
                boardId = window.localStorage.getItem('boardId');
                orgId = window.localStorage.getItem('orgId')
            })
            // taskId = window.localStorage.getItem('taskId');
        });

    })
    it('Successfully drag and drop, and assert tasks', () => {
        cy.visit(`/boards/${boardId}`).then(() => {
            dragAndDrop.successfullyMoveTask();
        })
    })

    after(() => {
        cy.deleteOrganization(orgId);
    })

})
