class Login {

    get emailInputField() {
        return cy.get("input[type='email']")
    }

    get passwordInputField() {
        return cy.get("input[type='password']")
    }

    get passwordInputField() {
        return cy.get("input[type='password']")
    }

    get submitBtn() {
        return cy.get("button[type='submit']")
    }

    login(email, password) {
        cy.visit('/login')
        this.emailInputField.type(email)
        this.passwordInputField.type(password)
        this.submitBtn.click()
    }
}
    export const login = new Login