/* global require, module */

var compileSass = require('broccoli-sass');
var mergeTrees  = require('broccoli-merge-trees');

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

var sassSources = [
  'app/styles'
];

var appCss = compileSass(sassSources, 'app.scss', 'assets/frontend.css');

var appAndCustomDependencies = mergeTrees([app.toTree(), appCss], {
  overwrite: true
});

module.exports = appAndCustomDependencies;
