module.exports = function (grunt) {

	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		less: {
			style: {
				files: {
					"css/style.css": ["less/style.less"]
			}
		}
	},
		autoprefixer: {
			options: {
				browsers: ["last 2 version", "ie 10"]
			},
			style: {
				src="css/style.css"
			}
		},
		cmq: {
			style: {
				files: {
					"css/style.css": ["css/style.css"]
				}
			}
		},
		cssmin: {
			style: {
				options: {
					keepSpecialComments: 0,
					report: "qzip"
				},
				files: {
					"css/style.css": ["css/style.css"]	
				}
			}
		}
	});

	grunt.registerTask("build", [
		"less",
		"autoprefixer",
		"cmq",
		"cssmin"
		]);
};