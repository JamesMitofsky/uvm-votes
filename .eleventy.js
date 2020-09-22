module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");


    eleventyConfig.addPassthroughCopy({
        "node_modules/sal.js/dist/sal.js": "assets/scripts/sal.js",
        "node_modules/sal.js/dist/sal.css": "assets/styles/sal.css",
        "assets/tld-links/General-Election-NSLVE-Data.pdf": "General-Election.pdf",
        "assets/tld-links/Midterm-Election-NSLVE-Data.pdf": "Midterm-Election.pdf"
    });

    return {

        dir: {
            // ⚠️ These values are both relative to your input directory.
            includes: "assets",
            layouts: "_layouts"
        }

    }
};