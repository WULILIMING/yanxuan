var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload,
	scss = require('gulp-sass');

gulp.task('serve',['scss'],function(){
	browserSync.init({
		server:"./"
	});
	gulp.watch("assets/scss/*.scss",['scss']);
	gulp.watch("*.html").on('change',reload);
});

gulp.task('scss',function(){
	return gulp.src("assets/scss/*.scss")
		.pipe(scss({outputStyle:'expanded'}).on('error',scss.logError))
		.pipe(gulp.dest("assets/css"))
		.pipe(reload({stream:true}));
});

gulp.task('default',['serve']);