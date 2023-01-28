import BoardPage from "../pages/BoardPage";
import Boards from "../pages/Boards";
import LoginPage from "../pages/LoginPage";
import ListLimitPage from "../pages/ListLimitPage";


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

    it('Set list limit and assert limit reaching', () => {
        const ListLimit = 2;  //it is possible to change the limit of the list, e.g from 2 to 5
        const CardName2 = "2nd card added"; 
        const CardName3 = "3rd card added"; 

        ListLimitPage.setListLimitTo2(ListLimit); 
        ListLimitPage.assertListLimitBadge(ListLimit)
        ListLimitPage.addCardAndTypeText(CardName2)
        ListLimitPage.assertToDoList(CardName2)
        ListLimitPage.addCardAndTypeText(CardName3)
        ListLimitPage.assertToDoList(CardName3)
        ListLimitPage.assertNumberOfCards()
        ListLimitPage.assertBackgroundColor()
        ListLimitPage.deleteAddedCardFirst()
        ListLimitPage.deleteAddedCardSecond()
        ListLimitPage.assertNumberOfCardsAfterDelete()
    });

    it('Remove list limit and assert removing', () => {
        ListLimitPage.removeListLimit(); 
        ListLimitPage.assertListLimitBadgeNotVisible()
    });

});