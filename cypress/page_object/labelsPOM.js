class Labels {
    get addNewBtn() {
        return cy.contains('Add New')
    }
    get addBoard() {
        return cy.contains('Add Board')
    }
    get nameInputField() {
        return cy.get("input[name='name']")
    }
    get nextBtn() {
        return cy.get("button[name='next_btn']")
    }
    get scrumBtn() {
        return cy.get("span[name='type_scrum']")
    }
    get newTaskBtn() {
        return cy.get("body.theme-light:nth-child(2) div.vs-theme-light:nth-child(2) div.vs-l-app main.vs-l-project div.vs-l-board div.vs-c-columns div.vs-c-col:nth-child(2) div.vs-c-task-list.vs-is-empty > button.vs-add-new-task.vs-c-btn.vs-c-btn--themify-primary.vs-c-btn--round.vs-c-btn--sm:nth-child(1)")
    }
    get trigerPlace() {
        return cy.get(":nth-child(2) > .vs-c-task-list")
    }
    get textArea() {
        return cy.get("textarea[name='item_name']")
    }
    get newTaskSave() {
        return cy.get("button[name='new_item_save']")
    }
    get manageLabelBtn() {
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

    get labelsTable() {
        return cy.get('.vs-c-labels-table').find('tbody');
    }

    get labelsTableRow() {
        return this.labelsTable.find('tr');
    }

    get editLabelButton() {
        return this.labelsTableRow.first().find('a').eq(-1);
    }

    get firstEditLabelButton() {
        return this.labelsTableRow.first().find('a').eq(-1);
    }

    getEditLabelButtonByRow(row) {
        this.labelsTableRow.eq(row).find('a').eq(-1);
    }

    findMyBoardId (boardId) {
        return cy.get(`a[href="/boards/${boardId}"]`)
    }
    findMyTaskId(taskId) {
        return cy.get(`div[id="task-${taskId}"]`)
    }
}
    export const labels = new Labels