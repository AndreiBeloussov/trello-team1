import BoardPage from "../pages/BoardPage";
import Boards from "../pages/Boards";
import LoginPage from "../pages/LoginPage";

describe('Test on Trello board', () => {

    //This board was created before manually through the UI
    //those constants will be different for each user
    const myKanbanBoard = 'team 1 board kaspar';
    const myKanbanBoardUrl = 'https://trello.com/b/S9KoFkwr/team-1-board-kaspar';

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

    it('Create a list', () => {

        cy.get('.js-add-list').click();
        cy.get('.list-name-input').type('New list');
        cy.get('.js-save-edit').click();


    });

    it('Assert that list is created', () => {

        cy.get('.list-header-name-assist').should('contain', 'New list');

    });

    it('Rename list', () => {

        cy.get('.js-list-header').click().type('Renamed list' + '{enter}');
        cy.get('.js-list-header').contains('Renamed list');

    });

    it('Add card', () => {

        cy.get('.open-card-composer').wait(2000).type('Test card');
        cy.contains('Add card').click();
        cy.get('#board').click();

    });


    it('Rename card', () => {

        cy.get('.list-card-details').click()
        cy.get('.mod-card-back-title').click()
        cy.focused().clear().wait(1000).type('Renamed card' + '{enter}');
        cy.get('.icon-md').click()
        cy.get('.list-card-details').contains('Renamed card');

    });


    it('Archieve card', () => {

        cy.get('.list-card-details').click()
        cy.get('.js-archive-card').click()
        cy.get('.icon-md').click()
        cy.get('.card-composer-container').should('not.contain', 'Renamed card');
        

    });

    it('Archieve list', () => {

        cy.get('.list-header-extras-menu').click()
        cy.get('.js-close-list').click()
        cy.get('#board').should('not.contain', 'Renamed list');

    });


});
