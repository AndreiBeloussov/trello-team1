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

    //change workspace visibility to Private and back
    it('Change visibility to Private and back to Workspace', () => {
        cy.get('[id="permission-level"]')
        cy.get('[class="board-header-btn-text"]').eq(0).click()
        cy.get('[class="pop-over-header js-pop-over-header"]')
        cy.get('[class="js-select"]').eq(0).click()
        cy.get('[class="board-header-btn-text"]').eq(0).click()
        cy.get('[class="pop-over-header js-pop-over-header"]')
        cy.get('[class="js-select"]').eq(1).click()
    });
});