module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: {
          'lib/begin.js': 'src/begin.es6.js'
        }
      }
    }
  });
  grunt.registerTask('default', ['babel']);
};