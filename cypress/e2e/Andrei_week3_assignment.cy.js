import BoardPage from "../pages/BoardPage";
import Boards from "../pages/Boards";
import LoginPage from "../pages/LoginPage";
import '@4tw/cypress-drag-drop';
import NewList from "../pages/NewList";
import NewCard from "../pages/NewCard";


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

    it.skip('Checks that specific Trello board is open', () => {
        BoardPage.boardUrlIsCorrect(myKanbanBoardUrl);
    });

    it('Create a list', () => {
        
        let listName = 'Week 3' ;

        NewList.createList(listName);

    });

    it('Add new cart', () => {

        let listNumber = 8;
        let cardName = 'TestCard';
    
        NewCard.createCard(listNumber, cardName)
       


    });

    

});







