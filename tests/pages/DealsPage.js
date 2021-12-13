const Actions = require('./common/Actions');
const path = require('path');
const Page = require(path.resolve('tests/pages/common/Page.js'));
let importUrl = require('../config/url.config');
let config = require('../../wdio.conf');
const assert = require('assert');
let env = config.config.environment.toUpperCase();


class DealsPage extends Page {

    get dealsScreen() {
        return this.getCommonScreens('deals.screen');
    }

    clickAndVerifyDealsScreen() {
        Actions.click(this.dealsScreen.deals_btn);
        Actions.pause(2);
        this.cookiesValidation();
        Actions.isVisible(this.dealsScreen.deal_h1_lbl);
    }
    verifyUrl(page) {
        page = page.toUpperCase();
        let url = importUrl.getUrls(env);
        let currentUrl = Actions.getUrl();
        assert.equal(url[page], currentUrl, 'current page is not matching');
    }

    verifyDealsPrice(price) {
        Actions.isVisible(this.dealsScreen.deal_h1_lbl);
        let rows = price.hashes();
        for (let i = 0; i < rows.length; i++) {
            let j = i + 1;
            let compare = Actions.getText(this.dealsScreen.deal_pricelist_txt + '[' + j + ']').toString();
            compare = compare.substring(6);
            assert.equal(rows[i].price, compare, 'msg is not matching');
        }
    }
    cookiesValidation() {
        let x=$('//*[@id="sp_message_container_474555"]');
        if(x!=null) {
            browser.execute(function() {
                let element =document.getElementById('sp_message_container_474555');
                element.style.display = (element.style.display == 'none') ? 'block' : 'none';
            });
        }

    }

}

module.exports = DealsPage;