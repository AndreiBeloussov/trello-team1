import BoardPage from "../pages/BoardPage";
import Boards from "../pages/Boards";
import LoginPage from "../pages/LoginPage";

describe('Test on Trello board', () => {

    //This board was created before manually through the UI
    //those constants will be different for each user
    const myKanbanBoard = 'Team 1 board Gerli';
    const myKanbanBoardUrl = 'https://trello.com/b/l9HZrqNP/team-1-board-gerli';

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

    it('Asserting that menu bar on the left is hided (minimized) successfully', () => {
            // Asserting that menu bar is open
        cy.get('[data-testid="workspace-navigation-expanded"]').should('be.visible') 
            // Hiding menu bar
        cy.get('[data-testid="workspace-navigation-collapse-button"]').should('be.enabled')
        cy.get('[data-testid="workspace-navigation-collapse-button"]').click()
            // Asserting that menu bar is not visible
        cy.get('[data-testid="workspace-navigation-expanded"]').should('not.be.visible')       
    });

        
    it('Asserting that menu bar on the left is opened (maximized) successfully', () => {
            // Hiding menu bar
        cy.get('[data-testid="workspace-navigation-collapse-button"]').should('be.enabled')
        cy.get('[data-testid="workspace-navigation-collapse-button"]').click()
            // Asserting that menu bar is not visible
        cy.get('[data-testid="workspace-navigation-expanded"]').should('not.be.visible')    
            // Opening menu bar
        cy.get('[data-testid="workspace-navigation-expand-button"]').should('be.visible')
        cy.get('[data-testid="workspace-navigation-expand-button"]').click()
            // Asserting that menu bar is open again
        cy.get('[data-testid="workspace-navigation-expanded"]').should('be.visible')    
    });    
    
    it('Asserting that board name edited and changed it back successfully', () => {
            // Clicking on the board name
        cy.get('.js-rename-board').click()
            // Editing it
        cy.get('.js-board-name-input').type('Trying to change the name')
            // Pressing Enter (clicking outside of the board name field)
        cy.get('.js-board-header').click()
            // Asserting that the name is changed correctly
        cy.get('.js-board-name-input').should('have.value','Trying to change the name')
            // Changing the name back
        cy.get('.js-rename-board').click()
        cy.get('.js-board-name-input').type('Team 1 board Gerli')
        cy.get('.js-board-header').click()
    });
});