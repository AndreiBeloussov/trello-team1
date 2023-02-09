class CardDetailPageGerli {
    constructor() {
        this.threeDotButton = '.js-open-list-menu';
        this.addCard = '.js-add-card'; // same as '[class="js-add-card"]'
        this.addCardTitle = '.js-card-title';
        this.outsideBoard= '.KhqgWd0h95qmSQ';
        this.toDoList = '#board > :nth-child(3)'; // id="board"
        this.DoingList = '#board > :nth-child(4)';
        this.listHeader = '.js-list-name-input '
        this.quickCardEditor = '.js-open-quick-card-editor .js-card-menu'; 
        this.firstCardNameInToDoList = '#board > :nth-child(3) > .list > .list-cards > :nth-child(1)';
        this.cardsInToDoList = '#board > :nth-child(3) > .list > .list-cards';
        this.cardsInDoingList = '#board > :nth-child(4) > .list > .list-cards';
        this.listCards = '.js-list-cards'
        this.descriptionBox = '.css-1q3xxv2';
        this.textArea = '.window-main-col';
        this.decriptionEditButton = '.js-edit-desc-button';
        this.descriptionSaveButton = '.js-desc-content .js-save-edit';
        this.commentBox = '.js-new-comment-input';
        this.commentSaveButton = '.js-add-comment';
        this.commentEditing = '.js-text';
        this.commentArea = '.card-detail-window .js-open-card';
        this.commentEditButton = '.js-edit-action';
        this.commentEditSaveButton = '.js-list-actions .js-save-edit';
        this.commentDeleteButton = '.js-confirm-delete-action';
        this.cardSaveButton = '.js-save-edit';
        this.cardCloseButton = '.js-close-window';
        this.changeMemberButton = '.js-change-card-members';
        this.selectMemberButton = '.js-select-member';
        this.memberCloseButton = '[class="pop-over-header-close-btn icon-sm icon-close"]';
        this.cardDetailMember = '.js-card-detail-members .member-avatar';
        this.removeMemberButton = '[data-testid="remove-from-card"]';
        this.archiveCardButton = '.js-archive-card';
        this.deleteCardButton = '.js-delete-card';
        this.confirmButton = '.js-confirm';
        this.moveCardButton = '.js-move-card';
        this.selectList = '.js-select-list';
        this.selectPosition = '.js-select-position';
        this.moveConfirmButon = '.js-submit'
    }

    addCardWithTitle(cardTitle) {
        cy.get(this.threeDotButton).eq(2).click(); // To-Do column i.e. 3rd column
        cy.get(this.addCard).click()
        cy.get(this.addCardTitle).type(cardTitle + '{enter}');
        cy.get(this.outsideBoard).click()
    }
    
    assertCardTitle(cardTitle) {
        cy.get(this.firstCardNameInToDoList).should('contain', cardTitle);
    }      
    
    addCardDescription(cardDescription) {
        cy.get(this.firstCardNameInToDoList).click({force:true});
        cy.get(this.descriptionBox).click()
            .wait(2000)
            .type(cardDescription);
        cy.get(this.descriptionSaveButton).click();
        cy.get(this.cardCloseButton).click();
    }

    assertCardDescription(cardDescription) {
        cy.get(this.firstCardNameInToDoList).click({force:true});
        cy.get(this.textArea).should('contain', cardDescription);
        cy.get(this.cardCloseButton).click();
    }      
    
    editCardDescription(cardDescriptionNew) {
        cy.get(this.firstCardNameInToDoList).click({force:true});
        cy.get(this.decriptionEditButton).click({force:true});
        cy.get(this.textArea).click()
            .type('{selectall}')
            .wait(2000)
            .type(cardDescriptionNew);
        cy.get(this.descriptionSaveButton).click();
        cy.get(this.cardCloseButton).click();
    }

    assertCardDescriptionEdited(cardDescriptionNew) {
        cy.get(this.firstCardNameInToDoList).click({force:true});
        cy.get(this.textArea).should('contain', cardDescriptionNew);
        cy.get(this.cardCloseButton).click();
    }  

    addCardComment(cardComment) {
        cy.get(this.firstCardNameInToDoList).click({force:true});
        cy.get(this.commentBox).click()
            .type('{selectall}')
            .wait(2000)
            .type(cardComment + '{enter}');
        cy.get(this.commentSaveButton).click();
        cy.get(this.cardCloseButton).click();
    }

    assertCardComment(cardComment) {
        cy.get(this.firstCardNameInToDoList).click({force:true});
        cy.get(this.textArea).should('contain', cardComment) ;
        cy.get(this.cardCloseButton).click();
    } 

    editCardComment(cardCommentNew) {
        cy.get(this.firstCardNameInToDoList).click({force:true});
        cy.get(this.commentEditButton).type(cardCommentNew + '{enter}');
        cy.get(this.commentEditSaveButton).click({force:true});
        cy.get(this.cardCloseButton).click();
    }

    assertCardCommentEdited(cardCommentNew) {
        cy.get(this.firstCardNameInToDoList).click({force:true});
        cy.get(this.textArea).should('contain', cardCommentNew);
        cy.get(this.cardCloseButton).click();
    }  

    deleteCardComment() {
        cy.get(this.firstCardNameInToDoList).click({force:true});
        cy.get(this.commentDeleteButton).click({force:true});
        cy.get(this.confirmButton).click();
        cy.get(this.cardCloseButton).click();
    }

    assertCardCommentDeleted(cardCommentNew) {
        cy.get(this.firstCardNameInToDoList).click({force:true});
        cy.get(this.textArea).should('not.contain', cardCommentNew);
        cy.get(this.cardCloseButton).click();
    }

    addTeamMember(teamMember) {
        cy.get(this.firstCardNameInToDoList).click({force:true});
        cy.get(this.changeMemberButton).click()
        cy.get(this.selectMemberButton).should('contain', teamMember).click()
        cy.get(this.memberCloseButton).click();
        cy.get(this.cardCloseButton).click();
    }

    assertTeamMember(memberAvatarTitle) {
        cy.get(this.firstCardNameInToDoList).click({force:true});
        cy.get(this.cardDetailMember).should("have.attr", "title", memberAvatarTitle);
        cy.get(this.cardCloseButton).click();
    } 

    removeTeamMember(memberAvatarTitle) {
        cy.get(this.firstCardNameInToDoList).click({force:true});
        cy.get(this.cardDetailMember).should("have.attr", "title", memberAvatarTitle).click();
        cy.get(this.removeMemberButton).click();
        cy.get(this.cardCloseButton).click();
    }

    assertTeamMemberRemoved() {
        cy.get(this.firstCardNameInToDoList).click({force:true});
        cy.get(this.cardDetailMember).should('not.exist');
        cy.get(this.cardCloseButton).click();
    }

    moveCardToOtherListAndPosition(NewCard,NewPosition) {
        cy.get(this.firstCardNameInToDoList).click({force:true});
        cy.get(this.moveCardButton).click()
        cy.get(this.selectList).select(NewCard)
        cy.get(this.selectPosition).select(NewPosition)
        cy.get(this.moveConfirmButon).click();
        cy.get(this.cardCloseButton).click();
    }


    assertCardMovedToOtherListAndPosition(CardTitle) {
        cy.get(this.cardsInDoingList).last().should('contain', CardTitle);
    } 

    deleteAddedCardFirst() {
        cy.get(this.firstCardNameInToDoList).click({force:true});
        cy.get(this.archiveCardButton).click();
        cy.get(this.deleteCardButton).click();
        cy.get(this.confirmButton).click();
        cy.get(this.outsideBoard).click();
    }
      
    assertNumberOfCardsAfterDelete(cardList) {
        cy.get(this.cardsInToDoList).children().should('have.length', cardList);
        //cy.get(this.toDoList)
        //cy.get('*[class^="list-card js-member-droppable ui-droppable"]').should('have.length', cardList) // * i.e get all elements that has class starting with..., 2 existing + 2 new cards 
    } 

    deleteMovedCard() {
        cy.get(this.cardsInDoingList).children().last().click();
        cy.get(this.archiveCardButton).click();
        cy.get(this.deleteCardButton).click();
        cy.get(this.confirmButton).click();
        cy.get(this.outsideBoard).click();
    }
      
    assertNumberOfCardsAfterMovingDeleting(cardListToDo,cardListDoing) {
        cy.get(this.cardsInToDoList).children().should('have.length', cardListToDo);
        cy.get(this.cardsInDoingList).children().should('have.length', cardListDoing);        
    } 

}   
export default new CardDetailPageGerli();