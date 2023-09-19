/// <reference types = "Cypress" />

import { searchpageActions } from "../pomFiles/Actions/searchPages_specs_actions"


const searchPage_actions = new searchpageActions

describe("search pages check results", ()=>{

    before(()=>{
     cy.visit("https://www.amazon.pk")
    })

 it("search page type and result check", ()=>{
  
  searchPage_actions.USB_text_search()

  //page load check
  searchPage_actions.page_load_check()

  //search result page checks and assertions
  searchPage_actions.search_result_product_name_check()
  searchPage_actions.search_result_product_price_check()
  cy.wait(2000)
  searchPage_actions.search_result_product_image_snapshot()
  cy.wait(2000)
  searchPage_actions.search_result_product_rating_check()
  searchPage_actions.search_result_product_image_click()

 // product description page checks and assertions
  searchPage_actions.landing_page_product_title_check()
  searchPage_actions.landing_page_product_price_check()
  searchPage_actions.landing_page_product_rating_check()
  searchPage_actions.landing_page_product_image_snapshot()
 
  })

})

