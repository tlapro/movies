const { watch } = require("fs");

module.exports = {
    entry: "./scripts/index.js",

    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
    },
    watch: true,
    mode: "development",
};