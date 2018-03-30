//gulpfile.js

let gulp = require('gulp');
let ts = require('gulp-typescript');
let tsp = ts.createProject('tsconfig.json'); //使用tsconfig.json文件配置tsc
let exec = require('child_process').exec;

let child;
//目录常量
const PATHS = {
  scripts: ['./src/**/*.ts'],
  output: './build',
};
//编译ts文件
gulp.task('build-ts', ['restart'], function () {
  return gulp.src(PATHS.scripts)
    .pipe(tsp())
    .pipe(gulp.dest(PATHS.output));
});
//监视ts文件变化
gulp.task('watch-ts', ['build-ts'], function () {
  gulp.watch(PATHS.scripts, ['build-ts']);
});
//自动重启服务器
gulp.task('restart', function () {
  child = exec('nodemon ./build/index.js', (error, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
});
//开发任务
gulp.task('dev', ['build-ts', 'restart', 'watch-ts']);
// gulp.task('dev', ['build-ts', 'watch-ts']);
