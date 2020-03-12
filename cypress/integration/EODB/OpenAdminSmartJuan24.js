describe('SmartJuan24 Admin Portal Approver Access', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('tourism_account.json').as('tourism_account')
        cy.fixture('mto_account.json').as('mto_account')
        cy.fixture('meo_account.json').as('meo_account')
        cy.fixture('barangay_account.json').as('barangay_account')
        cy.fixture('investigator_account.json').as('investigator_account')
        cy.fixture('police_account.json').as('police_account')
        cy.fixture('mpdc_account.json').as('mpdc_account')
        cy.fixture('mho_account.json').as('mho_account')
        cy.fixture('menro_account.json').as('menro_account')
        cy.fixture('bplo_account.json').as('bplo_account')
        cy.fixture('bfp_account.json').as('bfp_account')
        cy.fixture('mayor_account.json').as('mayor_account')
        cy.fixture('administrator_account.json').as('administrator_account')
      })

     /**
     * @description open url
     * 
     */
    it('Approver must be able to access SmartJuan24 Admin Portal', function(){
        cy.visit(this.settings.base_url1)
    })

})