const {When, Then } = require('cucumber');
const DealsPage = require('../../../pages/DealsPage');


const dealsPage = new DealsPage();

When(/^I navigate to Deals$/, () => {
    dealsPage.clickAndVerifyDealsScreen();
});

Then(/^the user should be on the (.*) page as expected$/, (page) => {
    dealsPage.verifyUrl(page);
});

When(/^I see a list of deals with a price to it$/, (data) => {
    dealsPage.verifyDealsPrice(data);

});