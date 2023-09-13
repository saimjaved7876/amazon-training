/// <reference types = "Cypress" />

import { searchpageActions } from "../pomFiles/Actions/searchPages_specs_actions"

const searchPage_actions = new searchpageActions

describe("search pages check results", ()=>{

    before(()=>{
     cy.visit("https://www.amazon.com/ref=nav_bb_logo")
    })

 it("search page type and result check", ()=>{
  let product_name_text, product_price_text, product_image, product_rating;
  //  cy.get('#twotabsearchtextbox').type("USB{enter}")
  searchPage_actions.USB_text_search()

  //page load check
  searchPage_actions.page_load_check()
  // cy.get("[data-cel-widget='search_result_0']").should("exist").and("have.text", "Results")

  cy.get('[data-asin="B0CCBQNKYM"] > :nth-child(1) > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-top-small > .puis-padding-right-small > .a-size-mini').should("exist").invoke('text').then((text1) =>{
    product_name_text = text1
  })
 
  cy.get('[data-asin="B0CCBQNKYM"] > :nth-child(1) > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-top-small > .sg-row > .sg-col-4-of-20 > .sg-col-inner > .puis-price-instructions-style > .a-row > .a-size-base > .a-price > [aria-hidden="true"] > .a-price-whole').should("exist").invoke("text").then((text2)=>{
    product_price_text = text2
  })

  cy.wait(2000)
  cy.get('[data-asin="B0CCBQNKYM"] > :nth-child(1) > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > :nth-child(1) > :nth-child(1) > .s-list-col-left > .sg-col-inner > .s-product-image-container > :nth-child(1) > .rush-component > .a-link-normal > .a-section > .s-image').should("exist").screenshot('search_resultpage_product')
  cy.wait(2000)
  cy.get('[aria-label="3.3 out of 5 stars"] > .a-size-base').should("exist").invoke("text").then((text4)=>{
    product_rating = text4
  })

  cy.get('[data-asin="B0CCBQNKYM"] > :nth-child(1) > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > :nth-child(1) > :nth-child(1) > .s-list-col-left > .sg-col-inner > .s-product-image-container > :nth-child(1) > .rush-component > .a-link-normal > .a-section > .s-image').click()

  cy.get('#title > #productTitle').should("exist").invoke("text").then((pdpname)=>{
    expect(product_name_text.trim()).eq(pdpname.trim())
  })

  cy.get('.a-spacing-none > .a-price > [aria-hidden="true"] > .a-price-whole').invoke("text").then((pdpprice) =>{
    expect(product_price_text).eq(pdpprice)

  })

  cy.get('#averageCustomerReviews_feature_div > #averageCustomerReviews > [data-action="acrStarsLink-click-metrics"] > #acrPopover > span.a-declarative > .a-popover-trigger > .a-size-base').invoke('text').then((pdpRating)=>{
    expect(product_rating).eq(pdpRating.trim())
  })

  cy.get('#landingImage').screenshot('landingPage_image')

  })





  

})

