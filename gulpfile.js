

// importing of required files
const { src, dest, series, watch } = require('gulp');
// importing of gulp-runtime for sass and importing sass
const sass = require('gulp-sass')(require('sass'));


// the first task runner
function buildStyles(){
    // return the base or the main scssfile
    return src('xscss/**/*.scss')
    // compile the scss through the sass function
    .pipe(sass())
    // send the compiled version to the css folder
    .pipe(dest('css'))
}

// automated taskrunner
function taskrunner() {
        // watch all the scss files for changes
        watch(['xscss/**/*.scss'], buildStyles)
}



exports.default = series(buildStyles, taskrunner);