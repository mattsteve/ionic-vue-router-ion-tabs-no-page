const path = require('path');
module.exports = {
    publicPath: './',
    outputDir: path.resolve(__dirname, './www'),
    transpileDependencies: [' vuetify ']
};
