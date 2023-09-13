const TC_02 = require("../Elements/amazonPageLocators.json")

export class searchpageActions{

    USB_text_search(){

        cy.get(TC_02.searchPages_locators.search_bar).type("USB{enter}")
    }

    page_load_check(){

      cy.get(TC_02.searchPages_locators.page_load_check).should("exist")


    }

    


}