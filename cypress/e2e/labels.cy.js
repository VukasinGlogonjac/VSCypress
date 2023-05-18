/// <reference types="Cypress" />
import "cypress-real-events/support";
import { labels } from "../page_object/labelsPOM";
import { login } from "../page_object/loginPOM";
const { email, password, apiUrlTask, apiUrlBoard } = Cypress.env()
let taskId
let boardId
describe('Labels', () => {
    beforeEach(() => {
        login.login(email, password)
    })

    it('Create, assert and delete labels', () => {
        cy.intercept({
            method: "POST",
            url: apiUrlBoard,
        }).as("boardCreated");
        labels.addNewBtn.realHover()
        labels.addBoard.click()
        labels.nameInputField.type("New Board")
        labels.nextBtn.click()
        labels.scrumBtn.click()
        labels.nextBtn.click()
        labels.nextBtn.click()
        labels.nextBtn.click()
        labels.nextBtn.click()
        cy.wait('@boardCreated').then((intercept) => {
            boardId = intercept.response.body.id
            cy.log(boardId)
            labels.findMyBoardId(boardId).click()
        })
        cy.intercept({
            method: "POST",
            url: apiUrlTask
        }).as("taskCreated");
        labels.trigerPlace.realHover()
        labels.newTaskBtn.click()
        labels.textArea.type("New Task")
        labels.newTaskSave.click()
        cy.wait('@taskCreated').then((intercept) => {
            taskId = intercept.response.body.id
            cy.log(taskId)
            labels.findMyTaskId(taskId).click()
        
        })
        labels.manageLabelBtn.click()
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