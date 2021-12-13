module.exports = {
    getUrls: function(env) {
        if(env === 'PROD') {
            return {
                HOME: 'https://www.sky.com/',
                DEALS: 'https://www.sky.com/deals'
            };
        }
    }
};