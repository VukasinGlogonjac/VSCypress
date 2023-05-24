class ImageUpload {

get avatarUploader() {
    return cy.get('div[class="vs-c-avatar vs-c-settings-avatar-uploader"]')
}

get imageDragandDropPlace() {
    return cy.get('.el-upload__input')
}

get uploadBtn() {
    return cy.get('button[name="save-btn"]')
}

get myImg() {
    return cy.get('img[class="vs-c-img--avatar vs-c-img--board-avatar-lg"]')
}

get warningMsg() {
    return cy.get('div[class="el-message__group"]')
}

imageUploadSuccess() {
    this.avatarUploader.click();
    this.imageDragandDropPlace.attachFile('img_avatar.png').invoke('show').click();
    this.uploadBtn.click();
    this.myImg.should('be.visible');
}

tryImageUploadWithoutFile() {
    this.avatarUploader.click();
    this.uploadBtn.should('be.disabled')
}

tryToUploadWrongFileType() {
    this.avatarUploader.click();
    this.imageDragandDropPlace.attachFile('Kafe.docx').invoke('show').click();
    this.warningMsg.should('be.visible')
    this.uploadBtn.should('be.disabled')
}

}
export const imageUpload = new ImageUpload