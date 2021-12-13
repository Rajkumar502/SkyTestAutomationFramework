const assert = require('assert');
class Actions {
    url(url) {
        return browser.url(url);
    }

    click(locator) {
        try {
            $(locator).waitForDisplayed({timeout:50000, reverse:false, timeoutMsg:'Element' + locator + 'not found'});
            return $(locator).click();
        } catch(e) {
            throw new Error('unexpected error while click operation' + e);

        }
    }

    pause(seconds) {
        return browser.pause(seconds * 1000);
    }

    setValue(locator, value) {
        $(locator).waitForDisplayed({timeout:50000, reverse:false, timeoutMsg:'Element' + locator + 'not found'});
        return $(locator).setValue(value);
    }

    isExisting(locator) {
        browser.pause(3000);
        return $(locator).isExisting();
    }

    getText(locator) {
        $(locator).waitForDisplayed({timeout:50000, reverse:false, timeoutMsg:'Element' + locator + 'not found'});
        return $(locator).getText();
    }

    getUrl() {
        return browser.getUrl();
    }

    isVisible(locator) {
        $(locator).waitForDisplayed({timeout:50000, reverse:false, timeoutMsg:'Element' + locator + 'not found'});
        let value = $(locator).isExisting();
        if(value) {
            return assert.equal(value, true, 'Element present');
        } else {
            return assert.equal(value, true, 'Unable to locate element');
        }

    }
    waitForExist(locator) {
        return $(locator).waitForExist({timeout:50000, reverse:false, timeoutMsg:'Element' + locator + 'not found'});


    }
}
module.exports = new Actions();