const searchPageLocators = require("../Elements/searchPageLocators.json")

export class searchpageActions{

    constructor() {
        // Initialize instance variables within the constructor
        this.product_name_text = null;
        this.product_price_text = null;
        this.product_rating_text = null;
      }
    

    USB_text_search(){

        cy.get(searchPageLocators.search_bar).type("USB{enter}")
    }

    page_load_check(){

      cy.get(searchPageLocators.page_load).should("exist")
    }

    search_result_product_name_check(){
        
       cy.get(searchPageLocators.search_result_product_name).first().should("exist").invoke('text').then((text1) =>{
            this.product_name_text = text1
          })
    }

    search_result_product_price_check(){
       cy.get(searchPageLocators.search_result_product_price).first().should("exist").invoke("text").then((text2)=>{
            this.product_price_text = text2
          })
    }

    search_result_product_rating_check(){
       cy.get(searchPageLocators.search_result_product_rating).first().should("exist").invoke("text").then((text3)=>{
            this.product_rating_text = text3
          })
    }

    search_result_product_image_click(){
        cy.get(searchPageLocators.search_result_product_image).first().should("exist").click()
    }

    search_result_product_image_snapshot(){
        cy.get(searchPageLocators.search_result_product_image).first().should("exist").screenshot('search_resultpage_product')
    }

    
    landing_page_product_title_check(){
        cy.get(searchPageLocators.landing_page_product_title).should("exist").invoke("text").then((pdpname)=>{
            expect(this.product_name_text.trim()).eq(pdpname.trim())
          })
    }

    landing_page_product_price_check(){
        cy.get(searchPageLocators.landing_page_product_price).invoke("text").then((pdpprice) =>{
            expect(this.product_price_text).eq(pdpprice)
        
          })
    }

    landing_page_product_rating_check(){
        cy.get(searchPageLocators.landing_page_product_rating).invoke('text').then((pdpRating)=>{
            expect(this.product_rating_text.trim()).eq(pdpRating.trim())
          })
    }

    landing_page_product_image_snapshot(){
        cy.get(searchPageLocators.landing_page_product_image).screenshot('landingPage_image')
    }


}