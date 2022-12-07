const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
  
    return {
      dir: {
        data: "_data",
        includes: "_includes",
        layouts: "_layouts",
      },
    };
  };
  