describe('smartjuan24-dolores', () => {

    it('Navigate to eodb-qa.ml', () => {
        cy.visit('https://eodb-qa.ml/app')
            // cy.visit('http://192.168.1.114:8080/app')
    })
    it('register', () => {
        // cy.get(':nth-child(7) > a > .ant-btn').click()
        // cy.get('button[class="anticon anticon-user"]').click().wait(5000)
        // cy.get(':nth-child(7) > a > .ant-btn').click().wait(5000)
        // cy.get('.account-form > :nth-child(1) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Vince', { delay: 100 });
        // cy.get(':nth-child(7) > [data-top="233"]').type('Vince');
        cy.get(':nth-child(7) > a > .ant-btn').click()
        cy.get('#first-name').type('Vince', { delay: 100 })
        cy.get('#last-name').type('Belo', { delay: 100 })
            // cy.get(':nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('Belo', { delay: 100 });
            // cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('vbelo@centralizedinc.com', { delay: 100 });
            // cy.get(':nth-child(3) > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('admin', { delay: 100 });
            // cy.get(':nth-child(3) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('admin', { delay: 100 });
            // cy.get('.ant-col-24 > .ant-btn').click()
            // cy.get('input[placeholder="Enter Password"]').type('Ariel12');
            // cy.get(".ant-btn").click()
    })
})