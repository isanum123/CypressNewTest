/// <reference types = "cypress"/>

import ExistingUserPage from '../../support/PageObject/ExistingUser'
import ElementIDPage from '../../support/PageObject/ObjectID'

describe('New User Account Creation My_Account_&_Orders',function()
{
      beforeEach(function() 
      {
        cy.fixture("example_Tdata").then(function(data)
         {
            this.data = data
         })
      })
     /*
     it('Create an Account--Code Received',function()
      {
         Cypress.config('defaultCommandTimeout',5000)

         cy.visit(Cypress.env('url_prod1'))

         const login = new ExistingUserPage()
         const element = new ElementIDPage()

         login.clickPopUp_Element() 
   
         login.Email_Field(this.data.email1)

         element.getContinue_Button().click()
         
         login.Field_Password(this.data.password1)
         
         element.getElementProperty().contains("Create Account").click({force: true})

         element.getMobileNumber_Textfield().type(this.data.phoneNumber1)
         
         element.getElementProperty().contains("Send Code").click({force: true})  
    })

     it('Create an Account--Edit Number functionality',function()
      {
          Cypress.config('defaultCommandTimeout',5000)

          cy.visit(Cypress.env('url_prod1'))

         const login = new ExistingUserPage()
         const element = new ElementIDPage()

         login.clickPopUp_Element()

         login.Email_Field(this.data.email2)

         element.getContinue_Button().click()

         login.Field_Password(this.data.password2)

         element.getElementProperty().contains("Create Account").click({force: true})

         element.getMobileNumber_Textfield().type(this.data.phoneNumber1)

         element.getElementProperty().contains("Send Code").click({force: true}) 
        
         element.getEditNumber_link().click({force: true})
         
         element.getMobileNumber_Textfield2().should("have.value","571-297-5052").clear().type(this.data.phoneNumber2)

         element.getElementProperty().contains("Send Code").click({force: true}) 
    })
    
     it('Create an Account--Invalid Code Entered',function()
    {
         Cypress.config('defaultCommandTimeout',5000)

         cy.visit(Cypress.env('url_prod1'))

         const login = new ExistingUserPage()
         const element = new ElementIDPage()

         login.clickPopUp_Element()

         login.Email_Field(this.data.email3)

         element.getContinue_Button().click()

         login.Field_Password(this.data.password3)

         element.getElementProperty().contains("Create Account").click({force: true})

         element.getMobileNumber_Textfield().type(this.data.phoneNumber2)

         element.getElementProperty().contains("Send Code").click({force: true})
         
         element.getCode_TextField().type(this.data.Invalid_TempCode3)

         element.getSubmit_button().click({force: true})    

         element.getErrorMessage_accountCreation().contains("Check your code and try again.").should("be.visible") 
    })

     it('Create an Account--Invalid Code and Error message cleared--Send New Code',function()
    {
         Cypress.config('defaultCommandTimeout',5000)

         cy.visit(Cypress.env('url_prod1'))

         const login = new ExistingUserPage()
         const element = new ElementIDPage()

         login.clickPopUp_Element()

         element.getEmail_TextField().type(this.data.email4)

         element.getContinue_Button().click()

         login.Field_Password(this.data.password4)

         element.getElementProperty().contains("Create Account").click({force: true})

         element.getMobileNumber_Textfield().type(this.data.phoneNumber2)

         element.getElementProperty().contains("Send Code").click({force: true})
         
         element.getCode_TextField().type(this.data.Invalid_TempCode4)

         element.getSubmit_button().click({force: true}) 

         element.getErrorMessage_accountCreation().contains("Check your code and try again.").should("be.visible") 
         
         // Send New Code and Clear Error message 
         element.getElementProperty().eq(2).click({force: true})
         cy.wait(2000)
    })

    it('Confirm Verification Code--Skip Confirmation Link',function()   
   {
         Cypress.config('defaultCommandTimeout',5000)

         cy.visit(Cypress.env('url_prod1'))

         const login = new ExistingUserPage()
         const element = new ElementIDPage()

         login.clickPopUp_Element()

         element.getEmail_TextField().type(this.data.email5)

         element.getContinue_Button().click()

         login.Field_Password(this.data.password5)

         element.getElementProperty().contains("Create Account").click({force: true})

         element.getMobileNumber_Textfield().type(this.data.phoneNumber2)

         element.getElementProperty().contains("Send Code").click({force: true})

         element.getSkips_link().click({force: true})

         cy.title().should("eq","Wayfair.com - Online Home Store for Furniture, Decor, Outdoors & More")
    })
    
   it('Add Phone Number during Enrollment--No Thanks',function()
    {
         Cypress.config('defaultCommandTimeout',5000)

         cy.visit(Cypress.env('url_prod1'))

         const login = new ExistingUserPage()
         const element = new ElementIDPage()

         login.clickPopUp_Element()

         element.getEmail_TextField().type(this.data.email6)

         element.getContinue_Button().click()

         login.Field_Password(this.data.password6)

         element.getElementProperty().contains("Create Account").click({force: true})
         
         element.getSkips_link().click({force: true})

         cy.title().should("eq","Wayfair.com - Online Home Store for Furniture, Decor, Outdoors & More")
   
    })

      it('User Navigated to Wayfair Legal Center--privacy Policy Link',function()
    {
         Cypress.config('defaultCommandTimeout',5000)

         cy.visit(Cypress.env('url_prod1'))

         const login = new ExistingUserPage()
         const element = new ElementIDPage()

         login.clickPopUp_Element()

         element.getEmail_TextField().type(this.data.email7)
      
         element.getContinue_Button().click()

         cy.get('[href="/customerservice/general_info.php#privacy"]').click()
         cy.wait(2000)
    })

      it('User Navigated to Wayfair Legal Center--terms Of Use Link',function()
    {
       Cypress.config('defaultCommandTimeout',5000)

       cy.visit(Cypress.env('url_prod1'))

       const login = new ExistingUserPage()
       const element = new ElementIDPage()

       login.clickPopUp_Element() 

       element.getEmail_TextField().type(this.data.email8)
      
       element.getContinue_Button().click()

       cy.get('[href="/customerservice/general_info.php#terms"]').click()
       cy.wait(2000)
    })*/
})       




