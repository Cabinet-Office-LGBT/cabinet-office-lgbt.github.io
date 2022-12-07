const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const Nunjucks = require('nunjucks');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/img");
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.setBrowserSyncConfig({
      files: './_site/css/**/*.css'
    });

    let nunjucksEnvironment = new Nunjucks.Environment(
      new Nunjucks.FileSystemLoader([
        'node_modules/govuk-frontend/',
      ])
    );
    eleventyConfig.setLibrary('njk', nunjucksEnvironment);
  
    return {
      dir: {
        data: "_data",
        includes: "_includes",
        layouts: "_layouts",
      },
    };
  };
  