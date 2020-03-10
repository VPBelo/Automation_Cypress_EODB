describe('EASE OF DOING BUSINESS ADMIN PORTAL', () => {

    it('Navigate to eodb-qa.ml site', () => {
        cy.visit('https://dolores.smartjuan24.com/admin')
    })

    it('BPLO Department Login', () => {
        cy.get('#department-index9').click()

    })

    it('Login Admin BPLO Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('bplo@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card_btn > .ant-card-body > .ant-row > .ant-col-18 > :nth-child(3)').click()
        // cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card_btn > .ant-card-body').click()
        cy.get('.ant-btn-primary').click()
        cy.get('[aria-selected="false"] > span').click()
        cy.get(':nth-child(1) > .ant-collapse-header').click()
        cy.get(':nth-child(2) > .ant-collapse-header').click()
        cy.scrollTo('top')
        cy.get('.ant-card-head-title > .ant-row > [align="right"] > .ant-btn').click()
        cy.get('.ant-form-item-children > .ant-input').type('Compute Complete')
        cy.get('.ant-btn-group > .ant-btn-primary').click()
        cy.get('.ant-popover-buttons > .ant-btn-primary').click()
        cy.get('.ant-card-body > .ant-input').type('Approved')
        cy.get('.ant-row-flex > [align="right"] > .ant-btn').click()
        cy.get(':nth-child(8) > :nth-child(1) > .ant-popover > .ant-popover-content > .ant-popover-inner > .ant-popover-inner-content > .ant-popover-buttons > .ant-btn-primary').click()
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click()
        cy.get('.ant-btn-primary').click()

    })


    // QA TESTING //
    // // it('Navigate to eodb-qa.ml site', () => {
    // //     cy.visit('https://eodb-qa.ml/admin')

    // // })

    // // it('BPLO Department Login', () => {
    // //     cy.get('#department-index9').click()

    // // })

    // // it('Login Admin BPLO Approver', () => {
    // //     cy.get('input[placeholder="Email Address"]').type('bplo@gmail.com');
    // //     cy.get('input[placeholder="Enter Password"]').type('admin');
    // //     cy.get(".ant-btn").click()
    // //     cy.scrollTo('top')
    // //     cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card_btn > .ant-card-body').click()
    // //     cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .card_btn > .ant-card-body').click()
    // //     cy.get('.ant-btn-primary').click()
    // //     cy.get('[aria-selected="false"] > span').click()
    // //     cy.get(':nth-child(1) > .ant-collapse-header').click()
    // //     cy.get(':nth-child(2) > .ant-collapse-header').click()
    // //     cy.scrollTo('top')
    // //     cy.get('.ant-card-head-title > .ant-row > [align="right"] > .ant-btn').click()
    // //     cy.get('.ant-form-item-children > .ant-input').type('Approved')
    // //     cy.get('.ant-btn-group > .ant-btn-primary').click()
    // //     cy.get('.ant-popover-buttons > .ant-btn-primary').click()
    // //     cy.get('.ant-card-body > .ant-input').type('Compute Complete')
    // //     cy.get('.ant-row-flex > [align="right"] > .ant-btn').click()
    // //     cy.get(':nth-child(8) > :nth-child(1) > .ant-popover > .ant-popover-content > .ant-popover-inner > .ant-popover-inner-content > .ant-popover-buttons > .ant-btn-primary').click()
    // //     cy.scrollTo('top')
    // //     cy.get('.ant-menu > :nth-child(5)').click()
    // //     cy.get('.ant-btn-primary').click()

    // })
})