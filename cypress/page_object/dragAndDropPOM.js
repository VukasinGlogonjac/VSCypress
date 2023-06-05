
class DragAndDrop {

    get backlogList() {
        return cy.get('.vs-c-task-list').first()
    }

    get backlogTasksPlace() {
        return this.backlogList.find('div').first()
    }

    get sprint1list() {
        return cy.get('.vs-c-task-list').last()
    }

    get checkIfTaskNumberInSprintChanged() {
        return this.sprint1list.find('div').first()
    }

    get checkIfTaskNumberInBacklogChanged() {
        return cy.get('.vs-c-task-list').first().find('div').eq(0)
    }
 
    get myTask() {
        return cy.get(`#task-${window.localStorage.getItem('taskId')}`)
    }

    get sprintInfoField() {
        return cy.get('div[name="sprint-info-dropdown"]')
    }

    get closeTaskBtn() {
        return cy.get('button[name="close-item-modal-btn"]')
    }
 
    successfullyMoveTask() {
        this.checkIfTaskNumberInBacklogChanged.children().should('have.length', 2)
        this.sprint1list.should('have.class', 'vs-is-empty')
        this.myTask.click()
        this.sprintInfoField.should('contain', 'Backlog')
        this.closeTaskBtn.click()
        this.myTask.drag(".vs-is-empty")
        // cy.reload();
        this.checkIfTaskNumberInBacklogChanged.children().should('have.length', 1)
        this.checkIfTaskNumberInSprintChanged.children().first().invoke('hide').should('have.length', 1)
        this.sprint1list.should('not.have.class', 'vs-is-empty')
        this.myTask.click()
        this.sprintInfoField.should('contain', 'Sprint 1')
    }

}

export const dragAndDrop = new DragAndDrop
