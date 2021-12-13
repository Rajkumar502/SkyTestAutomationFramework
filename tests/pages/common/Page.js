let Path = require('path');
const ScreenNavigator = require(Path.resolve('tests/screen/screen.navigator.js'));

class Page {
    constructor() {
        this.screens = {
            web: {}
        };
    };

    getCommonScreens(name) {
        if(!(name in this.screens.web)) {
            this.screens.web[name] = ScreenNavigator.getCommonScreens(name);
        }
        return this.screens.web[name];
    }

}

module.exports = Page;