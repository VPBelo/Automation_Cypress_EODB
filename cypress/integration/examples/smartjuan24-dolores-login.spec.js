
import 'cypress-file-upload';
// Cypress.on('uncaught:exception', (err, runnable) => {
//     return false
// })


describe('EASE OF DOING BUSINESS', () => {

    it('Navigate to eodb-dev.ml', () => {
        cy.visit('https://eodb-dev.ml/app')
        // cy.visit('http://192.168.1.114:8080/app')
        // cy.visit('https://smartjuan24-dolores.ml/app')
    })

    //login
    it('Applicant Login', () => {
        cy.get(':nth-child(6) > a > .ant-btn').click({ delay: 100 })
        // cy.get('input[placeholder="Enter Email Address"]').type('antoniobasasjr@gmail.com' , { delay: 100 })
        // cy.get('#login-password').type('1234567890' , { delay: 100 })
        cy.get('#login-email').type('antoniobasasjr@gmail.com' , { delay: 100 })
        cy.get('#login-password').type('1234567890' , { delay: 100 })
        //   cy.get('#login-email').type('grivera@centralizedinc.com' , { delay: 100 })
        //   cy.get('#login-password').type('godo123' , { delay: 100 })
        cy.get('#login-btn').click()
    });
        
      
     //user dashboard  
    // it('Applicant Dashboard', () => {
    //         cy.get('.ant-menu > :nth-child(2)').click({ delay: 100 })
    //         cy.scrollTo("250px", {easing: "swing"})
    //         cy.get('.ant-menu :nth-child(3)').click({ delay: 100 })
    //         cy.scrollTo("250px", {easing: "swing"})
    //         cy.get('.ant-menu :nth-child(4)').click({ delay: 100 })
    //         cy.scrollTo("250px", {easing: "swing"})
    //         cy.get('.ant-menu :nth-child(5)').click({ delay: 100 })
    //         cy.scrollTo("250px", {easing: "swing"})
    //         cy.get('.ant-menu :nth-child(6)').click({ delay: 100 })
    //         cy.scrollTo("250px", {easing: "swing"})
    //         cy.get('.ant-menu :nth-child(7)').click({ delay: 100 })
    //         cy.scrollTo("250px", {easing: "swing"})
    //         cy.get('.ant-menu :nth-child(8)').click({ delay: 100 })
    //         cy.scrollTo("250px", {easing: "swing"})

    //     })

    // it('Applicant Applying for Business Permit  ', () => {
    //         cy.get('.ant-menu :nth-child(3)').click({ delay: 100 })
    //         cy.get('.ant-col-md-9 > .item-buttons').click({ delay: 100 }) 
    //         cy.get('.ant-btn-primary').click({ delay: 100 })
    //         cy.get('.ant-btn-primary').click({ delay: 100 }) 
        
    //     })

    // it('Applicant Completing the Required Business Permit Fields  ', () => {

    //         cy.get('input[placeholder="Select date"]').click()
    //         cy.get('.ant-calendar-input').type('1982-05-13')
    //         cy.get(':nth-child(4) > :nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-input').type('09123456789')
    //         cy.get('.ant-col-sm-8 > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').click().type('DAGATAN').get('.ant-btn-primary').click()
    //         cy.get('.ant-btn-primary').click({ delay: 100 }) 
    //         cy.get('.ant-btn-primary').click({ delay: 100 }) 
    //         cy.get('.ant-radio-group > :nth-child(1)').click().get('.ant-btn-primary').click({ delay: 100 }) 
        
    //     })   
    // it('Applicant upload Required Documents  ', () => {
    //     const fileName = 'example.json';
    //     cy.fixture(fileName).then(fileContent => {
    //     cy.get('input[type="file"]').upload({ fileContent, fileName, mimeType: 'application/json' });
    //     cy.get('.ant-btn-primary').click({ delay: 100 }) 
    //     cy.get('.ant-btn-primary').click({ delay: 100 }) 
    //     })   
    // })  
            
            // cy.contains('Prev').click();
            //choose next month 
            // cy.contains('Next').click();
            //choose date 24
            // cy.contains('24').click();

        // const fileName = 'example.json';
        // cy.get('.ant-calendar-picker-input').select('1982-05-13')
    //     cy.fixture(fileName).then(fileContent => {
    //     cy.get('input[type="file"]').upload({ fileContent, fileName, mimeType: 'application/json' });
    // })
        // cy.get('.ant-calendar-picker-input]').invoke('val').then((text) => {
        //     expect('1982-05-13').to.equal(text);
        // });


       
        


        // cy.get('.ant-menu :nth-child(3)').click({ delay: 100 })
        // cy.get('.ant-col-md-9 > .item-buttons').click({ delay: 100 })
        // cy.get('.ant-btn-primary').click({ delay: 100 })
        // cy.get('.ant-btn-primary').click({ delay: 100 })
      

        // const fileName = 'example.json';

        // cy.fixture(fileName).then(fileContent => {
        //     cy.get('input[type="file"]').upload({ fileContent, fileName, mimeType: 'application/json' });
        
    

})






