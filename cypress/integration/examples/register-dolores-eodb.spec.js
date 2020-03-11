describe('EASE OF DOING BUSINESS', () => {

    it('Navigate to Dolores Smartjuan24 EODB', () => {
        cy.visit('https://eodb-qa.ml/app')
    })

    it('Applicant Register', () => {
        cy.get(':nth-child(7) > a > .ant-btn').click()
        cy.get(':nth-child(7) > a > .ant-btn').click({
            delay: 100
        })
        cy.get('#first-name').type('Vince')
        cy.get('#last-name').type('Belo')
        cy.get('#reg-email').type('ccci@centralizedinc.com')
        cy.get('#reg-password').type('ccciinc603')
        cy.get('#reg-confirm-password').type('ccciinc603')
        cy.scrollTo('top')
        cy.get("#reg-btn").click()
        cy.scrollTo('top')
        cy.pause()

    })

})