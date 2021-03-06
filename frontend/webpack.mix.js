// webpack.mix.js

let mix = require("laravel-mix");

mix
  .js("src/js/app.js", "js")
  .sass("src/scss/app.scss", "css")
  .setPublicPath("../config/static")
  .options({
    // processCssUrls: false,
    postCss: [require("@tailwindcss/jit")],
  });

// mix
//   .js("src/js/app.js", "js")
//   .sass("src/scss/app.scss", "css")
//   .setPublicPath("../config/static")
//   .options({
//     // processCssUrls: false,
//     postCss: [require("tailwindcss")],
//   })
//   .browserSync({
//     server: "./",
//     files: ["./**/*.html", "./dist"],
//   });
