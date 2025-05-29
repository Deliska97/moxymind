export class LoginPage {
    get getUsernameInput() {
        return cy.getByDataTest('username');
    }

    get getPasswordInput() {
        return cy.getByDataTest('password');
    }

    get getLoginButton() {
        return cy.getByDataTest('login-button');
    }

    get getErrorMessage() {
        return cy.getByDataTest('error');
    }

    login(username, password = Cypress.env('password')) {
        this.getUsernameInput.type(username);
        this.getPasswordInput.type(password);
        this.getLoginButton.click();
    }

    checkErrorMessage(expectedMessage) {
        this.getErrorMessage.should('be.visible').and('contain', expectedMessage);
    }

}