const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function compressedSass(){
  return gulp.src("./src/sass/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle:'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./biuld/css'))
}
function compressedImage(){
  return gulp.src('./src/image/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./biuld/image'))
}
function compressedJs(){
  return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./biuld/scripts'))
}

 exports.default  = ()=>{
  gulp.watch('./src/sass/*.scss',{ignoreInitial:false},gulp.series(compressedSass))
  gulp.watch('./src/scripts/*.js',{ignoreInitial:false},gulp.series(compressedJs))
  gulp.watch('./src/image/*',{ignoreInitial:false},gulp.series(compressedImage))
}
