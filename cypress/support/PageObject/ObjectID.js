/// <reference types = "cypress"/>

class ElementIDPage 
{
    getEmail_TextField()
    {
        return cy.get("[data-codeception-id='login-email-input']")       
    }

    getContinue_Button()
    {
        return cy.get("[data-codeception-id='login-continue-button']")       
    }

    getPassword_TextField()
    {
        return cy.get("[data-codeception-id='login-password-input']")      
    }

     getSignIn_Button()
    {
        return cy.get("[data-enzyme-id='login-continue-button']")    
    }
    
    getsoftAccountLock_Message()
    {
        return cy.get("[data-hb-id='pl-text']:nth-child(3)")  
    }

    gethardAccountLock_MessageScreen()
    {
        return cy.get("[data-enzyme-id='emailSupportLink']") 
    }

    getHeaderUtility()
    {
        return cy.get(":nth-child(3) > .nav-UtilityBarItem-link")   
    }

    getForgotPassword_Link()
    {
        return cy.get("[data-enzyme-id='multistage-forgot-password-link']")
    }

    getMagicLink_Button()
    {
        return cy.get("[data-codeception-id='magic-link-button']")     
    }

    getResetPassword_Button()
    {
        return cy.get("[data-codeception-id='reset-password-button']")      
    }

    getEmailOneTime_Link()  
    {
        return cy.get("[data-codeception-id='magic-link-button']")
    }

    getUseDifferentEmail_Link()
    {
        return cy.get("[data-codeception-id='goBackLink']")
    }
    
    getTextMeCode_Button()
    {
        return cy.get("[data-enzyme-id='AuthRecoveryOptionSmsButton']")
    }
    
    getTemporaryCode_TextField()
    {
        return cy.get("[data-codeception-id='oneTimeTempCodeInput']")
    }

    getSubmitTemporaryCode()
    {
        return cy.get("[data-enzyme-id='submitOtpCodeButton']")
    }

    getSendNewCode_Button()
    {
        return cy.get("[data-enzyme-id='sendOtpCodeButton']")
    }

    getEmailMeLink()
    {
        return cy.get("[data-enzyme-id='AuthRecoveryOptionEmailButton']")
    }

    getTextedCode_Link()
    {
        return cy.get("[data-hb-id='pl-box']")
    }

    getInvalidTextedCode_ErrorMessage()
    {
        return cy.get("[data-enzyme-id='SMS_PRIMARY_ERROR_TEXT']")
    }

    getSendNewCode_Button()
    {
        return cy.get("[data-hb-id='pl-box']").find("[data-enzyme-id='SMS_PRIMARY_SEND_CODE_BUTTON']")
    }

    getSendNewCode_via_ForgotPasswd()
    {
        return cy.get("[data-enzyme-id='sendOtpCodeButton']")
    }

    getCloseSMSModal_Widget()
    {
        return cy.get("[data-enzyme-id='SMS_PRIMARY_MODAL-close']")
    }

    getElementProperty()
    {
        return cy.get("[data-hb-id='pl_button']:nth-child(1)")
    }

    getMobileNumber_Textfield()
    {
        return cy.get("[data-enzyme-id='phone-number-input']")
    }

    getEditNumber_link()
    {
        return cy.get(".pl-Text .Button--primary.Button--plainText")
    }

    getErrorMessage_accountCreation()
    {
        return cy.get("[data-hb-id='pl-text']")
    }

    getCode_TextField()
    {
        return cy.get("[data-enzyme-id='textInput']")
    }

    getMobileNumber_Textfield2()
    {
        return cy.get("[data-enzyme-id='textInput']")
    }
    
    getSubmit_button()
    {
        return cy.get("button[type='submit']")
    }

    getSkips_link()
    {
        return cy.get(".pl-Text + .pl-Box--ta-center .Button--primary.Button--plainText")
    }

    getTermOFUse_PrivacyPolicy()  
    {
        return cy.get('[data-hb-id="pl_link"]')
    }

    getFurniture_item()  
    {
        return cy.get("li[class='DepartmentItem']:nth-child(1)")
    }

    getLivingRoomFurniture()
    {
        return cy.get('a[href="/furniture/cat/living-room-furniture-c45982.html"]')
    }

    getSofas_Link()
    {
        return cy.get('a[href="https://www.wayfair.com/furniture/sb0/sofas-c413892.html"]')
    }

    getQuickView_hiddenButton()
    {
        return cy.get("[data-enzyme-id='browse_product_card_major_cta']")
    }

    getContinue_to_Cart()
    {
        return cy.get("[data-hb-id='pl_button']").find(".Button-content").contains("span","Continue to Cart")
    }

    getProcess_to_CheckOut_Button()
    {
        return cy.get("[data-codeception-id='proceed-checkout-button']")
    }

    getShipping_Address_Header()
    {
        return cy.get("div h3.SectionTitle-header")
    }
}
export default ElementIDPage

