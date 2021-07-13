const pluginDate = require("eleventy-plugin-date");
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');

module.exports = function (eleventyConfig) {

    // add text filter plugin from npm
    eleventyConfig.addPlugin(pluginDate);
    // lazy load images
    eleventyConfig.addPlugin(lazyImagesPlugin);

    // netlify CMS management
    eleventyConfig.addPassthroughCopy("admin");
    // image assets
    eleventyConfig.addPassthroughCopy("assets")
    // top level links access
    eleventyConfig.addPassthroughCopy({ "assets/tld-links": "." })

    // add animation features
    eleventyConfig.addPassthroughCopy({
        "node_modules/sal.js/dist/sal.js": "assets/scripts/sal.js",
        "node_modules/sal.js/dist/sal.css": "assets/styles/sal.css"
    });

    // Filter source file names using a glob
    eleventyConfig.addCollection("Blog", function (collectionApi) {
        return collectionApi.getFilteredByGlob("blog/**");
    });

    return {

        dir: {
            // ⚠️ These values are both relative to your input directory.
            includes: "assets",
            layouts: "_layouts"
        }

    }
};