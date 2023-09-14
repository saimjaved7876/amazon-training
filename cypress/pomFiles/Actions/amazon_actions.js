const amazonPage_Locators = require('../Elements/amazonPageLocators.json')

export class amazonPageActions{


    hamburger_click(){

        cy.get(amazonPage_Locators.hamburger).click()

    }

    electronics_text_click(){
        
        
        cy.get(amazonPage_Locators.electronics_text).click()
    }

    television_text_click(){


        cy.get(amazonPage_Locators.television_text).click({ multiple: true, force: true })
    }

    nav_television_text_click(){

       cy.get(amazonPage_Locators.nav_television_text).contains("Televisions").click()

    }

    samsung_text_click(){

        cy.get(amazonPage_Locators.nav_television_text)
        .find('span').contains('SAMSUNG').click()
    }

    filter_select_high_to_low(){
        
        cy.get(amazonPage_Locators.filter_dropDown).click()
        cy.get(amazonPage_Locators.filter_dropDown_option).click()


    }

    second_highest_product_click(){

        cy.get(amazonPage_Locators.second_highest_priced_product).click()
    }

    page_load_check(){


       cy.get(amazonPage_Locators.page_load_check).should("exist")

    }

    product_text_log(){

        cy.get(amazonPage_Locators.product_description_text_log)
        .should("be.visible").invoke("text").then((text)=> {
            cy.log(text)
          })
    }

}