/// <reference types="Cypress" />

import { datePicker } from "../page_object/datePickerPOM";
import { storyTask } from "../fixtures/testData";
let boardId;
let taskCode;
let orgId;

describe('Create, assert and dates in worklog', () => {
    before(() => {
        cy.loginBE();
        cy.createOrganization('Nova Orrrg').then(() => {
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
    
    it('Create worklog date successfully', () => {
        cy.visit(`https://cypress.vivifyscrum-stage.com/boards/${boardId}/${window.localStorage.getItem('taskCode')}`)
         datePicker.datePickerSuccess();
    })

})
