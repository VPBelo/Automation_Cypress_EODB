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
        cy.get('.ant-menu > :nth-child(2) > .anticon > svg').click()
        cy.scrollTo('top')
        cy.pause()
        cy.get(':nth-child(1) > .ant-card > .ant-card-body > .ant-input-affix-wrapper > .ant-input').focus().type('158489669694085')
            // cy.get('input[placeholder="Search Reference Number"]').type('158489669694085')
        cy.pause()
        cy.get('button[class="ant-btn ant-btn-link ant-btn-lg ant-btn-icon-only"]').click({
            force: true
        })
        cy.get('.ant-card-body > .ant-btn').click()
        cy.get('input[placeholder="Official Receipt Number"]').type('322546545A0C')
        cy.get('input[placeholder="CC•••• ••••••••"]').type('CCC234354300C')
        cy.get('.ant-menu > :nth-child(2) > span').click()
        cy.get(':nth-child(4) > .ant-btn').click({
            force: true
        })
        cy.get('.ant-menu > :nth-child(6)').click().wait(5000)
        cy.get('.ant-btn-primary').click().wait(5000)
    })


})