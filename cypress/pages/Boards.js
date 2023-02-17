class Boards {
    constructor() {
        this.boardsMainTitle = 'YOUR WORKSPACES';
    }

    openBoardByName(name) {
        cy.contains(name).click();
        cy.get('h1').contains(name).should('be.visible');
    }

    boardsViewShouldBeVisible() {
        cy.get('.spinner').should('not.exist');
        cy.url().should('include', '/boards');
        cy.get('.boards-page-section-header-name').contains(this.boardsMainTitle).should('be.visible');
    }

    boardUrlIsCorrect(url) {
        cy.url().should('include', url);
    }
}

export default new Boards()