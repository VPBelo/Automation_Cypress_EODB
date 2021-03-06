describe('EASE OF DOING BUSINESS ADMIN PORTAL', () => {

    it('Navigate to Dolores SmartJuan24 Admin Portal', () => {
        cy.visit('https://dolores.smartjuan24.com/admin')

    })

    it('Tourism Department Login', () => {
        cy.get('#department-index0').click()

    })

    it('Login Admin Tourism Approver', () => {
        cy.get(':nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > .ant-input').type('tourism@gmail.com');
        cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > .ant-input').type('admin');
        cy.get('.ant-btn').click()
        cy.get('.ant-col-18 > :nth-child(3)').click() // For Processing
        // cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card_btn > .ant-card-body').click() // In-Progress
        cy.get('.ant-btn-primary').click()
        cy.get('[aria-selected="false"] > span').click()
        cy.get(':nth-child(1) > .ant-collapse-header').click()
        cy.get(':nth-child(2) > .ant-collapse-header').click()
        cy.scrollTo('top')
        cy.get('.ant-checkbox-input').click()
        cy.get('.ant-card-body > .ant-input').type('Approved')
        cy.get('.ant-row-flex > [align="right"] > .ant-btn').click()
        cy.get('.ant-popover-buttons > .ant-btn-primary').click()
        cy.get('.ant-menu > :nth-child(5)').click()
        cy.get('.ant-btn-primary').click()
    })



    // QA TESTING //

    // it('Navigate to eodb-qa.ml site', () => {
    //     cy.visit('https://eodb-qa.ml/admin')

    // })

    // it('Tourism Department Login', () => {
    //     cy.get('#department-index0').click()
    //     cy.pause()

    // })

    // it('Login Admin Tourism Approver', () => {
    //     cy.get(':nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > .ant-input').type('tourism@gmail.com');
    //     cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > .ant-input').type('admin');
    //     cy.get('.ant-btn').click()
    //     cy.scrollTo('top')
    //     cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card_btn > .ant-card-body').click()
    //     cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .card_btn > .ant-card-body').click()
    //     cy.get('.ant-btn-primary').click()
    //     cy.get('[aria-selected="false"] > span').click()
    //     cy.get(':nth-child(1) > .ant-collapse-header').click()
    //     cy.get(':nth-child(2) > .ant-collapse-header').click()
    //     cy.scrollTo('top')
    //     cy.get('.ant-checkbox-input').click()
    //     cy.get('.ant-card-body > .ant-input').type('Approved')
    //     cy.get('.ant-row-flex > [align="right"] > .ant-btn').click()
    //     cy.get('.ant-popover-buttons > .ant-btn-primary').click()
    //     cy.scrollTo('top')
    //     cy.get('.ant-menu > :nth-child(5)').click()
    //     cy.get('.ant-btn-primary').click()
    // })

})