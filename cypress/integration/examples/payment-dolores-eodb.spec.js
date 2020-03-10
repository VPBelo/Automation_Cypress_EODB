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

    it('Applicant Payment', () => {
        cy.scrollTo('top')
        cy.get('.ant-row-flex > .ant-col-24 > .ant-btn').click()
        cy.pause()
        cy.get(':nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control').type('4111111111111111', { delay: 100 })
        cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control').type('Vince Belo', { delay: 100 })
        cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control').type('12/22', { delay: 100 })
        cy.get(':nth-child(4) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('233', { delay: 100 })
        cy.get('form > :nth-child(1) > :nth-child(1)').click().wait(5000)
        cy.get('.ant-card-body > .ant-btn').click().wait(5000)
        // cy.get('.ant-drawer-close').click(1000)
        // cy.pause()
        // cy.get('.ant-menu > :nth-child(3)').wait(10000).click()
        // cy.get('.ant-tabs-tab-active').wait(10000).click()
        // cy.get('.ant-table-fixed-left > .ant-table-header > .ant-table-fixed > .ant-table-thead > tr > th').click().wait(5000)

        // cy.get('class="ant-table-row ant-table-row-level-0"').click().wait(5000)
        // cy.get('[data-row-key="0"] > :nth-child(5)').click().wait(5000)

        // cy.get('[key="status"]').click()
        // cy.get('.ant-table-body-inner > .ant-table-fixed > .ant-table-tbody > [data-row-key="0"] > td').click()
        // cy.get('[key="action"]').click()
        // cy.get('[data-row-key="0"] > :nth-child(5)').click()
        // cy.get('style="overflow: scroll"').click().scrollTo()


        // cy.get('.ant-drawer-body > .ant-tabs > .ant-tabs-bar > .ant-tabs-nav-container > .ant-tabs-nav-wrap > .ant-tabs-nav-scroll > .ant-tabs-nav > :nth-child(1)').wait(3000).click()
        // cy.get('.ant-tabs-nav > :nth-child(1) > :nth-child(3)').wait(3000).click()
        // cy.get('.ant-collapse-header').click()
    })


    // it('Navigate to eodb-qa.ml', () => {
    //     cy.visit('https://eodb-qa.ml/app')
    // })

    // it('Applicant Payment', () => {
    //     cy.scrollTo('top')
    //     cy.get(':nth-child(6) > a > .ant-btn').click({
    //         delay: 100
    //     })
    //     cy.get('#login-email').type('vbelo@centralizedinc.com')
    //     cy.get('#login-password').type('admin')
    //     cy.get('#login-btn').click()
    //     cy.scrollTo('top')

    // })

})