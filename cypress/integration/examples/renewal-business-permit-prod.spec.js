describe('EASE OF DOING BUSINESS', () => {

    it('Navigate to eodb-qa.ml', () => {
        cy.visit('https://dolores.smartjuan24.com/app')
    })

    it('Applicant Login', () => {
        cy.scrollTo('top')
        cy.get(':nth-child(6) > a > .ant-btn').click({
            delay: 100
        })
        cy.get('#login-email').type('venus.belo.smsgt@gmail.com')
        cy.get('#login-password').type('admin')
        cy.get('#login-btn').click()
        cy.scrollTo('top')

    })

    it('Applicant Apply for Renewal Business Permit', () => {
        cy.scrollTo('top')
        // cy.get('.ant-menu-item-selected').click({
        //     delay: 100
        // })
        // cy.scrollTo('top')
        // cy.get('#v-step-2 > :nth-child(3)').click()
        // cy.get('.v-step__button-skip').click({
        //     delay: 100
        // })
        // cy.scrollTo('top')
        cy.pause()

    })

})