var HtmlReporter = require('nightwatch-html-reporter');
/* Same options as when using the built in nightwatch reporter option */
var reporter = new HtmlReporter({
  openBrowser: false,
   themeName: 'cover',
  reportsDirectory: __dirname + '/reports/'
});

module.exports = {
  write : function(results, options, done) {
    reporter.fn(results, done);
  }
};
