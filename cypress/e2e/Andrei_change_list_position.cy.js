import BoardPage from "../pages/BoardPage";
import Boards from "../pages/Boards";
import LoginPage from "../pages/LoginPage";
import '@4tw/cypress-drag-drop';


describe('Test on Trello board', () => {

    //This board was created before manually through the UI
    //those constants will be different for each user
    const myKanbanBoard = 'AndreiBoard';
    const myKanbanBoardUrl = 'https://trello.com/b/Igt7y2Q2/andreiboard';

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

    // it.only('Drag and drop card', () => {
    //     //cy.get('.sourceitem').drag('.targetitem', options)
    //     cy.get(':nth-child(8) > .list').drag(':nth-child(7) > .list');

    //     cy.get(':nth-child(8) > .list').should('have.text', 'Done');

    //       });
  
    it('Change list position', () => {
        //Assert position before list moved
        cy.get(':nth-child(8) > .list').should('contain', 'My new list');
        //Move the list
        cy.get('.list-header-extras-menu').eq(7).click();
        cy.get('.js-move-list').click();
        cy.get('.js-select-list-pos').select('7');
        cy.get('.js-commit-position').click();
        //Assert that moved
        cy.get(':nth-child(8) > .list').should('not.contain', 'My new list');
        cy.get(':nth-child(7) > .list').should('contain', 'My new list');


        

    });


});