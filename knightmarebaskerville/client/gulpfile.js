/**
 * Created by aspen on 6/13/16.
 */

var gulp            =   require('gulp'),
    autoprefix      =   require('gulp-autoprefixer'),
    changed         =   require('gulp-changed'),
    concat          =   require('gulp-concat'),
    imagemin        =   require('gulp-imagemin'),
    jshint          =   require('gulp-jshint'),
    minifyCSS       =   require('gulp-minify-css'),
    minifyHTML      =   require('gulp-minify-html'),
    stripDebug      =   require('gulp-strip-debug'),
    uglify          =   require('gulp-uglify'),
    strip           =   require('gulp-strip-comments'),
    sass            =   require('gulp-sass'),
    rename          =   require('gulp-rename');

// ----------------------------------- STATIC FILES -----------------------------------
// =============== DEPENDENCIES ================
gulp.task('jsdependencies', function(){
    // JS - No dir
    var dependencies = [
        { moduleName: "angular", src: "node_modules/angular/**/*.min.js" },
        { moduleName: "angular", src: "node_modules/angular-route/**/*.min.js" }
    ];
    var dependenciesDest = '../build/static/scripts/';

    for ( var module = 0; module < dependencies.length; module++ ) {
        gulp.src( dependencies[module].src )
            .pipe( rename( { dirname: dependencies[module].moduleName } ) )
            .pipe( gulp.dest( dependenciesDest ) );
    }

    // JS - With dir
    var dependenciesDir = [
        { moduleName: "jquery", src: "node_modules/jquery/*" },
        { moduleName: "jquery", src: "node_modules/jquery/**/*" }
    ];
    var dependenciesDirDest = '../build/static/scripts/';

    for ( var module = 0; module < dependenciesDir.length; module++ ) {
        gulp.src( dependenciesDir[module].src )
            .pipe( gulp.dest( dependenciesDirDest +  dependenciesDir[module].moduleName ) );
    }
});

gulp.task('cssdependencies', function(){
    // CSS
    var dependencies = [
        { moduleName: "", src: "node_modules/animate.css/**/*.min.css" }
    ];
    var dependenciesDest = '../build/static/styles/';

    for ( var module = 0; module < dependencies.length; module++ ) {
        gulp.src( dependencies[module].src )
            .pipe( rename( { dirname: dependencies[module].moduleName } ) )
            .pipe( gulp.dest( dependenciesDest ) );
    }

    var fontAwesomeSrc = [
        "assets/font-awesome/**"
    ];
    var fontAwesomeDst = '../build/static/styles/font-awesome';

    gulp.src( fontAwesomeSrc )
        .pipe( gulp.dest( fontAwesomeDst ) );
});

// ================ CSS TASKS ================
gulp.task('sass', function () {
    var sassSrc = 'styles/main.scss';
    var sassDest = '../build/static/styles/';

    gulp.src(sassSrc)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(sassDest));

    //TODO: Add these lines after sass() to concatonate and minifyCSS
    /*
    .pipe(concat('main.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
     */
});

// ================ IMAGE TASKS ================
gulp.task('imagemin', function() {
    var imageSrcs = [
        'assets/images/icons/**/**',
        'assets/images/background/**/**'
    ];
    var imgDst = '../build/static/assets/images';

    gulp.src(imageSrcs)
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
});

// ================ FONTS TASKS ================
gulp.task('fonts', function() {
    var fontSrcs = [
        'assets/fonts/**/*.otf',
        'assets/fonts/**/*.ttf'
    ];
    var fontDst = '../build/static/assets/fonts';

    gulp.src(fontSrcs)
        .pipe(gulp.dest(fontDst));
});

// ----------------------------------- SCRIPT FILES -----------------------------------
// =============== SCRIPT TASKS ===============
gulp.task('scripts', function() {
    var jsSources = [
        'scripts/**/*.js'
    ];
    var jsDest = '../build/static';

    gulp.src(jsSources)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(jsDest));

    // TODO: .pipe(uglify()) NOTE: To do this right before production (place after stripDebug)
    // TODO: Add .pipe(stripDebug()) AND .pipe(strip()) once done
});

// ----------------------------------- INDEX -----------------------------------
// ================ HTML TASKS ================
gulp.task('index', function() {
    var htmlSrc = 'index.html';
    var htmlDst = '../build';

    gulp.src(htmlSrc)
        .pipe(rename({dirname: ''}))
        .pipe(changed(htmlDst))
        .pipe(gulp.dest(htmlDst));

    // TODO: .pipe(minifyHTML()) NOTE: To do this right before production (place after changed)

});

gulp.task('templates', function() {
    var htmlAppSrcs = [
        'scripts/app/**/*.html',
        'scripts/common/**/*.html'
    ];
    var htmlAppDst = '../build/static/templates';

    gulp.src(htmlAppSrcs)
        .pipe(rename({dirname: ''}))
        .pipe(changed(htmlAppDst))
        .pipe(gulp.dest(htmlAppDst));

    // TODO: .pipe(minifyHTML()) NOTE: To do this right before production (place after changed)
});

// ----------------------------------- ETC FILES -----------------------------------
// ================ JSHINT TASKS ================
gulp.task('jshint', function() {
    gulp.src('scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// ++++++++++++++++++++ DEFAULT ++++++++++++++++++++
gulp.task('default', ['jsdependencies', 'cssdependencies', 'sass', 'imagemin', 'fonts','scripts', 'index', 'templates', 'jshint'], function() {});