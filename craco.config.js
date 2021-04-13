const purgecss = require("@fullhuman/postcss-purgecss");
const safelist = require("./config/safelist.config");

module.exports = {
  style: {
    postcss: {
      plugins: [
        purgecss({
          content: [
            "./src/**/*.html",
            "./src/**/*.js",
            "./node_modules/react-bootstrap/**/*.js",
          ],
          safelist,
        }),
      ],
    },
  },
};
