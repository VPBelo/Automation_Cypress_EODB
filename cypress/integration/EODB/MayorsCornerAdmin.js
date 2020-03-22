describe('Office of the Mayor', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('mayor_account.json').as('mayor_account')
    })


    it('Mayor must be able to Login in Admin Portal Mayors Office for Release of Permit', function () {
        cy.get('#department-index11').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.mayor_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.mayor_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(4) > .anticon > svg').click()
         cy.pause()
        cy.get('.ant-input').type('ANNOUNCEMENT: Class suspension in ALL LEVELS in public and private schools in Quezon Province is EXTENDED UNTIL APRIL 14, 2020.')
        cy.get('.ant-card-body > .ant-btn').click()
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)

    })


})