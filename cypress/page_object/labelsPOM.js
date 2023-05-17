class Labels {

    get emailInputField() {
        return cy.get("input[type='email']")
    }
    get passwordInputField() {
        return cy.get("input[type='password']")
    }
    get passwordInputField() {
        return cy.get("input[type='password']")
    }
    get SubmitBtn() {
        return cy.get("button[type='submit']")
    }
    get AddNewBtn() {
        return cy.contains('Add New')
    }
    get AddBoard() {
        return cy.contains('Add Board')
    }
    get nameInputField() {
        return cy.get("input[name='name']")
    }
    get nextBtn() {
        return cy.get("button[name='next_btn']")
    }
    get ScrumBtn() {
        return cy.get("span[name='type_scrum']")
    }
    myBoardId (boardId) {
        return cy.get(`a[href="/boards/${boardId}"]`)
    }
    get NewTaskBtn() {
        return cy.get("body.theme-light:nth-child(2) div.vs-theme-light:nth-child(2) div.vs-l-app main.vs-l-project div.vs-l-board div.vs-c-columns div.vs-c-col:nth-child(2) div.vs-c-task-list.vs-is-empty > button.vs-add-new-task.vs-c-btn.vs-c-btn--themify-primary.vs-c-btn--round.vs-c-btn--sm:nth-child(1)")
    }
    get TrigerPlace() {
        return cy.get(":nth-child(2) > .vs-c-task-list")
    }
    get TextArea() {
        return cy.get("textarea[name='item_name']")
    }
    get NewTaskSave() {
        return cy.get("button[name='new_item_save']")
    }
    get ManageLabelBtn() {
        return cy.get("button[title='Manage Labels']")
    }
    get labelTitle() {
        return cy.get("input[placeholder='Search Labels (add, edit, delete)']")
    }
    get labelColor() {
        return cy.get(".vs-c-label-color-preview")
    }
    get chooseLabelColor() {
        return cy.get('input[class="input__input"]')
    }
    get confirmClrBtn() {
        return cy.get(".el-row > :nth-child(2) > .el-button > span")
    }
    get closeBtn() {
        return cy.get('button[name="close-item-modal-btn"]')
    }
    get labelDropDown() {
        return cy.get(':nth-child(1) > .vs-c-icon-title')
    }
    get allLabels () {
        return cy.get('[data-cy="board-labels"] > span > div > .vs-c-site-logo')
    }
    get deleteLabelBtn() {
        return cy.get(':nth-child(1) > .el-table_1_column_6 > .cell > .vs-c-labels-table-worklog-cell > .vs-u-text--right > button.el-button > span')
    }
    get yesBtn() {
        return cy.get('.el-button--success')
    }
    myTask(taskId) {
        return cy.get(`div[id="task-${taskId}"]`)
    }
    login(email, password) {
        cy.visit('/login')
        this.emailInputField.type(email)
        this.passwordInputField.type(password)
        this.SubmitBtn.click()
    }
}
    export const labels = new Labels