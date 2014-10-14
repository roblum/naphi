module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            dist: {
                files: {
                    'script/script.min.js': ['script/chapter-info.js', 'script/gallery-images.js', 'script/gmaps-styles.js', 'script/contact.js', 'script/main.js']
                }
                ,options: {
                    banner: '/* Epsilon Naphi - <%= grunt.template.today() %> */'
                }
            },
        },
        watch: {
            js : {
                files: ['script/*.js']
                ,tasks: ['uglify', 'ftp-deploy']
            }
        }
        ,ftp: grunt.file.readJSON('ftp.json')
        ,'ftp-deploy': {
               build: {
                    auth: {
                    host: '<%= ftp.host %>',
                    port: 21,
                    authPath : 'ftp.ftppass',
                    authKey: 'key'
               },
                    src: 'script/',
                    dest: '/staging/script/',
                    exclusions: ['path/to/source/folder/**/.DS_Store', 'path/to/source/folder/**/Thumbs.db', 'path/to/dist/tmp']
                 }
          }
     // ,jshint: {
     //        options: {
     //            laxcomma: true,
     //            curly: true,
     //            latedef: true,
     //            noempty: true,
     //            nonbsp: true,
     //            quotmark: true,
     //            undef: true,
     //            unused: true,
     //            boss: true,
     //            eqnull: true,
     //            sub: true,
     //            devel: true,
     //            globals: {
     //                jQuery: true,
     //                $: true,
     //                FB: true,
     //                document: true,
     //                window: true
     //            },
     //            ignores: ['Gruntfile.js', '*.min.js']
     //        },
     //        uses_defaults: ['*.js']
     //    },
     //    csslint: {
     //        strict: {
     //            options: {
     //                'important': false,
     //                'empty-rules': 2,
     //                'zero-units': false,
     //                'universal-selector': false,
     //                'ids': false,
     //                'unique-headings': false,
     //                'overqualified-elements': false,
     //                'gradients': 2,
     //                'compatible-vendor-prefixes': false,
     //                'box-model': false
     //            },
     //            src: ['*.css'],
     //            'exclude-list': ['*.min.css']
     //        }
     //    }


    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ftp-deploy');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-jshint');

    // grunt.registerTask('default', ['uglify']);
    grunt.registerTask('default', ['watch']);


};

