const { dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles(){
    return src('index.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function taskrunner() {

        watch(['index.scss'], buildStyles())
}



exports.default = series(buildStyles, taskrunner);