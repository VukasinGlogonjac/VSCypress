
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
 
    get myTask() {
        return cy.get(`#task-${window.localStorage.getItem('taskId')}`)
    }

    get sprintInfoField() {
        return cy.get('div[name="sprint-info-dropdown"]')
    }

    get closeTaskBtn() {
        return cy.get('.el-icon-close')
    }
 
    successfullyMoveTask() {
        this.sprint1list.should('have.class', 'vs-is-empty')
        this.myTask.click()
        this.sprintInfoField.should('contain', 'Backlog')
        this.closeTaskBtn.click()
        this.myTask.drag(".vs-is-empty")
        this.sprint1list.should('not.have.class', 'vs-is-empty')

    }

}

export const dragAndDrop = new DragAndDrop
