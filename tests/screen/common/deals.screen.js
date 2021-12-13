class dealsScreen {
    constructor() {
        this.deals_btn = '//a[contains(text(),"Deals")]';
        this.deal_h1_lbl = '//h1[@id="deals-primary-heading"]';
        this.deal_pricelist_txt = '(//div[contains(@id,"deal")]/following-sibling::*//span[contains(@id,"price.offer")])';
    }
}
module.exports = dealsScreen;