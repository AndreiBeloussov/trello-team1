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

    //add and remove labels
    it('Add and remove labels', () => {
        cy.get('.js-card-cover').eq(0).click();
        cy.get('.js-sidebar-action-text').contains('Labels').click();
        cy.get('.js-labels-list-item').eq("2").click();
        cy.get('.js-labels-list-item').eq("4").click();
        cy.get('.js-close-window').click();

        //remove labels
        cy.get('.js-card-cover').eq(0).click();
        cy.get('.js-sidebar-action-text').contains('Labels').click();
        cy.get('.js-labels-list-item').eq("2").click();
        cy.get('.js-labels-list-item').eq("4").click();
        cy.get('.js-close-window').click();
    });

});