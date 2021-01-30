/// <reference types = "cypress"/>

import ExistingUserPage from '../../support/PageObject/ExistingUser'
import ElementIDPage from '../../support/PageObject/ObjectID'

describe('ExistingUser_SMS_Enrolled_1_My_Account_&_Orders',function()
{
   beforeEach(function() 
    {
      cy.fixture("example").then(function(data)
       {
          this.data = data
       })
    })

   it('Verify login via password--Positive Scenario',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      //login.clickPopUp_Element()
      login.clickHumberger_icon()

      login.clickHumberger_SignIn()
       
      element.getEmail_TextField().type(this.data.email)
      cy.wait(1000)

      element.getContinue_Button().click()
      cy.wait(2000)
      
      login.EnterText_Password(this.data.password)
      
      element.getSignIn_Button().click({force: true})

      login.clickHumberger_icon()
      cy.wait(2000)

      login.ClickButton_SignOut() 
      cy.wait(2000)
    })
    
    it('Verify login via password-Negative Scenario-Invalid Password',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      //login.clickPopUp_Element()
      login.clickHumberger_icon()

      login.clickHumberger_SignIn()

      element.getEmail_TextField().type(this.data.email)
      cy.wait(1000)

      element.getContinue_Button().click()
      cy.wait(2000)
      
      login.EnterText_Password(this.data.invalidpasswd)
      
      element.getSignIn_Button().click({force: true})

      cy.get(".pl-InputValidationText").contains("p","Password is incorrect. Please try again.").should("be.visible")
    }) 

    it('Verify login via password-Negative Scenario-Invalid Email',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      //login.clickPopUp_Element()
      login.clickHumberger_icon()

      login.clickHumberger_SignIn() 
      
      element.getEmail_TextField().type(this.data.invalidemail)
      cy.wait(1000)

      element.getContinue_Button().click({force: true})
      cy.wait(1000)

      cy.get(".pl-InputValidationText").contains("p","Invalid email address. Please try again.").should("be.visible")
    })
    
    it('Verify User is navigated to login Screen via Use a different Email-Welcome Back! screen',function()
    {
       cy.visit(Cypress.env('url_prod_libra'))

       const login = new ExistingUserPage()
       const element = new ElementIDPage()

       //login.clickPopUp_Element()
       login.clickHumberger_icon()

       login.clickHumberger_SignIn() 

       login.EnterText_Email(this.data.email)
       cy.wait(1000)

       element.getContinue_Button().click({force: true})
       cy.wait(2000)

       cy.get("[data-enzyme-id='useDifferentEmailButton']").click()
      
       cy.title().should("eq","Wayfair.com - Online Home Store for Furniture, Decor, Outdoors & More |")
       cy.wait(2000)

       element.getEmail_TextField().clear().type(this.data.email)

       element.getContinue_Button().click({force: true})

       login.EnterText_Password(this.data.password)
       cy.wait(1000)

       element.getSignIn_Button().click({force: true})
       cy.wait(1000)
    }) 
})
