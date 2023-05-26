describe('login via BE', () => {
    it('basic test', () => {
        cy.loginBE();
        cy.visit('/');
        cy.contains('My Organizations').should('be.visible');
    })
})
