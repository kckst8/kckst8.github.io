// deploy 'dist' folder to mwhelan.github.io github repo, master branch
var options = { 
    remoteUrl: "https://github.com/kckst8/kckst8.github.io.git",
    branch: "master"};
gulp.task('deploy', function () {
    gulp.src("dist/**/*.*")
        .pipe(deploy(options));
});