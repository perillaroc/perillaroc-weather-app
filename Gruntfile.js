module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy:{
            main:{
                files:[
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist/',
                        src: [
                            'css/bootstrap.min.css',
                            'css/bootstrap-theme.min.css',
                            'fonts/**',
                            'js/bootstrap.min.js'
                        ],
                        dest:'public/'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/jquery/dist/',
                        src: ['jquery.min.js'],
                        dest:'public/js'
                    }
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['copy']);
};
