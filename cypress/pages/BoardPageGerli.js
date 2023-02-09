class BoardPageGerli {
    constructor() {
        this.boardThreeDotButton = '.show-sidebar-button-react-root';
        this.changeBackground = '.js-fill-board-menu .js-change-background';
        this.selectionOfPhotos = '.js-bg-photos';
        this.selectionOfSuitableImage = '.board-background-select';
        this.closeBoardMenu = '.js-hide-sidebar';         
    }

    changeBoardBackgrondPicture(PictureNumber) {
        cy.get(this.boardThreeDotButton).click();
        cy.get(this.changeBackground).click();
        cy.get(this.selectionOfPhotos).click();
        cy.get(this.selectionOfSuitableImage).eq(PictureNumber).click();
        cy.get(this.closeBoardMenu).click();
    }
    
}   
export default new BoardPageGerli();