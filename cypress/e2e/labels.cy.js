/// <reference types="Cypress" />
import "cypress-real-events/support";
import { labels } from "../page_object/labelsPOM";
const { email, password } = Cypress.env()
let taskId = ''
let boardId = ''
describe('Labels', () => {
    beforeEach(() => {
        labels.login(email, password)
    })

    it('Create label', () => {
        cy.intercept({
            method: "POST",
            url: "https://cypress-api.vivifyscrum-stage.com/api/v2/boards",
        }).as("boardCreated");
        labels.AddNewBtn.realHover()
        labels.AddBoard.click()
        labels.nameInputField.type("New Board")
        labels.nextBtn.click()
        labels.ScrumBtn.click()
        labels.nextBtn.click()
        labels.nextBtn.click()
        labels.nextBtn.click()
        labels.nextBtn.click()
        cy.wait('@boardCreated').then((intercept) => {
            boardId = intercept.response.body.id
            cy.log(boardId)
            labels.myBoardId(boardId).click()
        })
        cy.intercept({
            method: "POST",
            url: "https://cypress-api.vivifyscrum-stage.com/api/v2/tasks"
        }).as("taskCreated");
        labels.TrigerPlace.realHover()
        labels.NewTaskBtn.click()
        labels.TextArea.type("New Task")
        labels.NewTaskSave.click()
        cy.wait('@taskCreated').then((intercept) => {
            taskId = intercept.response.body.id
            cy.log(taskId)
            labels.myTask(taskId).click()
        
        })
        labels.ManageLabelBtn.click()
        labels.labelTitle.type("New Label")
        labels.labelColor.click()
        labels.chooseLabelColor.clear()
        labels.chooseLabelColor.type("#6bb9e8")
        labels.confirmClrBtn.click()
        labels.closeBtn.click()
        labels.allLabels.click()
        labels.deleteLabelBtn.click()
        labels.yesBtn.realClick()
    })
})