class ListLimitPage {
    constructor() {
        this.boardThreeDotButton = '[class="show-sidebar-button-react-root"]';
        this.changeBackground = '[class="board-menu-navigation-item mod-background"]';
        this.selectionOfPhotos = '[class="board-backgrounds-section-tile board-backgrounds-photos-tile js-bg-photos"]';
        this.selectionOfSuitableImage = '[class="_9yKH4uh+9RiTWV large"]';
        this.closeBoardMenu = '[class="board-menu-header-close-button icon-lg icon-close js-hide-sidebar"]';         
    }

    changeBoardBackgrondPicture(PictureNumber) {
        cy.get(this.boardThreeDotButton).click();
        cy.get(this.changeBackground).click();
        cy.get(this.selectionOfPhotos).click();
        cy.get(this.selectionOfSuitableImage).eq(PictureNumber).click();
        cy.get(this.closeBoardMenu).click();
    }
    
}   
export default new ListLimitPage();