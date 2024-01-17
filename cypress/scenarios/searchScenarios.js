import SearchPageUIElements from '../ui/searchPageUIElements'


export default function searchAndVerifyFirstResult(){
    // Visit Google Search engine
    cy.visit('/')

    // Submit a search term
    const searchTerm = 'Fiserv';
    SearchPageUIElements.getSearchTextField().type(searchTerm).type('{enter}');

    // On the results page, assert the first returned item as the expected result
    cy.wait(1000).get('#search .g').first().contains(searchTerm);

}
