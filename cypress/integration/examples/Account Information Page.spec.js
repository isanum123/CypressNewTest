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
   
    /*
   it('Verify that user can Add name to Existing Account ',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

     const login = new ExistingUserPage() 
     const element = new ElementIDPage()

     login.clickHumberger_icon()

     cy.get (".MyAccountLinkCard-text").contains("span","My Account").click({force: true})
     cy.wait(1000)

     element.getEmail_TextField().type("kloosejames220@gmail.com")
      
     element.getContinue_Button().click()
     cy.wait(2000)
       
     element.getPassword_TextField().type("qwerty")
   
     element.getSignIn_Button().click({force: true})

     cy.get(".LinkCard-text").contains("div","Update Info").click()
     cy.wait(2000)

     cy.get("[data-codeception-id='account-name-edit-text']").click({force:true})

     //cy.get("[data-enzyme-id='account-name-first-name-input']").scrollIntoView().should('be.visible')
     //or 
     //cy.get('mdc-select-item').contains("ITEM1").should(item1 => {
     //expect(isVisible(item1[0])).to.be.true
     
     cy.get("[data-enzyme-id='account-name-first-name-input']").type("Daniel")
     cy.wait(1000)

     cy.get("[data-enzyme-id='account-name-last-name-input']").type("Anum")
     cy.wait(1000)

     cy.get("[data-codeception-id='account-name-submit-button']").click

     login.clickHumberger_icon()
     cy.wait(1000)

     login.ClickButton_SignOut() 
     cy.wait(1000)
    })
    
    it('Verify Edit user name functionality of an Existing Account',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

     const login = new ExistingUserPage() 
     const element = new ElementIDPage()

     login.clickHumberger_icon()

     cy.get (".MyAccountLinkCard-text").contains("span","My Account").click({force: true})
     cy.wait(1000)

     element.getEmail_TextField().type("kloosejames220@gmail.com")
      
     element.getContinue_Button().click()
     cy.wait(2000)
       
     element.getPassword_TextField().type("qwerty")
   
     element.getSignIn_Button().click({force: true})

     cy.get(".LinkCard-text").contains("div","Update Info").click()
     cy.wait(2000)

     cy.get("[data-codeception-id='account-name-edit-text']").click({force:true})

     cy.get("[data-enzyme-id='account-name-first-name-input']").clear().type("James")
     cy.wait(1000)

     cy.get("[data-enzyme-id='account-name-last-name-input']").clear().type("Jackson")

     cy.get("[data-codeception-id='account-name-submit-button']").click()

     login.clickHumberger_icon()
     cy.wait(1000)

     login.ClickButton_SignOut() 
     cy.wait(1000)
    }) */
    
    it('Verify Email Edit functionality',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

     const login = new ExistingUserPage() 
     const element = new ElementIDPage()

     login.clickHumberger_icon()

     cy.get (".MyAccountLinkCard-text").contains("span","My Account").click({force: true})
     cy.wait(1000)

     element.getEmail_TextField().type("kloosejames335@gmail.com")
      
     element.getContinue_Button().click()
       
     element.getPassword_TextField().type("qwerty")
   
     element.getSignIn_Button().click({force: true})

     cy.get(".LinkCard-text").contains("div","Update Info").click()
     cy.wait(1000)

     cy.get("[data-codeception-id='account_email_edit']").click({force:true})

     cy.get("[data-enzyme-id='account_email_input']").clear().type("klloosejames4@gmail.com")
     
     cy.get("[data-enzyme-id='account_password_input']").type("qwerty")

     cy.get("[data-enzyme-id='account_email_submit_button']").click()

     login.clickHumberger_icon()
     cy.wait(1000)

     login.ClickButton_SignOut() 
     cy.wait(1000)
    })
    
    it('Verify Email edit to an existing email--Error Message',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

     const login = new ExistingUserPage() 
     const element = new ElementIDPage()

     login.clickHumberger_icon()

     cy.get (".MyAccountLinkCard-text").contains("span","My Account").click({force: true})
     cy.wait(1000)

     element.getEmail_TextField().type("kloosejames335@gmail.com")
      
     element.getContinue_Button().click()
       
     element.getPassword_TextField().type("qwerty")
   
     element.getSignIn_Button().click({force: true})

     cy.get(".LinkCard-text").contains("div","Update Info").click()
     cy.wait(1000)

     cy.get("[data-codeception-id='account_email_edit']").click({force:true})

     cy.get("[data-enzyme-id='account_email_input']").clear().type("dnlanum@gmail.com")
     
     cy.get("[data-enzyme-id='account_password_input']").type("qwerty")

     cy.get("[data-enzyme-id='account_email_submit_button']").click({force:true})
      cy.wait(1000)
     cy.get("[data-codeception-id='account_email_input-validationText']").contains("p","This email address is already in use. Please enter a different email address").should("be.visible")
     
     login.clickHumberger_icon()

     login.ClickButton_SignOut() 
     cy.wait(1000)
    })
     
    it('Verify Password Edit Functionality-Edit to same PW',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

     const login = new ExistingUserPage() 
     const element = new ElementIDPage()

     login.clickHumberger_icon()

     cy.get (".MyAccountLinkCard-text").contains("span","My Account").click({force: true})
     cy.wait(1000)

     element.getEmail_TextField().type("kloosejames35@gmail.com")
      
     element.getContinue_Button().click()
       
     element.getPassword_TextField().type("qwerty")
   
     element.getSignIn_Button().click({force: true})
     cy.wait(1000)

     cy.get(".LinkCard-text").contains("div","Update Info").click({force:true})
     cy.wait(1000)

     cy.get("[data-codeception-id='account_password_edit']").click({force:true})

     cy.get("[data-enzyme-id='account_current_password_input']").type("qwerty")
     
     cy.get("[data-enzyme-id='account_new_password_input']").type("qwerty")

     cy.get("[data-enzyme-id='account_confirm_new_password_input']").type("qwerty")

     cy.get("[data-enzyme-id='account_password_submit_button']").click({force:true})
     cy.wait(1000)
     
     login.clickHumberger_icon()

     login.ClickButton_SignOut() 
     cy.wait(1000)
    })
    
    it('Verify  Error Messages ',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

     const login = new ExistingUserPage() 
     const element = new ElementIDPage()

     login.clickHumberger_icon()

     cy.get (".MyAccountLinkCard-text").contains("span","My Account").click({force: true})
     cy.wait(1000)

     element.getEmail_TextField().type("kloosejames335@gmail.com")
      
     element.getContinue_Button().click()
       
     element.getPassword_TextField().type("qwerty")
   
     element.getSignIn_Button().click({force: true})

     cy.get(".LinkCard-text").contains("div","Update Info").click()
     cy.wait(1000)

     cy.get("[data-codeception-id='account_password_edit']").click({force:true})

     cy.get("[data-enzyme-id='account_current_password_input']").type("qwerty8909")
     
     cy.get("[data-enzyme-id='account_new_password_input']").type("qwerty12")

     cy.get("[data-enzyme-id='account_confirm_new_password_input']").type("qwerty12")

     cy.get("[data-enzyme-id='account_password_submit_button']").click({force:true})
     cy.wait(2000)

     cy.get("[data-codeception-id='account_current_password_input-validationText']").contains("p","Incorrect current password").should("be.visible")
     cy.wait(1000)

     cy.get("[data-enzyme-id='account_current_password_input']").clear().type("qwerty")
     
     cy.get("[data-enzyme-id='account_new_password_input']").clear().type("qwerty12")

     cy.get("[data-enzyme-id='account_confirm_new_password_input']").clear().type("qwerty")

     cy.get("[data-enzyme-id='account_password_submit_button']").click({force:true})
     cy.wait(2000)

     cy.get("[data-codeception-id='account_confirm_new_password_input-validationText']").contains("p","Passwords do not match").should("be.visible")
     cy.wait(1000)

     cy.get("[data-enzyme-id='account_new_password_input']").clear().type("qwer")

     cy.get("[data-enzyme-id='account_confirm_new_password_input']").clear().type("qwer")

     cy.get("[data-enzyme-id='account_password_submit_button']").click({force:true})
     cy.wait(2000)

     cy.get("[data-codeception-id='account_new_password_input-validationText']").contains("p","Passwords must be at least 6 characters").should("be.visible")
     cy.wait(1000)

     login.clickHumberger_icon()

     login.ClickButton_SignOut() 
     cy.wait(1000)

    })
    
    it('Verify Forgot Current Password? Functionality',function()
    {
      cy.visit(Cypress.env('url_prod_libra'))

     const login = new ExistingUserPage() 
     const element = new ElementIDPage()

     login.clickHumberger_icon()

     cy.get (".MyAccountLinkCard-text").contains("span","My Account").click({force: true})
     cy.wait(1000)

     element.getEmail_TextField().type("kloosejames335@gmail.com")
      
     element.getContinue_Button().click()
       
     element.getPassword_TextField().type("qwerty")
   
     element.getSignIn_Button().click({force: true})

     cy.get(".LinkCard-text").contains("div","Update Info").click()
     cy.wait(1000)

     cy.get("[data-codeception-id='account_password_edit']").click({force:true})

     cy.get("[data-codeception-id='account_forgot_password_link']").click({force:true})
     
     cy.get("[data-enzyme-id='AuthHeaderTitle']").contains("h1","Check Your Inbox").should("be.visible")

     cy.get("[data-codeception-id='reset-password-button']").click()
     
     cy.get("[data-enzyme-id='forgot_password_modal-close']").click()
     
     login.clickHumberger_icon()

     login.ClickButton_SignOut() 
     cy.wait(1000)
    })
})
