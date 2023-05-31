class CreateOrgFe {

    get addNewOrgBtn() {
        return cy.contains("Add Organization")
    }

    get enterNameInputField() {
        return cy.get("input[placeholder='Enter name...']")
    }

    get addNewBtn() {
        return cy.contains("Add New")
    }

    get submitBtn() {
        return cy.get("button[type='submit']")
    }

    get nextBtn() {
        return cy.get("button[name='next_btn']")
    }

    get sidebar() {
        return cy.get("div[class='vb-content']")
    }

    get deleteBtn() {
        return cy.get('button[class="vs-c-btn vs-c-btn--warning vs-c-btn--spaced"]')
    }

    get passwordInputField() {
        return cy.get('input[placeholder="Enter current password"]')
    }

    get yesBtn() {
        return cy.get('button[name="save-btn"]')
    }

    clickOkBtn() {
        return cy.contains('OK').then(el => {
            if (el.length > 0) {
                return cy.contains('OK').click();
            }
            return;
        })
    }

    createOrganization() {
        const { password } = Cypress.env()

        cy.intercept({
            method: "POST",
            url: "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations",
        }).as("orgCreated");
        this.addNewBtn.click();
        this.addNewOrgBtn.click();
        this.enterNameInputField.type('Vukasin');
        this.nextBtn.click();
        this.nextBtn.click();
        this.clickOkBtn();
        this.sidebar.should('contain', 'Vukasin');
        cy.wait('@orgCreated').then((intercept) => {
            let orgId = intercept.response.body.id;
            cy.visit(`https://cypress.vivifyscrum-stage.com/organizations/${orgId}/settings`);
            this.deleteBtn.click();
            this.passwordInputField.type(password);
            this.yesBtn.click();
            this.sidebar.should('not.contain', 'Vukasin')
        })
    }

}

export const createOrgFe = new CreateOrgFe
