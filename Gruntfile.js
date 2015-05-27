module.exports = function (grunt) {
 
  // Add the grunt-mocha-test tasks. 
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-mutation-testing');

  grunt.initConfig({
    // Configure a mochaTest task 
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          //captureFile: 'results.txt', // Optionally capture the reporter output to a file 
          quiet: false, // Optionally suppress output to standard out (defaults to false) 
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false) 
        },
        src: ['./lib/tests/VerifyValuesMochaSpec.js']
      }
    },

    mutationTest: {
      options: {
        testFramework: 'mocha',
        code: ['lib/*.js'],
        specs: 'lib/tests/*.js',
        mutate: 'lib/*.js',
        logLevel: 'LOG',
        reporters: {
          text: {
            dir: './',
            file: 'mathoperators.txt'
          }
        }},
        flagAllMutationsDefault: {
                options: {
                    testFramework: null,
                    test: function(done) {
                        done('SURVIVED');
                    },

                    reporters: {
                        text: {
                            file: 'flag-all-mutations-default.txt'
                        }
                    }
                }
            },
            grunt: {
                options: {
                    ignore: /^log\(/,
                    test: 'grunt mochaTest:fixtures',
                    reporters: {
                        text: {
                            file: 'grunt.txt'
                        }
                    }
                }
            },
        test: {
          options: {
            reporter: 'spec',
            captureFile: 'D:\Minutrends\MutationTest\results.txt', // Optionally capture the reporter output to a file 
            quiet: false, // Optionally suppress output to standard out (defaults to false) 
            clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false) 
          },
          src: ['./lib/tests/VerifyValuesMochaSpec.js']
        }
      }

    });

  grunt.registerTask('default', ['mutationTest']);

};