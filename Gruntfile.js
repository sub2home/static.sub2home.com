module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    clean: {
      dist: ['dist'],
    },

    responsive_images: {
      dist: {
        options: {
          sizes: [{
            name: 'normal',
            width: '50%',
            rename: false,
          }, {
            name: 'retina',
            suffix: "_x2",
            width: '100%',
          }],
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
    'responsive_images',
  ]);

};