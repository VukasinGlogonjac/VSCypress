/// <reference types="Cypress" />
import { imageUpload } from "../page_object/imageUploadPOM";

let boardId;
let orgId;

describe('Upload an image to the board', () => {
  
    beforeEach(() => {
        cy.loginBE();
        cy.createOrganization('My New Organization').then(() => {
            expect(window.localStorage.getItem('orgId')).to.exist;
            cy.createScrumBoard('My New Board', window.localStorage.getItem('orgId')).then(() => {
                boardId = window.localStorage.getItem('boardId');
                orgId = window.localStorage.getItem('orgId');
                cy.visit(`https://cypress.vivifyscrum-stage.com/boards/${boardId}/settings`);
            });
        });
    })

    it('Successful board image upload',() =>{
        imageUpload.imageUploadSuccess();
    })
    it('Try to upload wrong file type',() => {
        imageUpload.tryToUploadWrongFileType();
    })
    it('Try image upload without file', () => {
        imageUpload.checkIfUploadBtnIsDisabled();
    })

    afterEach(() => {
        cy.deleteOrganization(orgId);
    })

})
