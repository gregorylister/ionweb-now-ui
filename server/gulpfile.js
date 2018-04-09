var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("copybuild", function()
{
    return gulp.src([".././client/build/**/*"])
        .pipe(gulp.dest("dist/public"));
});

gulp.task("copypublic", function()
{
    return gulp.src(["src/public/**/*"])
        .pipe(gulp.dest("dist"));
});

gulp.task("copypackage", function()
{
    return gulp.src(["package.json"])
        .pipe(gulp.dest("dist"));
});

gulp.task("tscompile", function()
{
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write(".", { includeContent: false, sourceRoot: "./" }))
        .pipe(gulp.dest("dist"));
});

gulp.task("watch", function()
{
    return gulp.watch(["./src/**/*"], gulp.series("build"));
});

gulp.task("build", gulp.parallel("tscompile"));

gulp.task("setdev", function()
{
    process.env["NODE_ENV"] = "development";
    return Promise.resolve();
});

gulp.task("setprod", function()
{
    process.env["NODE_ENV"] = "production";
    return Promise.resolve();
});

gulp.task("dev", gulp.series("setdev", "build", "watch"));

gulp.task("prod", gulp.series("setprod", "build", "copybuild", "copypublic", "copypackage"));
