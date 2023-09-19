/// <reference types = "Cypress" />

import { amazonPageActions } from "../pomFiles/Actions/amazon_actions"

const amazon_PageActions = new amazonPageActions

describe('TC_01 Check product can be entered in the cart', () => {

  before(()=>{
    cy.visit("https://www.amazon.pk")

    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('of undefined')
        
        return false
      });
   })

  it('Journey from homepage to PDP', () => {
   

    cy.wait(3000)
    amazon_PageActions.hamburger_click()


    
     cy.wait(3000)
   amazon_PageActions.electronics_text_click()
     cy.wait(5000)
    
    amazon_PageActions.television_text_click()

    amazon_PageActions.nav_television_text_click()
    cy.scrollTo(0, 100)

    amazon_PageActions.samsung_text_click()
    cy.wait(2000)

    //filter products from high to low in price
    amazon_PageActions.filter_select_high_to_low()


   //product with second highest price value is selected manually
    amazon_PageActions.second_highest_product_click()

    //check whether page is loaded
    amazon_PageActions.page_load_check()
   
    //text of the product description is displayed on console
    amazon_PageActions.product_text_log()

  })
})