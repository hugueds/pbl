const gulp = require('gulp');
var bs = require('browser-sync').reload();

gulp.task('default', function() {
    console.log("Initiating Browser sync...");
    bs.init({
        proxy: "10.8.66.81:8084",
        open: false
    });

    gulp.watch('./views/*.*').on('change', bs.reload());

});