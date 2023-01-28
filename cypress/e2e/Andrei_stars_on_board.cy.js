import BoardPage from "../pages/BoardPage";
import Boards from "../pages/Boards";
import LoginPage from "../pages/LoginPage";
import star_unstar from "../pages/Andrei_star_unstar";

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

    it('Assert that board is not starred', () => {
        // I am not sure that this assertion has sense
        // cy.get('.js-star-board > .icon-sm').should('not.have.attr', 'fill', '#f2d600');

        //So I am using this one to make sure that Star is not colored
        cy.get('#content > div > div.board-main-content > div.board-header.u-clearfix.js-board-header > a > span').should('have.css', 'color', 'rgb(23, 43, 77)');

        //Checking that on the left panel this board in not starred as well
        cy.get('.rfW8r1VBIv3NY1 > .BIOyZdkbd7KotX').should('not.contain', '.N0xtKAH6YN8pyO > .-lgC06waqmTpOc > .css-snhnyn');
        
    });

    it('Assert that board is starred', () => {
        cy.get('.js-star-board > .icon-sm').click();
        cy.get('#content > div > div.board-main-content > div.board-header.u-clearfix.js-board-header > a > span').should('have.css', 'color', 'rgb(242, 214, 0)');
        cy.get('.N0xtKAH6YN8pyO > .-lgC06waqmTpOc > .css-snhnyn').should('be.visible');
    });

    it('Un-star and assert that done', () => {
        cy.get('.js-star-board > .icon-sm').click();
        cy.get('#content > div > div.board-main-content > div.board-header.u-clearfix.js-board-header > a > span').should('have.css', 'color', 'rgb(23, 43, 77)');
        cy.get('.rfW8r1VBIv3NY1 > .BIOyZdkbd7KotX').should('not.contain', '.N0xtKAH6YN8pyO > .-lgC06waqmTpOc > .css-snhnyn');
    });

    // OOP approach
    
    it('OOP Assert that board is not starred', () => {
        star_unstar.assertUnstarred();
        
    });

    it('OOP Assert that board is starred', () => {
        star_unstar.clickStarButton();
        star_unstar.assertStarred();
        
    });

    it('OOP Un-star and assert that done', () => {
        star_unstar.clickStarButton();
        star_unstar.assertUnstarred();

    });


    
});