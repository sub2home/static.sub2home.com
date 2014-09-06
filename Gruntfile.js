module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  var _ = require('lodash');
  var glob = require('glob');

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
            rename: false,
          }, {
            name: 'a-2x',
            width: '140px',
            height: '140px',
            rename: false,
          }, {
            name: 'b',
            width: '140px',
            height: '140px',
            rename: false,
          }, {
            name: 'b-2x',
            width: '140px',
            height: '140px',
            rename: false,
          }],
          //sizes: [{
          //name: 'normal',
          //width: '50%',
          //rename: false,
          //}, {
          //name: 'retina',
          //suffix: "_x2",
          //width: '100%',
          //rename: false,
          //}],
        },
        files: [{
          expand: true,
          src: ['images/**/*.{png,jpg}'],
          cwd: 'content',
          custom_dest: 'dist/{%= path %}/{%= name %}/'
        }]
      },
    },

    shell: {
      dist: {
        command: function() {

          var commandString = _(['b', 'c', 'd', 'e'])
            .map(function(type) {
              return [type, type + '-2x'];
            })
            .flatten()
            .map(function(type) {
              return glob.sync('dist/images/**/' + type + '/**/*');
            })
            .flatten()
            .map(function(file) {
              return 'gm mogrify -quality 100 -format jpg ' + file + ' && rm ' + file;
            })
            .join('&&');

          return commandString;

        },
      }
    }

  });

  grunt.registerTask('default', [
    'clean',
    'copy',
    'responsive_images',
    'shell',
  ]);

};
