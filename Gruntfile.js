module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		responsive_images: {
			options: {
				// Task-specific options go here.
			},
			all: {
				// Target-specific file lists and/or options go here.
			},
		},
	});

	grunt.loadNpmTasks('grunt-responsive-images');

	grunt.registerTask('default', ['responsive_images:all']);

};