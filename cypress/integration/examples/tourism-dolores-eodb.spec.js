describe('EASE OF DOING BUSINESS', () => {

    it('Navigate to Dolores SmartJuan24 EODB', () => {
        cy.visit('https://eodb-qa.ml/app')
    })

    it('Tourism Page', () => {
        cy.scrollTo('top')
        cy.get(':nth-child(6) > a > .ant-btn').click({
            delay: 100
        })
        cy.get('#login-email').type('vbelo@centralizedinc.com')
        cy.get('#login-password').type('admin')
        cy.get('#login-btn').click()
        cy.scrollTo('top')

    })

})