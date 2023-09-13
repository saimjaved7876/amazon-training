/// <reference types = "Cypress" />

import { amazonPageActions } from "../pomFiles/Actions/amazon_actions"

const amazon_PageActions = new amazonPageActions

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.com/ref=nav_bb_logo')

    cy.wait(2000)
    amazon_PageActions.hamburger_click()
    // cy.get("#nav-hamburger-menu > i").click()


     cy.wait(3000)
   amazon_PageActions.electronics_text_click()
    // cy.get('.hmenu-visible > :nth-child(7) > .hmenu-item > div').click()
     cy.wait(2000)
    
    // cy.get("#hmenu-content > ul.hmenu.hmenu-visible.hmenu-translateX > li:nth-child(15) > a").click({ multiple: true, force: true })
    amazon_PageActions.television_text_click()
    // cy.get(".s-navigation-item").contains('Televisions').click()
    amazon_PageActions.nav_television_text_click()
    cy.scrollTo(0, 100)
    // cy.get("[data-csa-c-content-id^='p_89/SAMSUNG']").click()

    // cy.get("[aria-label='SAMSUNG']").find('span').contains('SAMSUNG').click()
    amazon_PageActions.samsung_text_click()
    cy.wait(2000)

    // cy.get("#a-autoid-2-announce").click()
    // cy.get("#s-result-sort-select_2").click()
    amazon_PageActions.filter_select_high_to_low()

    // cy.get('[data-asin="B0CDQKVF97"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image').click()
    amazon_PageActions.second_highest_product_click()

    //check whether page is loaded
    amazon_PageActions.page_load_check()
    // cy.get("#feature-bullets > ul").should("exist")

    // cy.get('#feature-bullets > ul > li:nth-child(1) > span').should("be.visible").invoke("text").then((text)=> {
    //   cy.log(text)
    // })
    
    amazon_PageActions.product_text_log()

  })
})