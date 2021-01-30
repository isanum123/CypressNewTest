/// <reference types = "cypress"/>

import ExistingUserPage from '../../support/PageObject/ExistingUser'
import ElementIDPage from '../../support/PageObject/ObjectID'

describe('Account Lock Functionality',function()
{
   beforeEach(function() 
    {
      cy.fixture("example").then(function(data)
       {
          this.data = data
       })
    })

    it('Softlock Account',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      //login.clickPopUp_Element()
      //cy.wait(1000) 
      login.clickHumberger_icon()

      login.clickHumberger_SignIn()

      element.getEmail_TextField().type(this.data.softlockemail)
      
      element.getContinue_Button().click()

      element.getsoftAccountLock_Message().contains("p","To protect your information, your account has been temporarily locked").should("be.visible")
    
    })
    
    it('Hardlock Account',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      //login.clickPopUp_Element()
      //cy.wait(1000) 
      login.clickHumberger_icon()

      login.clickHumberger_SignIn()

      element.getEmail_TextField().type(this.data.hardlockemail)

      element.getContinue_Button().click()
      
      element.gethardAccountLock_MessageScreen().contains("a","Email Customer Support").should("be.visible")
        
    })
})

