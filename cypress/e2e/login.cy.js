/// <reference types="Cypress" />
import { labels } from "../page_object/labelsPOM"
const { email, password } = Cypress.env()

describe('Login', () => {

    it('Successful login ', () => {
       labels.login(email, password)
        cy.url().should('not.contain', 'login')
       labels.emailInputField.should('not.to.exist')
       labels.passwordInputField.should('not.to.exist')
       labels.SubmitBtn.should('not.to.exist')
       
    })
    it('Unsuccessful login - invalid email input', () => {
       labels.login('nesto', password)
        cy.url().should('contain', 'login')
       labels.emailInputField.should('be.visible')
       labels.passwordInputField.should('be.visible')
       labels.SubmitBtn.should('be.visible')
    })
    it('Unsuccessful login - wrong password', () => {
       labels.login(email, 'nesto123')
        cy.url().should('contain', 'login')
       labels.emailInputField.should('be.visible')
       labels.passwordInputField.should('be.visible')
       labels.SubmitBtn.should('be.visible')
    })
    it('Unsuccessful login - wrong email adress', () => {
       labels.login('vuleglogonjac@gmail', password)
        cy.url().should('contain', 'login')
       labels.emailInputField.should('be.visible')
       labels.passwordInputField.should('be.visible')
       labels.SubmitBtn.should('be.visible')
    })

})