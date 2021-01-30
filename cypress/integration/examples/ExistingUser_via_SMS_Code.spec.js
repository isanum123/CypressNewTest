/// <reference types = "cypress"/>

import ExistingUserPage from '../../support/PageObject/ExistingUser'
import ElementIDPage from '../../support/PageObject/ObjectID'

describe('ExistingUser_SMS_Enrolled_2_My_Account_&_Orders',function()
{
   beforeEach(function() 
   {
     cy.fixture("example").then(function(data)
      {
         this.data = data
      })
   })

   it('Verify login via SMS--Texted_Code_Received',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))
      
      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      //login.clickPopUp_Element()
      login.clickHumberger_icon()

      login.clickHumberger_SignIn()

      element.getEmail_TextField().type(this.data.email)
      
      element.getContinue_Button().click()
      cy.wait(2000) 
      
      element.getTextedCode_Link().contains("Sign in with Texted Code").click({force: true})
      cy.wait(2000)
    })
    
  it('Verify login via SMS--Invalid Texted Code Entered',function()
    {
       cy.visit(Cypress.env('url_prod_libra'))

       const login = new ExistingUserPage()
       const element = new ElementIDPage()

       //login.clickPopUp_Element()
       login.clickHumberger_icon()

       login.clickHumberger_SignIn() 

       element.getEmail_TextField().type(this.data.email)
      
       element.getContinue_Button().click()
       cy.wait(2000) 
      
       element.getTextedCode_Link().contains("Sign in with Texted Code").click({force: true})

       element.getTextedCode_Link().contains("Verification Code").type(this.data.Invalid_TextedCode)
       cy.wait(1000)

       element.getTextedCode_Link().contains("Sign In").click({force: true})
       cy.wait(1000)

       element.getInvalidTextedCode_ErrorMessage().contains("Check your code and try again.").should("be.visible") 
    })

    it('Verify login via SMS--Send New Code-Invalid Texted Code cleared',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

       const login = new ExistingUserPage()
       const element = new ElementIDPage()

       //login.clickPopUp_Element()
       login.clickHumberger_icon()

       login.clickHumberger_SignIn() 

       element.getEmail_TextField().type(this.data.email)
      
       element.getContinue_Button().click()
       cy.wait(2000) 
      
       element.getTextedCode_Link().contains("Sign in with Texted Code").click({force: true})

       element.getTextedCode_Link().contains("Verification Code").type(this.data.Invalid_TextedCode1)
       cy.wait(1000)

       element.getTextedCode_Link().contains("Sign In").click({force: true})
       cy.wait(1000)

       element.getInvalidTextedCode_ErrorMessage().contains("Check your code and try again.").should("be.visible")
       cy.wait(2000)
    
       element.getSendNewCode_Button().contains("Send New Code").click({force: true})
       cy.wait(5000)
      
       element.getCloseSMSModal_Widget().click({force:true})
       cy.wait(2000)
    })
}) 



