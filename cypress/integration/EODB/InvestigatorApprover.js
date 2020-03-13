describe('Philippine National Police Investigator', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('investigator_account.json').as('investigator_account')
    })


    it('Approver must be able to Login in Admin Portal Investigator Department', function () {
        cy.get('#department-index4').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.investigator_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.investigator_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.scrollTo('top')
        cy.get('.ant-input').type('1584004772722200')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card_btn > .ant-card-body > .ant-row > .ant-col-18 > :nth-child(2)').click()
        // cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card_btn > .ant-card-body > .ant-row > .ant-col-18 > :nth-child(3)').click()
        cy.get('.ant-btn-primary').click()
        cy.get('[aria-selected="false"] > span').click()
        cy.get(':nth-child(1) > .ant-collapse-header').click()
        cy.get(':nth-child(2) > .ant-collapse-header').click()
        cy.scrollTo('top')
        cy.get('.ant-card-body > .ant-input').type('Approved')
        cy.get('.ant-row-flex > [align="right"] > .ant-btn').click()
        cy.get('.ant-popover-buttons > .ant-btn-primary').click()
        cy.get('.ant-menu > :nth-child(5)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)
    })


})