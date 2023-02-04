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


    //copy list (column)
    it('Copy column', () => {
        //open ... ec extras menu
        cy.get('[class="list-header-extras-menu dark-hover js-open-list-menu icon-sm icon-overflow-menu-horizontal"]').eq(1).click();
        //copy
        cy.get('[class="js-copy-list"]').click();
        //rename copied list
        cy.get('.pop-over-content textarea').type("Design2");
        cy.get('input[value="Create list"]').click();
    });

    //archive copyed list (column)
    it('Archive list', () => {
        cy.get('[class="list-header-extras-menu dark-hover js-open-list-menu icon-sm icon-overflow-menu-horizontal"]').eq(2).click();
        cy.get('[class="js-close-list"]').click();
    });
});