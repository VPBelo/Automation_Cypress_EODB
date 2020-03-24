describe('EASE OF DOING BUSINESS', () => {

    it('Navigate to Dolores SmartJuan24 EODB', () => {
        cy.visit('https://eodb-qa.ml/app')
    })

    it('Application Tracker', () => {
        cy.scrollTo('top')
        cy.get(':nth-child(6) > a > .ant-btn').click({
            delay: 100
        })
        cy.get('#login-email').type('vbelo@centralizedinc.com')
        cy.get('#login-password').type('admin')
        cy.get('#login-btn').click()
        cy.scrollTo('top')
        cy.get('.ant-card-actions > :nth-child(2)').click({
                delay: 100
            })
            // cy.get('.v-step__button-skip').click()
            // cy.get(':nth-child(2) > .ant-badge > .ant-card > .ant-card-actions > :nth-child(2) > span').click()
            // cy.get('.ant-drawer-close > .anticon > svg > path').click()
            // cy.get('.ant-card-actions > :nth-child(4)').click()
            // cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click()


    })

})