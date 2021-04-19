const pluginDate = require("eleventy-plugin-date");

module.exports = function (eleventyConfig) {

    // add text filter plugin from npm
    eleventyConfig.addPlugin(pluginDate);

    // pass through netlify CMS management
    eleventyConfig.addPassthroughCopy("admin");

    // pass through links to make available at tld
    eleventyConfig.addPassthroughCopy({ "assets/tld-links": "." })


    return {

        dir: {
            // ⚠️ These values are both relative to your input directory.
            includes: "assets",
            layouts: "_layouts"
        }

    }
};