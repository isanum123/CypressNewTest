/// <reference types = "cypress"/>

import ExistingUserPage from '../../support/PageObject/ExistingUser'
import ElementIDPage from '../../support/PageObject/ObjectID'

describe('Verify New User creation in Canada_French_platform',function()
{
   beforeEach(function() 
    {
      cy.fixture("example").then(function(data)
       {
          this.data = data
       })
    })

    it('New Account Creation--Terms Link',function()
    {
      cy.visit(Cypress.env('url_prod_libraTest_ca_fr'))
      cy.wait(5000) 

      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      login.clickPopUp_Element_CAN_FR()
      cy.wait(1000) 

      element.getEmail_TextField().type("dakwayfair3@gmail.com")
      cy.wait(1000)  

      element.getContinue_Button().click()
      cy.wait(1000) 

      element.getTermOFUse_PrivacyPolicy().eq(0).click()
      cy.wait(1000) 
    })
    
     it('New Account Creation--Codition Link',function()
    {
      cy.visit(Cypress.env('url_prod_libraTest_ca_fr'))
      cy.wait(5000) 

      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      login.clickPopUp_Element_CAN()
      cy.wait(1000) 
      
      element.getEmail_TextField().type("dakwayfair3@gmail.com")
      cy.wait(1000) 

      element.getContinue_Button().click()
      cy.wait(1000)  

      element.getTermOFUse_PrivacyPolicy().eq(1).click() 
      cy.wait(1000)  
    })

    it('Existing User successfully logs in via valid Password ',function()
    {
      cy.visit(Cypress.env('url_prod_libraTest_ca_fr'))
      cy.wait(5000) 

      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      login.clickPopUp_Element_de()
      cy.wait(1000)  
     
      element.getEmail_TextField().type(this.data.email)
      cy.wait(1000) 

      element.getContinue_Button().click().click()
      cy.wait(1000)  
      
      element.getPassword_TextField().type(this.data.password)
      cy.wait(1000)  

      element.getSignIn_Button().click()
      cy.wait(1000) 
    })
}) 