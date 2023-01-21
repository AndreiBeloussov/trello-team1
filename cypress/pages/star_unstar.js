class star_unstar {
    constructor() {
        this.starButton = '.js-star-board > .icon-sm';
        this.starButton2 = '.N0xtKAH6YN8pyO > .-lgC06waqmTpOc > .css-snhnyn';
        this.leftBoardName = '.rfW8r1VBIv3NY1 > .BIOyZdkbd7KotX';
        this.starIcon = '#content > div > div.board-main-content > div.board-header.u-clearfix.js-board-header > a > span';

        
    }

    clickStarButton() {
        cy.get(this.starButton).click();
    }

    assertStarred() {
        cy.get(this.starIcon).should('have.css', 'color', 'rgb(242, 214, 0)');
        cy.get(this.starButton2).should('be.visible');
    }

    assertUnstarred() {
        cy.get(this.starIcon).should('have.css', 'color', 'rgb(23, 43, 77)');
        cy.get(this.leftBoardName).should('not.contain', this.starButton2);
    }

    

    

    
    
    
}
export default new star_unstar();