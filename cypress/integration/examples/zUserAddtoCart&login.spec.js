/// <reference types = "cypress"/>

import ExistingUserPage from '../../support/PageObject/ExistingUser'
import ElementIDPage from '../../support/PageObject/ObjectID'


describe('Existing User Adds and logins',function()
{
   beforeEach(function() 
    {
      cy.fixture("example").then(function(data)
       {
          this.data = data
       })
    })
  /*
   it('Verify that a user is able to Add an item to Cart and login',function()
    {
      Cypress.config('defaultCommandTimeout',3000)

      cy.visit(Cypress.env('url_prod_libra'))

      cy.get(".LowIntentModal-content").contains("span","No, thanks.").click({force: true})
      
      const login = new ExistingUserPage() 
      const element = new ElementIDPage()
 
       //Furniture
       element.getFurniture_item().click({force:true}) 

       element.getLivingRoomFurniture().click()

       element.getSofas_Link().eq(0).click({force:true})

       element.getQuickView_hiddenButton().invoke("show").eq(2).click({force: true}) 

       cy.get("#btn-add-to-cart").click({force: true})

       element.getContinue_to_Cart().click({force: true})
       
       element.getProcess_to_CheckOut_Button().eq(0).click({force: true })

       element.getEmail_TextField().type(this.data.email)
      
       element.getContinue_Button().click()
       
       element.getPassword_TextField().type(this.data.password)
   
       element.getSignIn_Button().click({force: true})

       element.getShipping_Address_Header().should("be.visible")
       
    })*/   
})
