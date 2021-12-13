const Actions = require('./common/Actions');
const path = require('path');
const Page = require(path.resolve('tests/pages/common/Page.js'));
let importUrl = require('../config/url.config');
let config = require('../../wdio.conf');
const fs = require('fs');
const csv = require('fast-csv');
let env = config.config.environment.toUpperCase();
let random, csvHeader, newHeaderobj = {}, returnUserDetail = [];
const assert = require('assert');

class HomePage extends Page {

    get homeScreen() {
        return this.getCommonScreens('home.screen');
    }

    openWebsite(page) {
        try{
            page = page.toUpperCase();
            let url = importUrl.getUrls(env);
            Actions.url(url[page]);
        } catch(e) {
            throw new Error('environment not found');
        }
        Actions.pause(2);
        this.cookiesValidation();
    }

    login(userType) {
        let userDetails = datatable(userType);
        do{
            Actions.pause(3);
        } while(userDetails === undefined || userDetails === null);
        function datatable(userType) {
            returnUserDetail = [];
            let output = [];
            let parser = csv.parse({delmiter: ',', skip_lines_with_empty_values: true, skip_lines_with_error: true})
                .on('readable', function() {
                    let record;
                    while(record=this.read()) {
                        output.push(record);
                    }
                })
                .on('end', function() {
                    random = Math.floor(Math.random() * ((returnUserDetail.length -1)+1));
                    csvHeader = output[0];
                    let criteriaColumn;
                    for(let columCount =0; columCount < csvHeader.length;columCount++) {
                        if(csvHeader[columCount] === 'DataType') {
                            criteriaColumn = columCount;
                        }
                    }
                    Actions.pause(1);

                    for(let i=1; i<output.length;i++) {
                        let lastRow = output[i];
                        if(lastRow[criteriaColumn]===userType) {
                            returnUserDetail.push(lastRow);
                        }
                        else {
                            if(returnUserDetail.length ===0) {
                                if(i===output.length) {
                                    throw new Error('Data with given criteria is not found, for the ' + userType + 'usertype');
                                }

                            }
                        }
                    }
                    for(let i =0;i<csvHeader.length;i++) {
                        newHeaderobj[csvHeader[i]]=(returnUserDetail[random])[i];
                    }
                });
            fs.createReadStream(path.resolve('tests/tesdata/userdata.csv')).pipe(parser);
            do{
                browser.pause(200);
            }while(newHeaderobj === null);
            return newHeaderobj;

        }
        if(Actions.isExisting(this.homeScreen.sign_in_lnk)) {
            Actions.click(this.homeScreen.sign_in_lnk);
        }
        Actions.pause(2);
        this.cookiesValidation();
        browser.switchToFrame($(this.homeScreen.sign_in_iFrame));
        Actions.isVisible(this.homeScreen.sign_in_lbl);
        Actions.setValue(this.homeScreen.userName_txt, userDetails.LoginName);
        Actions.click(this.homeScreen.continue_btn);

    }
    verifyMsg(msg) {
        Actions.pause(4);
        let actualmsg = Actions.getText(this.homeScreen.create_password_msg).toString();
        assert.equal(msg, actualmsg, 'msg is not matching');
    }
    searchResults(search) {
        browser.execute(function() {
            let xs = document.getElementById('masthead-search-toggle');
            xs.click();
        });
        Actions.setValue(this.homeScreen.search_input_txt, search);
        Actions.pause(2);

    }

    verifySearchResults(search) {
        let rows = search.hashes();
        for (let i = 0; i < rows.length; i++) {
            let j = i + 1;
            let searchResults= Actions.getText(this.homeScreen.search_result_value + '[' + j + ']').toString();
            if (searchResults.includes(rows[i].EditorialSection)) {
                assert(true, 'editorial section as expected');
            } else {

                assert(false, 'editorial section is not valid');

            }
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

module.exports = HomePage;