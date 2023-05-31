/// <reference types="Cypress" />

import { createOrgFe } from "../page_object/createOrgFePOM";

describe('Creating org via frontend', () =>{
    beforeEach(() => {
        cy.loginBE();
        cy.visit('/');
    })

    it('Successfully created Organization',() => {
        createOrgFe.createOrganization()
    })
})
