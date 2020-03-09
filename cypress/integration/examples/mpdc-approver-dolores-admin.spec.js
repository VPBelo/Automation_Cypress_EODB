describe('EASE OF DOING BUSINESS ADMIN PORTAL', () => {

    it('Navigate to eodb-qa.ml site', () => {
        cy.visit('https://eodb-qa.ml/admin')

    })

    it('MPDC Department Login', () => {
        // cy.get('#department-index5').click()
        cy.pause()

    })

    it('Login Admin MPDC Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('mpdc@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click()
            // cy.scrollTo('top')
            // cy.get(':nth-child(1) > .card_btn > .ant-card-body').click()
            // cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card_btn > .ant-card-body').click()
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card_btn > .ant-card-body').click()
        cy.get('.ant-btn-primary').click()
        cy.get('[aria-selected="false"] > span').click()
        cy.get(':nth-child(1) > .ant-collapse-header').click()
        cy.get(':nth-child(2) > .ant-collapse-header').click()
        cy.scrollTo('top')
        cy.get(':nth-child(2) > .ant-list-item-meta > .ant-list-item-meta-avatar > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
        cy.get('.ant-card-body > .ant-input').type('Approved')
        cy.get('.ant-row-flex > [align="right"] > .ant-btn').click()
        cy.get('.ant-popover-buttons > .ant-btn-primary').click()
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click()
        cy.get('.ant-btn-primary').click()

    })
})