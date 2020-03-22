import 'cypress-file-upload';


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

    

describe('SmartJuan24 User Access', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('user_account.json').as('user_account')
        cy.fixture('application_details.json').as('application_details')
      })

     /**
     * @description open url
     * 
     */
    it('User must be able to access SmartJuan24', function(){
        cy.visit(this.settings.base_url)
    })

})