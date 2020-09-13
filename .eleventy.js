module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.addPassthroughCopy({
        "node_modules/sal.js/dist/sal.js": "assets/scripts/sal.js",
        "node_modules/sal.js/dist/sal.css": "assets/styles/sal.css"
    });

    return {

        dir: {
            // ⚠️ These values are both relative to your input directory.
            includes: "assets",
            layouts: "_layouts"
        }

    }
};