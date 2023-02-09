class week3Andrei {
    constructor() {
        this.detailsCardName = '.js-card-detail-title-input';
        this.closeButton = '.icon-md';
        this.listCards = '.js-list';
        this.anyCard = '.js-member-droppable';
        this.archiveButton = '.js-archive-card';
        this.archiveBanner = '[data-testid="card-back-archive-banner"]';
        this.targetBoard = ':nth-child(8) > .list > .list-cards';
        this.targetList = ':nth-child(8) > .list';
        this.moveCard = '.js-move-card';
        this.listSelector = '.js-select-list';
        this.submitButton = '.js-submit';
        this.copyButton = '.js-copy-card';
        this.copiedCardName = 'form > .js-autofocus';
        this.createCopiedCard = 'form > .nch-button';
        this.showDetails = '.js-show-details';
        this.listActions = '.js-list-actions';
        this.hideDetails = '.js-hide-details';

    }

    editCard(cardName, cardName2) {
        cy.contains(cardName).click();
        cy.get(this.detailsCardName).click().wait(1000)
            .clear()
            .type(cardName2)
            .wait(1500);
        cy.get(this.closeButton).click();
    }

    AssertCardCreated(cardName2) {

        cy.get(this.listCards).eq(8).within(() => {
            cy.get(this.anyCard).should('have.length', 1);
            cy.get(this.anyCard).eq(0).should('contain', cardName2);
        });

    }

    archiveCard() {
        cy.get(this.anyCard).eq(0).click();
            cy.get(this.archiveButton).click();
            cy.get(this.archiveBanner).should('have.text', 'This card is archived.');
            cy.get(this.closeButton).click();
    }

    dragAndDrop(cardName) {
        cy.contains(cardName).drag(this.targetBoard);
            //Assert that dropped
            cy.get(this.targetList).should('contain', cardName);
    }

    cardMove() {
        cy.get(this.listCards).eq(7).within(() => {
            cy.get(this.anyCard).eq(2).rightclick();
        });
            cy.get(this.moveCard).should('be.visible');
            cy.get(this.moveCard).click();
            cy.get(this.listSelector).select('Week 3'); 
            cy.get(this.submitButton).click();

    }

    assertMoved() {
        cy.get(this.listCards).eq(7).within(() => {
            cy.get(this.anyCard).should('have.length', 3);
            cy.get(this.anyCard).should('not.contain', 'X')
            
});

    }

    copyCard(cardName, newName) {
        cy.contains(cardName).click();
                cy.get(this.copyButton).click();
                cy.get(this.copiedCardName).click({ force: true }).clear()
                .wait(1000)
                .type(newName);
                cy.get(this.createCopiedCard).click();
                cy.get(this.closeButton).click();

    }

    cardDetails(newName) {
        cy.contains(newName).click();
                cy.get(this.showDetails).click();
                cy.get(this.listActions).should('be.visible');
                cy.get(this.hideDetails).click();
                cy.get(this.listActions).should('not.be.visible');
                cy.get(this.closeButton).click();
    }
        















}
export default new week3Andrei();