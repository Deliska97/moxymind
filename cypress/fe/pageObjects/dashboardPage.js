export class DashboardPage {

    get getInventoryItems() {
        return cy.get('.inventory_item');
    };

    verifySuccessfulLogin(){
        this.getInventoryItems.should('have.length.greaterThan', 0);
    }

    verifyProblemUserImages() {
        cy.get('.inventory_item_img img').each(($img) => {
            cy.wrap($img)
                .should('have.attr', 'src')
                .and('include', 'sl-404');
        });
    }

    verifyVisualUserLayout() {
        cy.get('.app_logo').should('be.visible');
    }
}