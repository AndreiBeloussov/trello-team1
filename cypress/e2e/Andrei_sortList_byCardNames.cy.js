import BoardPage from "../pages/BoardPage";
import Boards from "../pages/Boards";
import LoginPage from "../pages/LoginPage";


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

    it('Create a list', () => {

        //Click to add list
        cy.get('.js-add-list').click();
        //Name the list
        cy.get('.list-name-input').type('My new list');
        //Add list
        cy.get('.js-save-edit').click();


    });

    it('Assert that list is created', () => {
       
        cy.get('.list-header-name-assist').should('contain', 'My new list');

    });

    it('Add cards', () => {
       
        cy.get('.open-card-composer').eq(7).type('A');
        cy.contains('Add card').click();
        cy.get('.list-card-composer-textarea').type('X');
        cy.contains('Add card').click();
        cy.get('.list-card-composer-textarea').type('B');
        cy.get('#board').click();

    });

    it('Sort alphabetically', () => {

        cy.get('.js-open-list-menu').eq(7).click();
        cy.get('.js-sort-cards').click();
        cy.contains('Card name (alphabetically)').click();
       
    });

    it.only('Assert that sorted', () => {
       
        cy.get('.js-list').eq(7).within(() => {
            cy.get('.js-member-droppable').should('have.length', 3);
            cy.get('.js-member-droppable').eq(0).should('contain', 'A');
            cy.get('.js-member-droppable').eq(1).should('contain', 'B');
            cy.get('.js-member-droppable').eq(2).should('contain', 'X');

        });
    
      

    });


    

});