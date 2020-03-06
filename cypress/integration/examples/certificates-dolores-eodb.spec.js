describe('EASE OF DOING BUSINESS', () => {

    it('Navigate to eodb-qa.ml', () => {
        cy.visit('https://eodb-qa.ml/app')
    })

    it('Applicant Certificates', () => {
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