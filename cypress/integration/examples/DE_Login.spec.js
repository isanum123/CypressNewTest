/// <reference types = "cypress"/>

import ExistingUserPage from '../../support/PageObject/ExistingUser'
import ElementIDPage from '../../support/PageObject/ObjectID'

describe('Verify New User creation in DE_platform',function()
{
   beforeEach(function() 
    {
      cy.fixture("example").then(function(data)
       {
          this.data = data
       })
    })

    it('New Account Creation--Terms-AGB Link',function()
    {
      cy.visit(Cypress.env('url_prod_libra_de'))
      cy.wait(5000) 

      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      login.clickPopUp_Element_de()
      cy.wait(1000) 

      element.getEmail_TextField().type("dakwayfair3@gmail.com")
      cy.wait(1000) 

      element.getContinue_Button().click()
      cy.wait(1000)  

      login.CheckboxClick_de()
      cy.wait(1000) 

      cy.get("[data-hb-id='pl_link']:nth-child(2)").contains("AGB").click()
      
      /*cy.get('[data-hb-id="pl_link"]').then(($a) => { 
        if ($a.text().includes('AGB')){
            cy.get('[href="/customerservice/agb.php"]').click({force:true})
            cy.wait(3000)
        }else if ($a.text().includes('AGB')) { 
            cy.get("[data-enzyme-id='termsOfUseLink']").click({force:true})  
            cy.wait(3000)    
      }else {
          cy.get("[data-enzyme-id='termsOfUseLink']").click({force:true}) 
        }
       })*/
       cy.wait(1000) 
    })
    
  it('New Account Creation--Privacy Link',function()
    {
      cy.visit(Cypress.env('url_prod_libra_de'))
      cy.wait(5000) 

      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      login.clickPopUp_Element_de()
      cy.wait(1000) 

      element.getEmail_TextField().type("dakwayfair3@gmail.com")
      cy.wait(1000)  

      element.getContinue_Button().click()
      cy.wait(1000)  

      login.CheckboxClick_de()
      cy.wait(1000) 
      
      cy.get("[data-hb-id='pl_link']:nth-child(1)").contains("Datenschutzerklärung").click()

      /*cy.get('[data-hb-id="pl_link"]').then(($a) => { 
        if ($a.text().includes('Datenschutzerklärung')) {
            cy.get('.pl-Text > [href="/customerservice/datenschutz.php"]').click({force:true})
            cy.wait(3000)
        } else if ($a.text().includes('privacyPolicyLink')) { 
          cy.get("[data-enzyme-id='privacyPolicyLink']").click({force:true}) 
          cy.wait(3000)    
        }else {
          cy.get("[data-enzyme-id='privacyPolicyLink']").click({force:true})
          cy.wait(3000)
        }
      })*/
      cy.wait(1000)  
    })

   it('Verify that user is unable to login with less than 8 characters passwd',function()
    {
      cy.visit(Cypress.env('url_prod_libra_de'))
      cy.wait(5000) 

      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      login.clickPopUp_Element_de()
      cy.wait(1000) 
      
      element.getEmail_TextField().type("dakwayfair3@gmail.com")
      cy.wait(1000)  

      element.getContinue_Button().click()
      cy.wait(1000) 

      element.getPassword_TextField().type("qwer12")
      cy.wait(1000) 

      login.CheckboxClick_de()
      cy.wait(1000) 

      element.getSignIn_Button().click()
      cy.wait(1000)  

      cy.get(".pl-InputValidationText").should("be.visible") 
      cy.wait(1000) 
    })
    
    it('Existing User successfully logs in via valid Password ',function()
    {
      cy.visit(Cypress.env('url_prod_libra_de'))
      cy.wait(5000) 

      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      login.clickPopUp_Element_de()
      cy.wait(1000) 

      element.getEmail_TextField().type(this.data.email)
      cy.wait(1000)  

      element.getContinue_Button().click()
      cy.wait(1000)  

      element.getPassword_TextField().type(this.data.password)
      cy.wait(1000) 
       
      element.getSignIn_Button().click()
      cy.wait(1000)  
      
    })
}) 