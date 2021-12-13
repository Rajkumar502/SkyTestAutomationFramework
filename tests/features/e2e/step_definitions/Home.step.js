const { Given, When, Then } = require('cucumber');
const Actions = require('../../../pages/common/Actions');
const HomePage = require('../../../pages/HomePage');

const homePage = new HomePage();

Given(/^I am on the (.*) page$/, (page) => {
    homePage.openWebsite(page);
    Actions.pause(4);
});

When(/^I try to sign in with (.*) credentials$/, (userType) => {
    homePage.login(userType);
});

Then(/^I should see a box with the text (.*)$/, (expectedMsg) => {
    homePage.verifyMsg(expectedMsg);
});

When(/^I search (.*) in the search bar$/, (search) => {
    homePage.searchResults(search);
});

Then(/^I should see an editorial section$/, (data) => {
    homePage.verifySearchResults(data);
});
