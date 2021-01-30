/// <reference types = "cypress"/>

import ExistingUserPage from '../../support/PageObject/ExistingUser'
import ElementIDPage from '../../support/PageObject/ObjectID'

describe('ExistingUser_SMS_Enrolled_My_Account_&_Orders',function()
{
   beforeEach(function() 
    {
      cy.fixture("example").then(function(data)
       {
          this.data = data
       })
    })

    it('Verify login via Text Me a Code',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      //login.clickPopUp_Element()
   
      login.clickHumberger_icon()

      login.clickHumberger_SignIn()

      element.getEmail_TextField().type(this.data.email)
      cy.wait(2000)

      element.getContinue_Button().click()
      cy.wait(2000)
      
      element.getForgotPassword_Link().contains("Forgot Password").click({force: true})
      
      element.getTextMeCode_Button().click()

      cy.get(".pl-Heading").contains("h1","Confirm Verification Code").should("be.visible")
    })
    
   it('Verify login via Text Me a Code_Invalid temporary_Code',function()
    {
       cy.visit(Cypress.env('url_prod_libra'))

       const login = new ExistingUserPage()
       const element = new ElementIDPage()

       //login.clickPopUp_Element()
      // cy.wait(1000) 

       login.clickHumberger_icon()

       login.clickHumberger_SignIn()

       element.getEmail_TextField().type(this.data.email)
       cy.wait(2000)
       
       element.getContinue_Button().click({force: true})
       cy.wait(2000)
       
       element.getForgotPassword_Link().contains("Forgot Password").click({force: true})
       
       element.getTextMeCode_Button().click()
 
       cy.get(".pl-Heading").contains("h1","Confirm Verification Code").should("be.visible")
       
       element.getTemporaryCode_TextField().type(this.data.Invalid_TempCode)
       cy.wait(2000)

       element.getSubmitTemporaryCode().contains("Sign In").click({force: true})
      
       cy.get(".pl-InputValidationText").should("be.visible").contains("Code entered doesn't match the one we sent. Check your code and try again")
    })
    
    it('Verify login via Text Me a Code_SendNewCode_Invalid Code Cleared',function()
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
       
       element.getForgotPassword_Link().contains("Forgot Password").click({force: true})
       
       element.getTextMeCode_Button().click()
 
       cy.get(".pl-Heading").contains("h1","Confirm Verification Code").should("be.visible")
       
       element.getTemporaryCode_TextField().type(this.data.Invalid_TempCode1)
       cy.wait(2000)

       element.getSubmitTemporaryCode().contains("Sign In").click({force: true})
       cy.wait(2000)

       element.getSendNewCode_via_ForgotPasswd().click({force: true})
    })
     
    it('Verify login via Email Me a Link_Get_One_Time_login_Link',function()
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
       
       element.getForgotPassword_Link().contains("Forgot Password").click({force: true})

       element.getEmailMeLink().contains("Email Me a Link").click({force: true})
       cy.wait(2000)

       element.getEmailOneTime_Link().contains("Get One-Time Login Link").click({force: true})
       
      //Check Your Inbox
      cy.get("h1.pl-Box--ta-center.pl-Heading.pl-Heading--sectionTitle").should("be.visible")
    })
    
    it('Verify login via Email Me a Link_Reset_Password',function()
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
       
       element.getForgotPassword_Link().contains("Forgot Password").click({force: true})

       element.getEmailMeLink().contains("Email Me a Link").click({force: true})
       cy.wait(2000)

       element.getResetPassword_Button().contains("Reset Password").click({force: true})
       
       //Check Your Inbox
      cy.get("h1.pl-Box--ta-center.pl-Heading.pl-Heading--sectionTitle").should("be.visible") 
    })
    
    it('Verify User is navigated to login Screen via Use a different Email Address-Check Your Inbox screen',function()
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
       
       element.getForgotPassword_Link().contains("Forgot Password").click({force: true})

       element.getEmailMeLink().contains("Email Me a Link").click({force: true})
       cy.wait(2000)

       element.getEmailOneTime_Link().contains("Get One-Time Login Link").click({force: true})

      //Use a Different Email
      cy.get("form div .Button-content").contains("span","Use a Different Email Address").click({force: true})
      cy.wait(2000)

      cy.title().should("eq","Wayfair.com - Online Home Store for Furniture, Decor, Outdoors & More |")
    })

    it('Verify User is navigated to login Screen Use a Different Email from Welcome Back! Screen',function()
    {
       cy.visit(Cypress.env('url_prod_libra'))

       const login = new ExistingUserPage()
       const element = new ElementIDPage()

      // login.clickPopUp_Element()
       login.clickHumberger_icon()

       login.clickHumberger_SignIn()


       element.getEmail_TextField().type(this.data.email)
      
       element.getContinue_Button().click()
       cy.wait(2000)

      //Use a Different Email from Welcome Back! Screen
      cy.get("[data-enzyme-id='useDifferentEmailButton']").click({force: true})
      cy.wait(2000)

      cy.get("[data-enzyme-id='AuthHeaderTitle']").contains("Enter your email address to sign in or to create an account").should("be.visible")
    })
})

