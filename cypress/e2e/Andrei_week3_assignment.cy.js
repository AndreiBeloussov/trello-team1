import BoardPage from "../pages/BoardPage";
import Boards from "../pages/Boards";
import LoginPage from "../pages/LoginPage";
import '@4tw/cypress-drag-drop';
import NewList from "../pages/NewList";
import NewCard from "../pages/NewCard";
import { faker } from '@faker-js/faker';
import '@4tw/cypress-drag-drop';
import week3Andrei from "../pages/week3Andrei";


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

        let listName = 'Week 3';

        NewList.createList(listName);

    });

    it('Add, edit and archive card', () => {

        let listNumber = 8;
        let cardName = faker.name.fullName();
        let cardName2 = faker.name.fullName();

        NewCard.createCard(listNumber, cardName, cardName2);
        week3Andrei.editCard(cardName, cardName2);


        //Assert that created
        week3Andrei.AssertCardCreated(cardName2);


        //Archive card
        week3Andrei.archiveCard();


    });

    it('Drag and drop card', () => {
        let listNumber = 9;
        let cardName = 'Drag and drop';
        let listName = 'DaD list'

        NewList.createList(listName);
        NewCard.createCard(listNumber, cardName);
        week3Andrei.dragAndDrop(cardName);


    });


    it('Move card', () => {

        week3Andrei.cardMove();

        //Assert that moved
        week3Andrei.assertMoved();

    });

    it('Copy card, check and hide details', () => {
        let listNumber = 10;
        let cardName = 'Copy me';
        let newName = 'Details';
        let listName = 'Copy Check Hide';

        NewList.createList(listName);
        NewCard.createCard(listNumber, cardName, newName);
        week3Andrei.copyCard(cardName, newName);

        //Details
        week3Andrei.cardDetails(newName);


    });

});



















