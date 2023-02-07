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

    it('Add card as a template', () => {
        cy.get('[class="list-card js-member-droppable is-covered ui-droppable"]').eq(0).click();
        cy.get('.js-convert-to-template').click();
        cy.get('.js-close-window').click();

    });

    it('Edit template', () => {
        cy.get('[class="badge-icon icon-sm icon-template-card"]').click();
        cy.get('.js-card-detail-title-input').clear().type('Templete1');
        cy.get('.js-edit-desc-button').click();
        cy.get('[class="ak-editor-content-area less-margin css-96533n"]').clear().type('Template text test');
        cy.get('.js-close-window').click();
    });

    it('Create new card from template', () => {
        cy.get('[class="badge-icon icon-sm icon-template-card"]').click();
        cy.get('[data-testid="create-card-from-template-banner-button"]').click();
        cy.get('[data-testid="card-title-textarea"]').clear().type('New Card from Template');
    });

    it('Delete template', () => {
        cy.get('[class="badge-icon icon-sm icon-template-card"]').click();
        cy.get('.js-delete-card').click();
        //cy.get('.js-confirm').click();

    });
});