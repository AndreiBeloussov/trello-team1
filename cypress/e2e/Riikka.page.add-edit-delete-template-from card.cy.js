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

    //add new card from templete
    it('Add new card from templete', () => {
        //cy.get('[class="list-card js-member-droppable is-covered ui-droppable"]').eq(0).click();
        //cy.get('[class="button-link js-convert-to-template"]').click();
        //cy.get('[class="icon-md icon-close dialog-close-button js-close-window dialog-close-button--card-cover"]').click();

        //edit templete
        cy.get('[class="badge-icon icon-sm icon-template-card"]').click();
        cy.get('[class="window-title"]').clear().type('Templete1');
        cy.wait(3);
        cy.get('[class="nch-button ml-4 hide-on-edit js-show-with-desc js-edit-desc js-edit-desc-button"]').click();
        cy.get('[class="ak-editor-content-area less-margin css-96533n"]').clear().type('Templete text test');

    });

});