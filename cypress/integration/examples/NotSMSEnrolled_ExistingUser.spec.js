/// <reference types = "cypress"/>

import ExistingUserPage from '../../support/PageObject/ExistingUser'
import ElementIDPage from '../../support/PageObject/ObjectID'

describe('Sign In with NotSMSEnrolled_ExistingUser---My_Account_&_Orders',function()
{
   beforeEach(function() 
   {
     cy.fixture("example").then(function(data)
      {
         this.data = data
      })
   })

  it('Login via Password_with NotSMSEnrolled_ExistingUser',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))
      
      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      //login.clickPopUp_Element()
      login.clickHumberger_icon()

      login.clickHumberger_SignIn()
      
      element.getEmail_TextField().type(this.data.Recognised_NotSMS_email)
      
      element.getContinue_Button().click()
      cy.wait(2000)
      
      element.getPassword_TextField().type(this.data.password)
  
      element.getSignIn_Button().click()
      cy.wait(4000)

      login.clickHumberger_icon()
      cy.wait(2000)

      login.ClickButton_SignOut() 
      cy.wait(1000)
    })

    it('Login via Password_with NotSMSEnrolled_ExistingUser_Invalid Password',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

      const login = new ExistingUserPage()
      const element = new ElementIDPage()
      
      //login.clickPopUp_Element()
      login.clickHumberger_icon()

      login.clickHumberger_SignIn()

      element.getEmail_TextField().type(this.data.Recognised_NotSMS_email)
      
      element.getContinue_Button().click()
      cy.wait(2000)
      
      element.getPassword_TextField().type(this.data.invalidpasswd)
  
      element.getSignIn_Button().click()

      cy.get(".pl-InputValidationText").contains("p","Password is incorrect. Please try again.").should("be.visible")
      cy.wait(1000) 
    })

   it('Login via forgetPasswd_MagicLink_with NotSMSEnrolled_ExistingUser',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      //login.clickPopUp_Element()
      login.clickHumberger_icon()

      login.clickHumberger_SignIn()

      element.getEmail_TextField().type(this.data.Recognised_NotSMS_email)
      
      element.getContinue_Button().click()
      cy.wait(2000)
      
      element.getForgotPassword_Link().click({force: true})
      cy.wait(1000)
      
      element.getMagicLink_Button().click({force: true})
      
      //Please check Your Email
      cy.get("[data-hb-id='pl-heading']").should("be.visible")  
      cy.wait(1000) 
    })

    it('Login via forgetPasswd_ResetPasswd_with NotSMSEnrolled_ExistingUser',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      //login.clickPopUp_Element()
      login.clickHumberger_icon()

      login.clickHumberger_SignIn()

      element.getEmail_TextField().type(this.data.Recognised_NotSMS_email)

      element.getContinue_Button().click()
      cy.wait(1000)

      element.getForgotPassword_Link().click({force: true})
      cy.wait(1000)
      
      element.getResetPassword_Button().click({force: true})
      
      //Please check Your Email
      cy.get("[data-hb-id='pl-heading']").should("be.visible") 
      cy.wait(1000)
    })   

    it('Use a Different Email Address_NotSMSEnrolled_User',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      //login.clickPopUp_Element()
      login.clickHumberger_icon()

      login.clickHumberger_SignIn()

      element.getEmail_TextField().type(this.data.Recognised_NotSMS_email)

      element.getContinue_Button().click()
      cy.wait(1000)

      element.getForgotPassword_Link().click({force: true})
      cy.wait(1000)
      
      element.getEmailOneTime_Link().click()
      
      //Please check Your Email
      cy.get("[data-hb-id='pl-heading']").should("be.visible")
      cy.wait(2000)

      element.getUseDifferentEmail_Link().click()
      cy.wait(2000)
      
      //Page Name
      cy.get("[data-enzyme-id='AuthHeaderTitle']").contains("Enter your email address to sign in or to create an account").should("be.visible")
      cy.wait(1000)

    })
})


