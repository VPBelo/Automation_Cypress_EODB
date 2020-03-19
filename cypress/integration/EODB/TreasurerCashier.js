describe('Office of the Municipal Treasurer', () => {

    /**
     * @description initialize fixtures
     * 
     */
    beforeEach(() => {
        cy.fixture('settings.json').as('settings')
        cy.fixture('mto_account.json').as('mto_account')
    })


    it('Approver must be able to Login in Admin Portal and Process walkin application', function() {
        cy.get('#department-index2').click()
        cy.scrollTo('top')
        cy.get('input[placeholder="Email Address"]').type(this.mto_account.username)
        cy.get('input[placeholder="Enter Password"]').type(this.mto_account.password)
        cy.get(".ant-btn").click().wait(5000)
        cy.get('.ant-menu > :nth-child(2) > span').click({
            force: true
        })
        cy.scrollTo('top')
        cy.pause()
        cy.get(':nth-child(1) > .ant-card > .ant-card-body > .ant-input-affix-wrapper > .ant-input').focus().type('1584451899359377')
        cy.get('button[class="ant-btn ant-btn-link ant-btn-lg ant-btn-icon-only"]').click({
            force: true
        })
        cy.get('.ant-card-body > .ant-btn').click()
        cy.get('input[placeholder="Official Receipt Number"]').type('322546545A0')
        cy.get('input[placeholder="CC•••• ••••••••"]').type('CCC234354300')
        cy.get('button[class="ant-btn ant-btn-primary"]').click({
            force: true
        })
        cy.get('.ant-menu > :nth-child(6)').click()
        cy.get('type="button"').click().wait(5000)
    })


})