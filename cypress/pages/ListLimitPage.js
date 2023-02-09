class ListLimitPage {
    constructor() {
        this.threeDotButton = '.js-open-list-menu'; // same as '[class="list-header-extras-menu dark-hover js-open-list-menu icon-sm icon-overflow-menu-horizontal"]'
        this.setListLimit = '.js-set-list-limit'; // . = class
        this.saveButton = '.js-submit';
        this.removeButton = '.js-remove-limit';
        //this.listLimitBadge = '*[class^="js-list-limit-badge"]'; // get all elements that has class starting with...
        this.listLimitBadge = '.js-list .js-list-limit-badge'; // get all elements that has class starting with...
        
        this.addCard = '.pop-over-list .js-add-card';
        this.addCardTitle = '.js-card-title'
        this.outsideBoard= '.js-board-header';
        this.toDoList = '#board > :nth-child(3)'; // id="board"
        this.exceedsListLimit = '.js-list-content'; 
        this.quickCardEditor = '.js-open-quick-card-editor .js-card-menu'; 
        this.firstCardNameInToDoList = '#board > :nth-child(3) > .list > .list-cards > :nth-child(1) '
        this.secondCardNameInToDoList = '#board > :nth-child(3) > .list > .list-cards > :nth-child(2)'
        this.archiveCardButton = '.js-archive-card'
        this.deleteCardButton = '.js-delete-card'
        this.confirmButton = '.js-confirm'

    }

    setListLimitTo2(listLimit) {
        cy.get(this.threeDotButton).eq(2).click();
        cy.get(this.setListLimit).type(listLimit);
        cy.get(this.saveButton).click();
    }

    assertListLimitBadge(listLimit) {
        cy.get(this.toDoList)
        cy.get(this.listLimitBadge).eq(2).last(listLimit).should('contain', listLimit); // 3rd (i.e eq(2)) limit badge is 1/2, last is 2
    }
    
    addCardAndTypeText(cardName2) {
        cy.get(this.threeDotButton).eq(2).click();
        cy.get(this.addCard)
            .type(cardName2+ '{enter}');
        cy.get(this.outsideBoard).click()
    }
    
    assertToDoList(cardName2) {
        cy.get(this.toDoList).should('contain', cardName2);
    }    

    addCardAndTypeText(cardName3) {
        cy.get(this.threeDotButton).eq(2).click();
        cy.get(this.addCard)
            .type(cardName3+ '{enter}');
        cy.get(this.outsideBoard).click()
    }
    
    assertToDoList(cardName3) {
        cy.get(this.toDoList).should('contain', cardName3);
    }   

    assertNumberOfCards(cardList2) {
        cy.get(this.toDoList)
        cy.get('*[class^="list-card js-member-droppable ui-droppable"]').should('have.length', cardList2) // get all elements that has class starting with..., 2 existing + 2 new cards 
    } 

    assertBackgroundColor(backgroundColor) {
        cy.get(this.toDoList)
        cy.get(this.exceedsListLimit).should('be.visible').and('have.css', 'color', backgroundColor);
    }   
    
    deleteAddedCardFirst() {
        cy.get(this.firstCardNameInToDoList).click({force:true});
        cy.get(this.archiveCardButton).click();
        cy.get(this.deleteCardButton).click();
        cy.get(this.confirmButton).click()
        cy.get(this.outsideBoard).click();
    }
    
    deleteAddedCardSecond() {
        cy.get(this.secondCardNameInToDoList).click({force:true});
        cy.get(this.archiveCardButton).click();
        cy.get(this.deleteCardButton).click();
        cy.get(this.confirmButton).click()
        cy.get(this.outsideBoard).click();
    }
    
    assertNumberOfCardsAfterDelete(cardList1) {
        cy.get(this.toDoList)
        cy.get('*[class^="list-card js-member-droppable ui-droppable"]').should('have.length', cardList1) // get all elements that has class starting with..., 2 existing
    } 

    removeListLimit() {
        cy.get(this.threeDotButton).eq(2).click();
        cy.get(this.setListLimit).click();
        cy.get(this.removeButton).click();
    }

    assertListLimitBadgeNotVisible() {
        cy.get(this.toDoList)
        cy.get(this.listLimitBadge).eq(2).should('not.be.visible');
    }
}   
export default new ListLimitPage();