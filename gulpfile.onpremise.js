var build = require('@microsoft/sp-build-web');
var webpackConfig = require('./webpack.config');

build.karma.isEnabled = ()=>{ return false;};
build.tslint.mergeConfig({
  displayAsWarning: true
});


build.webpack.replaceConfig({
  config: webpackConfig
});

build.sass.mergeConfig({
  dropCssFiles: true // Drops .css files in the lib directory for webpack
});

build.initialize(require('gulp'));
