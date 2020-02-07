describe('EASE OF DOING BUSINESS', () => {

    it('Navigate to eodb-qa.ml', () => {
        cy.visit('https://eodb-qa.ml/app')
    })
    it('Applicant Login', () => {
        cy.get(':nth-child(6) > a > .ant-btn').click({ delay: 100 })
        cy.get('#login-email').type('vbelo@centralizedinc.com', { delay: 100 })
        cy.get('#login-password').type('Password123', { delay: 100 })
        cy.get('#login-btn').click()

    })

})