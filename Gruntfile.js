module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  var _ = require('lodash');
  var glob = require('glob');
  var exec = require('execSync').run;

  grunt.initConfig({

    clean: {
      dist: ['dist'],
    },

    copy: {
      dist: {
        expand: true,
        cwd: 'content/',
        src: '**',
        dest: 'dist/',
      }
    },

    responsive_images: {
      dist: {
        options: {
          sizes: [{
            name: 'a',
            width: '70px',
            height: '70px',
            quality: 100,
            rename: false,
          }, {
            name: 'a-2x',
            width: '140px',
            height: '140px',
            quality: 100,
            rename: false,
          }, {
            name: 'b',
            width: '140px',
            height: '140px',
            quality: 100,
            rename: false,
          }, {
            name: 'b-2x',
            width: '140px',
            height: '140px',
            quality: 100,
            rename: false,
          }, {
            name: 'c',
            width: '200px',
            height: '200px',
            quality: 100,
            rename: false,
          }, {
            name: 'c-2x',
            width: '400px',
            height: '400px',
            quality: 100,
            rename: false,
          }, {
            name: 'd',
            width: '500px',
            height: '500px',
            quality: 100,
            rename: false,
          }, {
            name: 'd-2x',
            width: '1000px',
            height: '1000px',
            quality: 100,
            rename: false,
          }, {
            name: 'e',
            width: '300px',
            height: '300px',
            quality: 100,
            rename: false,
          }, {
            name: 'e-2x',
            width: '600px',
            height: '600px',
            quality: 100,
            rename: false,
          }, {
            name: 'f',
            width: '300px',
            height: '300px',
            quality: 100,
            rename: false,
          }, {
            name: 'f-2x',
            width: '600px',
            height: '600px',
            quality: 100,
            rename: false,
          }, {
            name: 'g',
            height: '160px',
            quality: 100,
            rename: false,
          }, {
            name: 'g-2x',
            height: '320px',
            quality: 100,
            rename: false,
          }]
        },
        files: [{
          expand: true,
          src: ['images/**/*.{png,jpg}'],
          cwd: 'content',
          custom_dest: 'dist/{%= path %}/{%= name %}/'
        }]
      },
    },

  });

  grunt.registerTask('pngToJpg', function() {

    var files = _(['b', 'c', 'd', 'e'])
      .map(function(type) {
        return [type, type + '-2x'];
      })
      .flatten()
      .map(function(type) {
        return glob.sync('dist/images/**/' + type + '/**/*');
      })
      .flatten()
      .value();

    files.forEach(function(file) {
      exec('gm convert -quality 100 -background white -flatten ' + file + ' ' + file.replace('png', 'jpg') + ' && rm ' + file);
    });

  });

  grunt.registerTask('default', [
    'clean',
    'copy',
    'responsive_images',
    'pngToJpg',
  ]);

};
