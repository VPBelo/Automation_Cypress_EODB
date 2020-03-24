describe('SMARTJUAN24 ADMIN PORTAL-EASE OF DOING BUSINESS', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
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
        cy.fixture('assessor_account.json').as('assessor_account')
    })

    it('Navigate to Dolores SmartJuan24 Admin Portal', function() {
        cy.visit('https://eodb-qa.ml/admin')
    })


    it('Treasurer Approver must be able to Login in Admin Portal MTO Department for Computation of Fees', function() {
        cy.get('#department-index2').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.mto_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.mto_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('input[placeholder="Search Keyword (eg. Reference Number, Business Name)"]').type(Cypress.env("reference"))
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card_btn > .ant-card-body').click()
        cy.get('.ant-btn-primary').click().wait(5000)
        cy.get('[aria-selected="false"] > span').click()
        cy.get(':nth-child(1) > .ant-collapse-header').click()
        cy.get(':nth-child(2) > .ant-collapse-header').click()
        cy.scrollTo('top')
        cy.get(':nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('0312458A')
        cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('CCC21345520')
        cy.get('.ant-col-12 > .ant-btn').click()
        cy.get('.ant-popover-buttons > .ant-btn-primary').click()
        cy.get('.ant-menu > :nth-child(6)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)
    })


    it('BFP Approver must be able to Login in Admin Portal BFP Department for Inspection', function() {
        cy.get('#department-index10').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.bfp_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.bfp_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('input[placeholder="Search Keyword (eg. Reference Number, Business Name)"]').type(Cypress.env("reference"))
        cy.get('.ant-col-18 > :nth-child(2)').click()
        cy.get('.ant-btn-primary').click(5000)
        cy.get('[aria-selected="false"] > span').click()
        cy.get(':nth-child(1) > .ant-collapse-header').click()
        cy.get(':nth-child(2) > .ant-collapse-header').click()
        cy.scrollTo('top')
        cy.get('.ant-col-8 > .ant-btn').click()
        cy.get('[title="March 20, 2020"] > .ant-fullcalendar-date > .ant-fullcalendar-value').click({
            force: true
        })
        cy.get('.ant-modal-footer > .ant-btn-group > :nth-child(2)').click()
        cy.get('.ant-card-body > .ant-input').type('Approved')
        cy.get('.ant-col-16 > .ant-btn-group > .ant-btn-primary').click()
        cy.get('.ant-popover-buttons > .ant-btn-primary').click()
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)
    })


    it('BPLO Approver must be able to Login in Admin Portal BPLO Department for Final Assessment', function() {
        cy.get('#department-index9').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.bplo_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.bplo_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('input[placeholder="Search Keyword (eg. Reference Number, Business Name)"]').type(Cypress.env("reference"))
        cy.get('.ant-col-18 > :nth-child(2)').click()
        cy.get('.ant-btn-primary').click().wait(5000)
        cy.get('[aria-selected="false"] > span').click()
        cy.get(':nth-child(1) > .ant-collapse-header').click()
        cy.get(':nth-child(2) > .ant-collapse-header').click()
        cy.scrollTo('top')
        cy.get('.ant-card-body > .ant-input').type('Approved')
        cy.get('.ant-row-flex > [align="right"] > .ant-btn').click()
        cy.get('.ant-popover-buttons > .ant-btn-primary').click({
            force: true
        })
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)

    })

    it('Mayor Approver must be able to Login in Admin Portal Mayors Office Department for Release of Permit', function() {
        cy.get('#department-index11').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.mayor_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.mayor_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('input[placeholder="Search Keyword (eg. Reference Number, Business Name)"]').type(Cypress.env("reference"))
        cy.get('.ant-col-18 > :nth-child(2)').click()
        cy.get('.ant-btn-primary').click().wait(5000)
        cy.get('[aria-selected="false"] > span').click()
        cy.get(':nth-child(1) > .ant-collapse-header').click()
        cy.get(':nth-child(2) > .ant-collapse-header').click()
        cy.scrollTo('top')
        cy.get('.ant-card-body > .ant-input').type('Approved')
        cy.get('.ant-row-flex > [align="right"] > .ant-btn').click()
        cy.get('.ant-popover-buttons > .ant-btn-primary').click({
            force: true
        })
        cy.get('.ant-menu-root > :nth-child(8)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)

    })

})