/// <reference types = "cypress"/>

import ExistingUserPage from '../../support/PageObject/ExistingUser'
import ElementIDPage from '../../support/PageObject/ObjectID'

describe('Verify New User creation in UK_platform',function()
{
   beforeEach(function() 
    {
      cy.fixture("example").then(function(data)
       {
          this.data = data
       })
    })
  
    it('New Account Creation--Terms-Link',function()
    {
      cy.visit(Cypress.env('url_uk'))
      cy.wait(5000) 

      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      login.clickPopUp_Element_de()
      cy.wait(1000) 

      element.getEmail_TextField().type("dakwayfair3@gmail.com")
      cy.wait(1000) 

      element.getContinue_Button().click()
      cy.wait(1000)  
      
      element.getPassword_TextField().type("qwer123")
      cy.wait(1000) 

      login.CheckboxClick_de()
      cy.wait(1000)  

      cy.get('[data-hb-id="pl_link"]').eq(0).click()
      cy.wait(1000) 
    })
    
     it('New Account Creation--Privacy Link',function()
    {
      cy.visit(Cypress.env('url_uk'))
      cy.wait(5000) 

      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      login.clickPopUp_Element_de()
      cy.wait(1000)   
      
      element.getEmail_TextField().type("dakwayfair3@gmail.com")
      cy.wait(1000)  

      element.getContinue_Button().click()
      cy.wait(1000)  
      
      element.getPassword_TextField().type("qwer123")
      cy.wait(1000)  

      login.CheckboxClick_de()
      cy.wait(1000)  

      cy.get('[data-hb-id="pl_link"]').eq(1).click()
      cy.wait(1000) 
    })

    it('Existing User successfully logs in via valid Password ',function()
    {
      cy.visit(Cypress.env('url_uk'))
      cy.wait(5000) 

      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      login.clickPopUp_Element_de()
      cy.wait(1000) 
     
      element.getEmail_TextField().type("danum@wayfair.com")
      cy.wait(1000) 

      element.getContinue_Button().click()
      cy.wait(1000)  

      element.getPassword_TextField().type(this.data.password)
      cy.wait(1000) 

      element.getSignIn_Button().click()
      cy.wait(5000) 

      element.getHeaderUtility().click({force:true})
      cy.wait(3000)
      
      cy.get("[data-enzyme-id='account-dropdown-signout']").click({force: true})
      cy.wait(1000)

    })
}) 