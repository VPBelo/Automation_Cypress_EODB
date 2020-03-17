describe('Login User Account', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('user_account.json').as('user_account')
    })

    it('Open SmartJuan24', function() {
        cy.visit(this.settings.base_url)
    })

    it('Applicant Login', function() {
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
        cy.get(':nth-child(1) > .ant-col-xs-24 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('158443227381700001')
        cy.get(':nth-child(3) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('IT SOLUTIONS')
        cy.get(':nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('02451454521')
        cy.get('input[placeholder="Select date"]').click()
        cy.get('.ant-calendar-input').type('2019-05-13')
        cy.get('.ant-btn-primary').click().wait(5000)
        cy.get('.ant-btn-primary').click()
        cy.get('.ant-input-number-input').type('650000')
        cy.get('.ant-btn-primary').click(2000)
        cy.get('[align="end"] > .ant-btn-primary').click().wait(5000)
        cy.pause()
        cy.get(':nth-child(7) > .ant-modal-root > .ant-modal-wrap > .ant-modal > .ant-modal-content > .ant-modal-body > .ant-row > [align="end"] > .ant-btn').click().wait(2000)
        cy.scrollTo('top')
        cy.get(':nth-child(5) > span > #v-step-5').click({
            force: true
        })
        cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click().wait(5000)
    })

})