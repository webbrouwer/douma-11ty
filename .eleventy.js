const htmlmin = require("html-minifier");

// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

// Add navigation plugin
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  // Add filters
  eleventyConfig.addFilter('dateFilter', dateFilter);
  eleventyConfig.addFilter('w3DateFilter', w3DateFilter);

  eleventyConfig.addWatchTarget("./_tmp/style.css");

  // Add navigation plugin
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Form handling
  eleventyConfig.addPassthroughCopy('./src/form-handling.php');

  // Set directories to pass through to the dist folder
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });
  eleventyConfig.addPassthroughCopy('./src/js/*');
  eleventyConfig.addPassthroughCopy('./src/images/');

  // Swiper slider & photoSwipe gallery
  eleventyConfig.addPassthroughCopy({
    "node_modules/swiper/swiper-bundle.min.css": "assets/swiper.min.css",
    "node_modules/swiper/swiper-bundle.min.js": "assets/swiper.min.js",
    "node_modules/photoswipe/dist/photoswipe.css": "assets/photoswipe.css",
    "node_modules/photoswipe/dist/default-skin/default-skin.css": "assets/default-skin/default-skin.css",
    "node_modules/photoswipe/dist/photoswipe.min.js": "assets/photoswipe.min.js",
    "node_modules/photoswipe/dist/photoswipe-ui-default.min.js": "assets/photoswipe-ui-default.min.js"
  });

  // Add shortcode for versions
  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });

  // Returns work items, sorted by display order
  eleventyConfig.addCollection('diensten', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/diensten/*.md'));
  });

  // Returns usps, sorted by display order
  eleventyConfig.addCollection('usps', collection => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/usps/*.md'));
  });

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  eleventyConfig.setUseGitIgnore(false);

  // Returns minified HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  // Set template engine and make 11ty watch dist
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
