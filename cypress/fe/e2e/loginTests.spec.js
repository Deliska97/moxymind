import {loginPage, dashboardPage} from "../pageObjects";

beforeEach(() => {
    cy.visit('/');
});

describe('Moxymind Login Tests – All Users', () => {

    it('Should verify login for all knows users', () => {
        cy.fixture('users').then((users) => {
            users.forEach((user) => {
                cy.log(`Testing login for ${user.username}`);

                // Reload page to reset state
                cy.visit('/');
                loginPage.login(user.username);

                if (user.shouldLogin) {
                    cy.url().should('include', '/inventory.html');
                    dashboardPage.verifySuccessfulLogin();

                    // problem_user image check
                    if (user.username === 'problem_user') {
                        dashboardPage.verifyProblemUserImages();
                    }

                    // visual_user layout check
                    if (user.username === 'visual_user') {
                        dashboardPage.verifyVisualUserLayout();
                    }
                } else {
                    loginPage.checkErrorMessage(user.error);
                }
            });
        });
    });

});

describe('Moxymind login tests – Negative flow', () => {
    it('Should reject login with invalid credentials', () => {
        loginPage.login('invalid_user', 'wrong_pass');
        loginPage.checkErrorMessage('Username and password do not match');
    });

    it('Should validate required fields', () => {
        // No username or password
        loginPage.getLoginButton.click();
        loginPage.checkErrorMessage('Username is required');

        // Missing password
        loginPage.getUsernameInput.type('standard_user');
        loginPage.getLoginButton.click();
        loginPage.checkErrorMessage('Password is required');
    });

    it('Should not open inventory page without login', () => {
        // No username or password
        cy.visit('/inventory.html', {failOnStatusCode: false});
        loginPage.checkErrorMessage('Epic sadface: You can only access \'/inventory.html\' when you are logged in.');

    });
});
