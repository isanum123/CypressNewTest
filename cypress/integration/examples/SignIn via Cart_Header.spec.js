/// <reference types = "cypress"/>

import ExistingUserPage from '../../support/PageObject/ExistingUser'
import ElementIDPage from '../../support/PageObject/ObjectID'

describe('Cart Functionality',function()
{
    beforeEach(function() 
    {
      cy.fixture("example").then(function(data)
       {
          this.data = data
       })
    })
    
    it('Verify sign in via Cart Link NotSMSEnrolled_ExistingUser',function()
    {
       cy.visit(Cypress.env('url_Cart'))

       const login = new ExistingUserPage()
       const element = new ElementIDPage()

       login.clickPopUp_Element_Cart()
       cy.wait(1000)

       cy.get("[data-hb-id='pl_link']").contains("a","Sign In").click()
       cy.wait(1000)

       element.getEmail_TextField().type(this.data.Recognised_NotSMS_email)
      
       element.getContinue_Button().click()
       cy.wait(1000)
       
       element.getPassword_TextField().type(this.data.password)
   
       element.getSignIn_Button().click()

       login.clickHumberger_icon()
      cy.wait(1000)

      login.ClickButton_SignOut() 
      cy.wait(1000)
    })
})   