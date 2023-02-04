import BoardPage from "../pages/BoardPage";
import Boards from "../pages/Boards";
import LoginPage from "../pages/LoginPage";

describe('Test on Trello board', () => {

    //This board was created before manually through the UI
    //those constants will be different for each user
    const myKanbanBoard = 'Team 1 board Riikka';
    const myKanbanBoardUrl = 'https://trello.com/b/tFf4kNjW/team-1-board-riikka';

    beforeEach(() => {
        LoginPage.openTrelloLoginPage();

        //this information is kept in file cypress.congig.js, block 'env'
        LoginPage.loginWithUsernameAndPassword(Cypress.env('email'), Cypress.env('password'));
        Boards.boardsViewShouldBeVisible();
        Boards.openBoardByName(myKanbanBoard);
    });

    it('Checks that specific Trello board is open', () => {
        BoardPage.boardUrlIsCorrect(myKanbanBoardUrl);
    });

    //rename list (column)
    it('Edit column name', () => {
        cy.get('[class="list-header js-list-header u-clearfix is-menu-shown ui-sortable-handle"]').eq(1).click().type('Look' + '{enter}');
        cy.get('[class="list-header-name-assist js-list-name-assist"]').eq(1).should('contain', 'Look');
        cy.get('[class="list-card js-member-droppable is-covered ui-droppable"]').eq(1).click();
        cy.get('[class="window-title"]').clear().type('Look');
        cy.get('[class="icon-md icon-close dialog-close-button js-close-window dialog-close-button--card-cover"]').click();
    });

});