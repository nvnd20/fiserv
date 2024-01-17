class SearchPageUIElements {
    static searchInputField = '[name="q"]'

    static getSearchTextField() {
        return cy.get(this.searchInputField)
    }
} export default SearchPageUIElements

