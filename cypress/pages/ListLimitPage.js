class ListLimitPage {
    constructor() {
        this.threeDotButton = '[class="list-header-extras-menu dark-hover js-open-list-menu icon-sm icon-overflow-menu-horizontal"]';
        this.setListLimit = '[class="js-set-list-limit"]'; // . = class
        this.saveButton = '[class="nch-button nch-button--primary wide js-submit"]';
        this.removeButton = '[class="nch-button nch-button--danger remove-limit js-remove-limit"]';
        this.listLimitBadge = '*[class^="list-header-extras-limit-badge js-list-limit-badge"]'; // get all elements that has class starting with...
        this.addCard = '[class="js-add-card"]';
        this.outsideBoard= '[class="board-header u-clearfix js-board-header"]'
        this.toDoList = '#board > :nth-child(3)'; // id="board"
        this.exceedsListLimit = '[class="list js-list-content exceeds-list-limit"]'; 
        this.quickCardEditor = '[class="icon-sm icon-edit list-card-operation dark-hover js-open-quick-card-editor js-card-menu"]'; 
        this.firstCardNameInToDoList = '#board > :nth-child(3) > .list > .list-cards > :nth-child(1) '
        this.secondCardNameInToDoList = '#board > :nth-child(3) > .list > .list-cards > :nth-child(2)'
        this.archiveCardButton = '[class="button-link js-archive-card"]'
        this.deleteCardButton = '[class="button-link js-delete-card negate"]'
        this.confirmButton = '[class="js-confirm full nch-button nch-button--danger"]'
        this.starIcon = '#content > div > div.board-main-content > div.board-header.u-clearfix.js-board-header > a > span'

    }

    setListLimitTo2(ListLimit) {
        cy.get(this.threeDotButton).eq(2).click();
        cy.get(this.setListLimit).type(ListLimit);
        cy.get(this.saveButton).click();
    }

    assertListLimitBadge(ListLimit) {
        cy.get(this.toDoList)
        cy.get(this.listLimitBadge).eq(2).last(ListLimit).should('contain', ListLimit); // 3rd (i.e eq(2)) limit badge is 1/2, last is 2
    }
    
    addCardAndTypeText(CardName2) {
        cy.get(this.threeDotButton).eq(2).click();
        cy.get(this.addCard).type(CardName2+ '{enter}');
        cy.get(this.outsideBoard).click()
    }
    
    assertToDoList(CardName2) {
        cy.get(this.toDoList).should('contain', CardName2);
    }    

    addCardAndTypeText(CardName3) {
        cy.get(this.threeDotButton).eq(2).click();
        cy.get(this.addCard).type(CardName3+ '{enter}');
        cy.get(this.outsideBoard).click()
    }
    
    assertToDoList(CardName3) {
        cy.get(this.toDoList).should('contain', CardName3);
    }   

    assertNumberOfCards() {
        cy.get(this.toDoList)
        cy.get('*[class^="list-card js-member-droppable ui-droppable"]').should('have.length', 4) // get all elements that has class starting with..., 2 existing + 2 new cards 
    } 

    assertBackgroundColor() {
        cy.get(this.toDoList)
        cy.get(this.exceedsListLimit).should('be.visible').and('have.css', 'color','rgb(23, 43, 77)');
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
    
    assertNumberOfCardsAfterDelete() {
        cy.get(this.toDoList)
        cy.get('*[class^="list-card js-member-droppable ui-droppable"]').should('have.length', 2) // get all elements that has class starting with..., 2 existing + 2 new cards 
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