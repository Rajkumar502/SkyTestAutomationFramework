class homeScreen {
    constructor() {
        this.sign_in_lnk = '//a[@class="tab-focus sign-in-link"]';
        this.sign_in_lbl = '//div[contains(text(),"Please enter your email or username")]';
        this.userName_txt = '//input[@id="username"]';
        this.continue_btn = '//span[contains(text(),"Continue")]';
        this.sign_in_iFrame = '//*[@title="iFrame containing Sky Sign-In application"]';
        this.create_password_msg = '//h1[contains(@class,"CardTitle")]';
        this.search_input_txt = '//*/div[contains(@class,"search-input-wrapper")]/input';
        this.search_result_value = '(//div[@id="search-results-container"]/div/div/a)';

    }
}
module.exports = homeScreen;