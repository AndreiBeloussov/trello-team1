class NewCard {
    constructor() {
        this.cardComposer = '.open-card-composer';
        this.addCardButton = 'Add card';
        this.placeOnBoard = '#board';

        
    }

    createCard(listNumber, cardName) {
        cy.get(this.cardComposer).eq(listNumber).type(cardName);
        cy.contains(this.addCardButton).click();
        cy.get(this.placeOnBoard).click();
    }

    

    

    

    
    
    
}
export default new NewCard();