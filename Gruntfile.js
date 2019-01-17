module.exports = function(grunt) {
  
	grunt.initConfig({
	  jekyll: {                             // Task
	    options: {                          // Universal options
	      bundleExec: true,
	      src : '.'
	    },
	    dist: {                             // Target
	      options: {                        // Target options
	        dest: './_site',
	        config: '_config.yml'
	      }
	    },
	    serve: {                            // Another target
	      options: {
	        serve: true,
	        dest: './_site',
	        drafts: true,
	        future: true,
	        livereload: true
	      }
	    }
	  }
	});
 
grunt.loadNpmTasks('grunt-jekyll');
grunt.loadNpmTasks('grunt-contrib-sass');
 
grunt.registerTask('default', ['jekyll', 'sass']);

};