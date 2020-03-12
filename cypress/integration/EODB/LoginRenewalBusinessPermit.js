describe('Login User Account', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('user_account.json').as('user_account')
    })

    it('Open SmartJuan24', function () {
        cy.visit(this.settings.base_url)
    })

    it('Applicant Login', function () {
        cy.scrollTo('top')
        cy.get(':nth-child(6) > a > .ant-btn').click({
            delay: 100
        })
        cy.get('#login-email').type(this.user_account.username)
        cy.get('#login-password').type(this.user_account.password)
        cy.get('#login-btn').click()
        cy.scrollTo('top')

    })

    it('Applicant Apply for Renewal Business Permit', () => {
        cy.scrollTo('top')
        cy.get('#v-step-2 > :nth-child(3)').click(5000)
        cy.get('.v-step__button-skip').click({
            delay: 100
        })
        cy.scrollTo('top')
        cy.get('.ant-row-flex-space-between > .ant-row-flex > :nth-child(2)').click()
        cy.scrollTo('top')
        cy.get(':nth-child(1) > .ant-col-xs-24 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('158374280079400000')
        cy.get(':nth-child(3) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('IT GLOBAL TECHNO HUB')
        cy.get(':nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('363896A')
        cy.get(':nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Mar 09, 2020')
        cy.get('.ant-btn-primary').click()
    })

})