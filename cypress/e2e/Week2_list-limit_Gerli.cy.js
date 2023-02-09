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
        let listLimit = 2;  //it is possible to change the limit of the list, e.g from 2 to 5
        let cardName2 = "2nd card added"; 
        let cardName3 = "3rd card added"; 
        let cardList1 = "2";
        let cardList2 = "4";
        let backgroundColor = 'rgb(23, 43, 77)';

        ListLimitPage.setListLimitTo2(listLimit); 
        ListLimitPage.assertListLimitBadge(listLimit)
        ListLimitPage.addCardAndTypeText(cardName2)
        ListLimitPage.assertToDoList(cardName2)
        ListLimitPage.addCardAndTypeText(cardName3)
        ListLimitPage.assertToDoList(cardName3)
        ListLimitPage.assertNumberOfCards(cardList2)
        ListLimitPage.assertBackgroundColor(backgroundColor)
        ListLimitPage.deleteAddedCardFirst()
        ListLimitPage.deleteAddedCardSecond()
        ListLimitPage.assertNumberOfCardsAfterDelete(cardList1)
    });

    it('Remove list limit and assert removing', () => {
        ListLimitPage.removeListLimit(); 
        ListLimitPage.assertListLimitBadgeNotVisible()
    });

});