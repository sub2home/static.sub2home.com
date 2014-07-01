module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    clean: {
      dist: ['dist'],
    },

    copy: {
      dist: {
        expand: true,
        cwd: 'content/',
        src: '{audio,documents}/**',
        dest: 'dist/',
      }
    },

    responsive_images: {
      dist: {
        options: {
          sizes: [{
            name: 'normal',
            width: '100%',
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
          dest: 'dist'
        }]
      },
    },
  });

  grunt.registerTask('default', [
    'clean',
    'copy',
    'responsive_images',
  ]);

};
