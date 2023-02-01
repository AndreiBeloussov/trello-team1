class NewList {
    constructor() {
        this.addNewList = '.js-add-list';
        this.listName = '.list-name-input';
        this.saveList = '.js-save-edit';

        
    }

    createList(listName) {
        cy.get(this.addNewList).click();
        cy.get(this.listName).type(listName);
        cy.get(this.saveList).click();
    }

    

    

    

    
    
    
}
export default new NewList();