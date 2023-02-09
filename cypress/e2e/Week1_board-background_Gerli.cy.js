import BoardPage from "../pages/BoardPage";
import Boards from "../pages/Boards";
import LoginPage from "../pages/LoginPage";
import BoardPageGerli from "../pages/BoardPageGerli";


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

    it('Change board background picture', () => {
        let PictureNumber = 0; //it is possible to change the number of picture from 0 to 29

        BoardPageGerli.changeBoardBackgrondPicture(PictureNumber); 

    });

});