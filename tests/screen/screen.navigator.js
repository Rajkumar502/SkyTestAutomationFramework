const fs = require('fs');
const path = require('path');

class ScreenNavigator {
    static getCommonScreens(name) {

        return ScreenNavigator.createScreen([
            `./common/${name}.js`
        ]);
    }

    
    static createScreen(trialPaths) {
        for (const trialPath of trialPaths) {
            if (fs.existsSync(path.join(__dirname, trialPath))) {
                const Screen = require(trialPath);
                return new Screen();
            }
        }
        throw new Error(`Screen ${trialPaths.join(' or ')} not found!`);
    }
}

module.exports = ScreenNavigator;