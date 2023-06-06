
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
        return this.backlogList.find('div').eq(0)
    }

    get myTask() {
        return cy.get(`#task-${window.localStorage.getItem('taskId')}`)
    }

    get sprintInfoField() {
        return cy.get('.vs-c-modal-status__text')
    }

    get closeTaskBtn() {
        return cy.get('.vs-c-item-modal-close')
    }

    sprint1listAssert(className, condition = '') {
        return this.sprint1list.should(`${condition}have.class`, className)
    }

    numberOfTasksInBacklog(length) {
        return this.checkIfTaskNumberInBacklogChanged.children()
            .should('have.length', (length))
    }

    taskSprintStatus(sprint) {
        return this.sprintInfoField.should('contain', sprint)
    }
    checkIfTaskNumberInBacklogChangedAssert(length) {
        this.checkIfTaskNumberInSprintChanged
        .children()
        .first()
        .invoke('hide')
        .should('have.length', length)
    }

    successfullyMoveTask() {
        this.numberOfTasksInBacklog(2)
        this.sprint1listAssert('vs-is-empty')
        this.myTask.click()
        this.taskSprintStatus('Backlog')
        this.closeTaskBtn.click()
        this.myTask.drag('.vs-is-empty')
        this.numberOfTasksInBacklog(1)
        this.checkIfTaskNumberInBacklogChangedAssert(1)
        this.sprint1listAssert('vs-is-empty', 'not.')
        this.myTask.click()
        this.taskSprintStatus('Sprint 1')
    }

}

export const dragAndDrop = new DragAndDrop
