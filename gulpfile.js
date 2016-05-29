// deploy 'dist' folder to kckst8.github.io github repo, master branch
var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');

var options = { 
    remoteUrl: "https://github.com/kckst8/kckst8.github.io.git",
    branch: "master"};
gulp.task('deploy', function () {
    gulp.src("dist/**/*.*")
        .pipe(deploy(options));
});