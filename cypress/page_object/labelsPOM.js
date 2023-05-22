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
        return cy.get('button[class="vs-add-new-task vs-c-btn vs-c-btn--themify-primary vs-c-btn--round vs-c-btn--sm"]')
    }

    get trigerPlace() {
        return cy.get('div[class="vs-c-task-list vs-is-empty"]')
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
        return cy.contains("Confirm")
    }

    get closeBtn() {
        return cy.get('button[name="close-item-modal-btn"]')
    }

    get labelDropDown() {
        return cy.get(':nth-child(1) > .vs-c-icon-title')
    }

    get allLabels() {
        return cy.get('[data-cy="board-labels"]')
    }

    get deleteLabelBtn() {
        return cy.get('button[class="vs-c-btn vs-c-btn--warning vs-c-btn--spaced"]')
    }

    get yesBtn() {
        return cy.get('button[name="save-btn"]')
    }

    get labelsTable() {
        return cy.get('.vs-c-labels-table').find('tbody');
    }

    get labelsTableRow() {
        return this.labelsTable.find('tr');
    }

    get firstEditLabelButton() {
        return this.labelsTableRow.first().find('a').eq(-1);
    }

    labelSucces() {
        
        labels.manageLabelBtn.click()
        labels.labelTitle.type("New Label")
        labels.labelColor.click()
        labels.chooseLabelColor.clear()
        labels.chooseLabelColor.type("#6bb9e8")
        labels.confirmClrBtn.click()
        labels.closeBtn.click()
        labels.allLabels.click()
        labels.firstEditLabelButton.click()
        labels.deleteLabelBtn.click()
        labels.yesBtn.realClick()
    }

    findMyBoardId(boardId) {
        return cy.get(`a[href="/boards/${boardId}"]`)
    }

    findMyTaskId(taskId) {
        return cy.get(`div[id="task-${taskId}"]`)
    }
}
export const labels = new Labels