describe('EASE OF DOING BUSINESS ADMIN PORTAL', () => {

    it('Navigate to eodb-qa.ml site', () => {
        cy.visit('https://eodb-qa.ml/admin')

    })

    it('Tourism Department Login', () => {
        cy.get('#department-index1').click()

    })

    it('Login Admin Tourism Approver', () => {
        cy.get(':nth-child(1) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > .ant-input').type('to@gmail.com');
        cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > .ant-input').type('admin');
        cy.get('.ant-btn').click()
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click()
        cy.get('.ant-btn-primary').click()
    })

    it('MEO Department Login', () => {
        cy.get('#department-index2').click()

    })

    it('Login Admin MEO Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('meo@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click()
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click()
        cy.get('.ant-btn-primary').click()

    })

    it('MTO Department Login', () => {
        cy.get('#department-index3').click()

    })

    it('Login Admin MTO Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('mto@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click()
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click()
        cy.get('.ant-btn-primary').click()

    })

    it('Barangay Department Login', () => {
        cy.get('#department-index4').click()
    })

    it('Login Admin Barangay Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('barangay@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click()
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click()
        cy.get('.ant-btn-primary').click()

    })

    it('MHO Department Login', () => {
        cy.get('#department-index5').click()

    })

    it('Login Admin MHO Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('mho@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click()
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click()
        cy.get('.ant-btn-primary').click()

    })

    it('MPDC Department Login', () => {
        cy.pause()
            // cy.get('#department-index5').click()

    })

    it('Login Admin MPDC Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('mpdc@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click()
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click()
        cy.get('.ant-btn-primary').click()

    })

    it('Investigator Department Login', () => {
        cy.get('#department-index6').click()

    })

    it('Login Admin INVESTIGATOR Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('investigator@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click()
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click()
        cy.get('.ant-btn-primary').click()

    })

    it('Police Department Login', () => {
        cy.get('#department-index7').click()

    })

    it('Login Admin PNP Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('pnp@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click()
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click()
        cy.get('.ant-btn-primary').click()

    })

    it('MENRO Department Login', () => {
        cy.get('#department-index9').click()

    })

    it('Login Admin MENRO Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('menro@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click()
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click()
        cy.get('.ant-btn-primary').click()

    })

    it('BPLO Department Login', () => {
        cy.get('#department-index10').click()

    })

    it('Login Admin BPLO Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('bplo@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click()
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click()
        cy.get('.ant-btn-primary').click()

    })

    it('BFP Department Login', () => {
        cy.get('#department-index11').click()

    })

    it('Login Admin BFP Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('bfp@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click()
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click()
        cy.get('.ant-btn-primary').click()

    })

    it('MO Department Login', () => {
        cy.get('#department-index12').click()

    })

    it('Login Admin MO Approver', () => {
        cy.get('input[placeholder="Email Address"]').type('mo@gmail.com');
        cy.get('input[placeholder="Enter Password"]').type('admin');
        cy.get(".ant-btn").click()
        cy.scrollTo('top')
        cy.get('.ant-menu > :nth-child(5)').click()
        cy.get('.ant-btn-primary').click()

    })

})