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

   it('Verify login via My Orders_dropdown Link',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

      /*cy.get(".LowIntentModal-content").contains("span","No, thanks.").click({force: true})

      cy.get("a.MyAccountLinkCard").invoke("show") //Jquery
      cy.contains("My Orders").click({force: true})
      cy.url().should("include","account")*/
      
      const login = new ExistingUserPage()
      const element = new ElementIDPage()

      login.clickHumberger_icon()

       cy.get (".MyAccountLinkCard-text").contains("span","My Orders").click({force: true})
       cy.wait(1000)

       element.getEmail_TextField().type(this.data.Recognised_NotSMS_email)
      
       element.getContinue_Button().click()
       cy.wait(2000)
       
       element.getPassword_TextField().type(this.data.password)
   
       element.getSignIn_Button().click({force: true})

       login.clickHumberger_icon()
       cy.wait(2000)

       login.ClickButton_SignOut() 
       cy.wait(2000) 
    })  

   it('Verify login via My Account Link',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

      /*cy.get(".LowIntentModal-content").contains("span","No, thanks.").click({force: true})
      cy.wait(1000)

      cy.get("a.MyAccountLinkCard").invoke("show")
      cy.contains("My Account").click({force: true})
      cy.url().should("include","account")*/

     const login = new ExistingUserPage() 
     const element = new ElementIDPage()

     login.clickHumberger_icon()

     cy.get (".MyAccountLinkCard-text").contains("span","My Account").click({force: true})
     cy.wait(1000)

     element.getEmail_TextField().type(this.data.Recognised_NotSMS_email)
      
     element.getContinue_Button().click()
     cy.wait(2000)
       
     element.getPassword_TextField().type(this.data.password)
   
     element.getSignIn_Button().click({force: true})

     login.clickHumberger_icon()
     cy.wait(2000)

     login.ClickButton_SignOut() 
     cy.wait(2000)
    })
    
    it('Verify login via Lists',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

      /*cy.get(".LowIntentModal-content").contains("span","No, thanks.").click({force: true})
      cy.wait(1000)

      cy.get("a.MyAccountLinkCard").invoke("show") 
      cy.contains("Lists & Registry").click({force: true})
      cy.url().should("include","favorites")*/

      const login = new ExistingUserPage() 
      const element = new ElementIDPage()

      login.clickHumberger_icon()

      cy.get (".MyAccountLinkCard-text").contains("span","Lists").click({force: true})
      cy.wait(1000)
      
      //cy.get(".pl-Box--display-flex > .Button").click()
      cy.get("[data-enzyme-id='planhub-empty-page-button']").click({force: true})
    
      element.getEmail_TextField().type(this.data.Recognised_NotSMS_email)
        
      element.getContinue_Button().click()
      cy.wait(2000)
        
      element.getPassword_TextField().type(this.data.password)
    
      element.getSignIn_Button().click({force: true})
      cy.wait(2000)

      login.clickHumberger_icon()
      cy.wait(1000)

      login.ClickButton_SignOut() 
      cy.wait(1000)
    })  
    
    it('Verify login via Registry',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

      /*cy.get(".LowIntentModal-content").contains("span","No, thanks.").click({force: true})
      cy.wait(1000)

      cy.get("a.MyAccountLinkCard").invoke("show") 
      cy.contains("Lists & Registry").click({force: true})
      cy.url().should("include","favorites")*/

      const login = new ExistingUserPage() 
      const element = new ElementIDPage()

      login.clickHumberger_icon()

      cy.get (".MyAccountLinkCard-text").contains("span","Registry").click({force: true})
      cy.wait(1000)
      
      cy.get("[data-enzyme-id='RgNonRegistrantHeroContent-CTA']").click()
      cy.wait(1000)
    
      element.getEmail_TextField().type("dnlanum@gmail.com")
        
      element.getPassword_TextField().type(this.data.password)

      cy.get("[data-enzyme-id='login-continue-button']").click()
      cy.wait(1000)
    
      element.getSignIn_Button().click({force: true})
      cy.wait(1000)

      login.clickHumberger_icon()
      cy.wait(1000)

      login.ClickButton_SignOut() 
      cy.wait(1000)
    })   
})
