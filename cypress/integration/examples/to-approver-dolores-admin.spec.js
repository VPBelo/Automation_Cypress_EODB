describe('My first cypress test', () => {

    it('Navigate to eodb-qa.ml site', () => {
        cy.visit('https://eodb-dev.ml/admin')

    })
    it('Login to Admin TO Approver', () => {
        cy.get(':nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > .ant-input').click({ delay: 100 })
        // cy.get('.ant-modal-body')
        cy.get('button[class="ant-col-xs-24 ant-col-sm-24 ant-col-md-12 ant-col-lg-8"]').click().wait(5000)
        // cy.get('input[placeholder="Email Address"]').type('to@gmail.com');
        // cy.get('input[placeholder="Enter Password"]').type('admin');
        // cy.get(".ant-btn").click()

    })
})

