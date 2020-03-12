describe('Registration', () => {


    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('user_account.json').as('user_account')
      })
    

    it('Navigate to Dolores Smartjuan24 EODB', function() {
        cy.visit(this.settings.base_url)
    })

    it('Applicant Register', function() {
        cy.get(':nth-child(7) > a > .ant-btn').click()
        cy.get(':nth-child(7) > a > .ant-btn').click({
            delay: 100
        })
        cy.get('#first-name').type(this.user_account.firstname)
        cy.get('#last-name').type(this.user_account.lastname)
        // cy.get('#reg-email').type(`${Math.random()}${this.user_account.email}`)
        cy.get('#reg-email').type(this.user_account.email)
        cy.get('#reg-password').type(this.user_account.password)
        cy.get('#reg-confirm-password').type(this.user_account.password)
        cy.scrollTo('top')
        cy.get("#reg-btn").click()
        cy.scrollTo('top')

    })

})