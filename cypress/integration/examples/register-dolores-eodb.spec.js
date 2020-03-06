describe('EASE OF DOING BUSINESS', () => {

    it('Navigate to eodb-qa.ml', () => {
        cy.visit('https://eodb-qa.ml/app')
    })

    it('Applicant Register', () => {
        cy.get(':nth-child(7) > a > .ant-btn').click()
        cy.get(':nth-child(7) > a > .ant-btn').click({
            delay: 100
        })
        cy.get('#first-name').type('Vince')
        cy.get('#last-name').type('Belo')
        cy.get('#reg-email').type('vbelo@centralizedinc.com')
        cy.get('#reg-password').type('admin')
        cy.get('#reg-confirm-password').type('admin')
        cy.scrollTo('top')
        cy.get("#reg-btn").click()
        cy.scrollTo('top')
        cy.pause()

    })

})