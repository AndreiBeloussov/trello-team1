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
        cy.get('[class="list-card js-member-droppable is-covered ui-droppable"]').eq(1).click();
        cy.get('[class="button-link js-edit-labels"]').click();
        //these comments are for me to try different approach one day
        //cy.get('[type="checkbox"]').check(green);
        //cy.get('[type="checkbox"]').check(blue);
        cy.get('[class="dFag8JU1lt76jj"]').eq("2").click();
        cy.get('[class="dFag8JU1lt76jj"]').eq("4").click();
        //cy.get('[class="dFag8JU1lt76jj"]').contains("green", "blue").click();
        //cy.get('[class="dFag8JU1lt76jj"]').eq(4).click();
        //cy.get('input[value="Checkbox1"]').click();
        //cy.get('[class="garr9YNBipBJcE QzF2IkOb12d6-2"]').click()
        //cy.contains('[data-colour= "green"]').click();
        //cy.contains('Blue').click()
        //cy.get('[inputValue="checkbox"]').check('green', 'blue');
        cy.get('[class="icon-md icon-close dialog-close-button js-close-window dialog-close-button--card-cover"]').click();

        //remove labels
        cy.get('[class="list-card js-member-droppable is-covered ui-droppable"]').eq(1).click();
        cy.get('[class="button-link js-edit-labels"]').click();
        cy.get('[class="dFag8JU1lt76jj"]').eq("2").click();
        cy.get('[class="dFag8JU1lt76jj"]').eq("4").click();
        cy.get('[class="icon-md icon-close dialog-close-button js-close-window dialog-close-button--card-cover"]').click();

    });

});