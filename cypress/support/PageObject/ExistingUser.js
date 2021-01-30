/// <reference types = "cypress"/>

class ExistingUserPage 
{
    clickHumberger_icon()
    {
        cy.get("[data-enzyme-id='HamburgerMenuIconTitle']").click({force: true})
        cy.wait(1000)  
    }

    clickHumberger_SignIn()
    {
        cy.get("[data-enzyme-id='header-drawer-signin']").click({force: true})
        cy.wait(1000)  
    }

    clickPopUp_Element()
    {
        //cy.get(".LowIntentModal-content").contains("span","No, thanks.").click({force: true})
        cy.get(".MyAccountContent").click({force: true})    
    }
    
    clickPopUp_Element_de() 
    {
        //cy.get(".LowIntentModalPrivacy-legal").click({force: true})
        cy.get(".MyAccountContent").click({force: true})    
    }

    clickPopUp_Element_CAN() 
    {
        //cy.get(".LowIntentModal-content").click({force: true})
       // cy.get("[data-enzyme-id='LanguageToggleActiveLanguage']").should("be.visible")
       // cy.wait(4000)
        cy.get(".MyAccountContent").click({force: true})    
    }

    clickPopUp_Element_CAN_FR() 
    {
       //cy.get(".LowIntentModal-content").click({force: true})
      // cy.get("[data-enzyme-id='LanguageToggleActiveLanguage']").should("be.visible")
      // cy.wait(4000)
       cy.get(".MyAccountContent").click({force: true})    
    }
    
    clickPopUp_Element_Cart()
    {
        //cy.get(".LowIntentModal-content").contains("span","No, thanks.").click({force: true})
        //cy.get(".NavHeaderCartContent-iconWrap").click({force: true}) 
        cy.get(".NavHeaderCartContent-title").contains("span","Cart").click({force: true})
    }
    

    clickCart_Header()
    {
        cy.get("[data-enzyme-id='CartContent']").click({force: true})   
    }
    
    clickPopUp_Element_List()
    {
       cy.get(".LowIntentModal-content").contains("span","No, thanks.").click({force: true})
       cy.get(".ListsContent-title").click({force: true})
    }
    
    EnterText_Email(value)
    {
        const Email_TextField = cy.get("input[type='email']")
        Email_TextField.type(value)
        return this       
    }

    Email_Field(value)
    {
        const Email_TextField = cy.get("[data-codeception-id='login-email-input']")
        //Email_TextField.clear()
        Email_TextField.type(value)
        return this  
    }

    EnterText_Email_de(value)
    {
        const Email_TextField = cy.get("[data-codeception-id='login-email-input']")
        Email_TextField.clear()
        Email_TextField.type(value)
        return this       
    }

    EnterText_Password(value)
    {
        const Passwd_TextField = cy.get("[data-codeception-id='login-password-input']")
        Passwd_TextField.type(value)
        return this      
    }

    EnterPassword_Textfield(value)
    {
      const EnterPassword = cy.get("[data-codeception-id='login-password-input']")
      EnterPassword.type(value)
      return this 
    }

    Field_Password(value)
    {
        const EnterPassword = cy.get("[data-codeception-id='login-password-input']")
        EnterPassword.type(value)
        return this  
    }

    Password_TextField(value)
    {
        const Passwd =cy.get("[data-codeception-id='login-password-input']")
        Passwd.type(value)
        return this 
    }

    ClickButton_SignOut()
    {
        const buttonClick = cy.get("[data-codeception-id='header-drawer-signout']")
        buttonClick.click({force: true})      
    }

    TextedCode_TextField(value)  
    {
        const TextedCode =  cy.get("#textInput-2")
        TextedCode.type(value)
        return this 
    }

    VerificationCode_TextField(value)
    {
        const VerificationCode =  cy.get("[data-codeception-id='oneTimeTempCodeInput']")
        VerificationCode.type(value)
        return this 
    }

    SignIn_with_TextedCode_Link()
    {
        const SigninTextedcodeLink = cy.get("[data-enzyme-id='SMS_PRIMARY_MODAL_OPEN_BUTTON']").click()
        SigninTextedcodeLink.click({force: true})
    }
    
    CheckboxClick_de() // checking checkboxes using one attribute
    {
        const checkingBox = cy.get("input.pl-Switch")
        checkingBox.check({force: true})
    }
}
export default ExistingUserPage

