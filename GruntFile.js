module.exports = function(grunt)
{
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          src: ['images/**/*.{png,jpg,gif}'],
          dest: 'dist'
        }]
      },
    },
    jade: {
      debug: {
        options: {
          data: {
            debug: true,
            timestamp: "<%= grunt.template.today() %>"
          }
        },
        files: {
          "dist/index.html": "index.jade"
        },
      },
    },
    sass: {
      public: {
        files: [{
          expand: true,
          src: ['css/**/*.scss', 'css/**/*.sass'],
          dest: 'dist',
          ext: '.css'
        }],
      },
    },
    jshint: {
      all: ['js/**/*.js']
    },
    concat: {
      options: {
        separator: ';',
      },
      js: {
        src: ['js/**/*.js'],
        dest: 'dist/js/winner.js',
      },
      css: {
        src: ['dist/css/**/*.css'],
        dest: 'dist/css/style.css',
      },
    },
    uglify: {
      options: {
        mangle: {
          except: ['jQuery']
        }
      },
      my_target: {
        files: {
          'dist/js/winner.js': ['js/**/*.js']
        }
      },
    },
    watch: {
      options: {
        livereload: true,
      },
      jade: {
        files: ['index.jade'],
        tasks: ['jade'],
      },
      js: {
        files: ['js/**/*.js'],
        tasks: ['jshint', 'concat:js'],
      },
      sass: {
        files: ['css/**/*.scss', 'css/**/*.sass'],
        tasks: ['sass'],
      },
      css: {
        files: ['dist/css/**/*.css'],
        tasks: ['concat:css'],
      },
      files:['dist/**','server/**'],
      tasks:[],
    },

    express:{
        all:{
            options:{
                server:'server.js',
                hostname:'localhost',
                bases:['./dist'],
                livereload:true
            }
        },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-middleware');
  grunt.loadNpmTasks('grunt-open');
  grunt.registerTask('default', ['imagemin', 'jade', 'sass', 'jshint', 'concat', 'uglify']);
  grunt.registerTask('server',['default', 'express', 'watch']);
}
