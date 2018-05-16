/* Gruntfile for prettytype

 */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {

                files: [
                    // 'src/modboot/logmoduleloads.js',
                   
                ],

                tasks: ['concat', 'uglify'],

                options: {

                    spawn:false,
                    event:['all']
                }
            }
        },


        clean: [ "build/**/*", "dist/**/*"],


        concat : {
            options : {
                separator: ';',
                sourceMap :true
            },
            dist : {
                src  : [
                    'src/modboot/logmoduleloads.js',
                ],
                dest : 'build/prettytype.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - */\n',
                sourceMap : true,
                sourceMapIncludeSources : true,
                sourceMapIn: 'build/prettytype.js.map'
            },
            build: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/prettytype.min.js'
            }
        },

        karma: {
            angularjs: {
                configFile: 'test/test-browser-karma-angularjs/karma-angularjs.conf.js',
                singleRun: true
            },
    
            requirejs: {
                configFile: 'test/test-browser-karma-requirejs/karma-requirejs.conf.js',
                // configFile: 'karma-requirejs.conf.js',
                singleRun: true
            },
    
            nomod: {
                configFile: 'test/test-browser-karma-nomod/karma-nomod.conf.js',
                singleRun: true
            },
    
            justbrowser: {
                configFile: 'test/test-browser-karma-justbrowser/karma-justbrowser.conf.js',
                singleRun: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', [ 'concat', 'uglify']);

};
