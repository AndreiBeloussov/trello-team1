class BoardPage {
    constructor() {
        this.boardsMainTitle = 'myKanbanBoard';
    }

    boardUrlIsCorrect(url) {
        cy.url().should('include', url);
    }
}

export default new BoardPage()