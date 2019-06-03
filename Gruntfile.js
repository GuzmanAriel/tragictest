module.exports = function(grunt){

  grunt.initConfig({
    sass: {
      dist: {
        files:{
          'assets/css/main.css': 'assets/scss/styles.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass']);

};
