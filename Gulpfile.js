var gulp = require('gulp'),
    shell = require('gulp-shell'),
    livereload = require('gulp-livereload');

gulp.task('jekyll', shell.task([
  'jekyll serve --baseurl'
]));

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('_site/*.*', function() {
    livereload.reload();
  });
});
 
gulp.task('default', ['jekyll', 'watch']);
