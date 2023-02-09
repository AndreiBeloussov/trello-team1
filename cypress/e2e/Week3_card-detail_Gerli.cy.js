import BoardPage from "../pages/BoardPage";
import Boards from "../pages/Boards";
import LoginPage from "../pages/LoginPage";
import CardDetailPageGerli from "../pages/CardDetailPageGerli";
import { faker } from '@faker-js/faker'; // npm install --save-dev @faker-js/faker

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

    
    it('Add description, edit it and validate', () => {
        let cardTitle1 = faker.lorem.sentence();
        let cardDescription = faker.lorem.sentence();
        let cardDescriptionNew = "I changed the description to meet the requirements.";
        let cardList = "2";

        CardDetailPageGerli.addCardWithTitle(cardTitle1);
        CardDetailPageGerli.assertCardTitle(cardTitle1);
        CardDetailPageGerli.addCardDescription(cardDescription);
        CardDetailPageGerli.assertCardDescription(cardDescription);
        CardDetailPageGerli.editCardDescription(cardDescriptionNew);
        CardDetailPageGerli.assertCardDescriptionEdited(cardDescriptionNew);
        CardDetailPageGerli.deleteAddedCardFirst();
        CardDetailPageGerli.assertNumberOfCardsAfterDelete(cardList);        
    });

    it('Add comment, edit it, delete it and validate', () => {
        let cardTitle2 = faker.lorem.sentence();
        let cardComment = faker.lorem.sentence();
        let cardCommentNew = "I changed the comment so that there would be relevant information.";
        let cardList = "2";

        CardDetailPageGerli.addCardWithTitle(cardTitle2);
        CardDetailPageGerli.assertCardTitle(cardTitle2);
        CardDetailPageGerli.addCardComment(cardComment);
        CardDetailPageGerli.assertCardComment(cardComment);
        CardDetailPageGerli.editCardComment(cardCommentNew);
        CardDetailPageGerli.assertCardCommentEdited(cardCommentNew);
        CardDetailPageGerli.deleteCardComment();
        CardDetailPageGerli.assertCardCommentDeleted(cardCommentNew);
        CardDetailPageGerli.deleteAddedCardFirst();
        CardDetailPageGerli.assertNumberOfCardsAfterDelete(cardList);    
    });


    it('Add member to the card, remove it and validate', () => {
        let cardTitle3 = faker.lorem.sentence();
        let memberName = "CerebrumHub TeamOne (teamonecerebhub";
        let memberAvatarTitle = "CerebrumHub TeamOne (teamonecerebhub)";
        let cardList = "2";

        CardDetailPageGerli.addCardWithTitle(cardTitle3);
        CardDetailPageGerli.assertCardTitle(cardTitle3);
        CardDetailPageGerli.addTeamMember(memberName);
        CardDetailPageGerli.assertTeamMember(memberAvatarTitle);
        CardDetailPageGerli.removeTeamMember(memberAvatarTitle);
        CardDetailPageGerli.assertTeamMemberRemoved();
        CardDetailPageGerli.deleteAddedCardFirst();
        CardDetailPageGerli.assertNumberOfCardsAfterDelete(cardList);      
    });

    it('Move the card card to other list and position, delete it and validate', () => {
        let cardTitle4 = faker.lorem.sentence();
        let cardListToDo = "2";
        let cardListDoing = "3";
        let newCard = "Doing";
        let newPosition = "bottom";

        CardDetailPageGerli.addCardWithTitle(cardTitle4);
        CardDetailPageGerli.assertCardTitle(cardTitle4);
        CardDetailPageGerli.moveCardToOtherListAndPosition(newCard,newPosition);
        CardDetailPageGerli.assertCardMovedToOtherListAndPosition(cardTitle4)
        CardDetailPageGerli.deleteMovedCard(cardTitle4);
        CardDetailPageGerli.assertNumberOfCardsAfterMovingDeleting(cardListToDo,cardListDoing);      
    });
});