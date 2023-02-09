class NewCard {
    constructor() {
        this.cardComposer = '.open-card-composer';
        this.textArea = '.list-card-composer-textarea';
        this.addCardButton = 'Add card';
        this.placeOnBoard = '#board';

        
    }

    createCard(listNumber, cardName) {
        cy.get(this.cardComposer).eq(listNumber).click();
        cy.get(this.textArea).click().should('be.visible').type(cardName);
        cy.wait(1000);
        cy.contains(this.addCardButton).click();
        cy.get(this.placeOnBoard).click();
    }

    

    

    

    
    
    
}
export default new NewCard();