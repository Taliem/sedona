const { watch, series, parallel, src, dest } = require("gulp");
const del = require("del");
const browserSync = require("browser-sync").create();

const sass = require("gulp-sass");
sass.compiler = require("node-sass");

const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const babel = require("gulp-babel");
const posthtml = require("gulp-posthtml");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

function clean() {
    return del(["dist"]);
}

function styles(isProd) {
    const plugins = [
        autoprefixer({browsers: ["> 1%"]}),
        cssnano({
            // по умолчанию комментарии вида /*!  */ не удаляются. 
            preset: ["default", {
                discardComments: {
                    removeAll: true,
                },
            }]
        })
    ];

    // если сборка для продакшена 
    if (isProd === true) {
        return src("src/scss/*.scss")
            .pipe(sass({
                includePaths: ["src/scss/components", "node_modules/normalize-scss/sass/"]
            }).on("error", sass.logError))
            .pipe(postcss(plugins))
            .pipe(dest("dist/css/"))
    }

    // если сборка для разработки то удаляется плагин минимизации css
    // и используется sourcemaps
    plugins.pop();

    return src("src/scss/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ["src/scss/components", "node_modules/normalize-scss/sass/"]
        }).on("error", sass.logError))
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write())
        .pipe(dest("dist/css/"))
        .pipe(browserSync.stream());
}

function html() {
    const plugins = [ 
        require("posthtml-include")({
            root: "src/html/components/"
        }) 
    ];
    return src("src/html/*.html")
        .pipe(posthtml(plugins))
        .pipe(dest("dist/"))
}

function liveReload() {
    browserSync.init({
        server: "./dist",
        port: 8080,
        // browser: "chrome",
        open: false
    });
    watch("src/scss/**/*.scss", { ignoreInitial: false }, styles);
    watch("src/scripts/**/*.js", { ignoreInitial: false }, javascript);
    watch("src/img/**/*", { ignoreInitial: false }, copyImage);
    watch("src/fonts/**/*", { ignoreInitial: false }, copyFonts);
    watch("src/html/**/*.html", { ignoreInitial: false }, html);
    watch("src/html/**/*.html").on("change", browserSync.reload);
}

function javascript() {
    return src("src/js/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ["@babel/env"]
        }))
        .pipe(sourcemaps.write())
        .pipe(dest("dist/js/"))
        .pipe(browserSync.stream());
}

function copyImage() {
    return src("src/img/**/*")
        .pipe(dest("dist/img/"))
        .pipe(browserSync.stream());
}

function copyFonts() {
    return src("dist/fonts/**/*")
        .pipe(dest("dist/fonts/"))
        .pipe(browserSync.stream());
}

function minifyImg() {
    return src("dist/img/**/*")
        .pipe(imagemin())
        .pipe(dest("dist/img/"))
}

function uglifyJs() {
    return src("dist/js/*.js")
        .pipe(uglify())
        .pipe(dest("dist/js/"));
}

exports.dist = series(
    clean, 
    parallel(
        styles.bind(null, true),
        html, 
        javascript, 
        copyImage, 
        copyFonts), 
    parallel(uglifyJs, minifyImg));
exports.default = series(clean, liveReload);