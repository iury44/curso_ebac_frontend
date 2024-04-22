module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ['src/less'], // Caminho para seus arquivos LESS
        },
        files: {
          'dist/css/style.css': 'src/less/main.less', // Arquivo de saída
        },
      },
    },
    uglify: {
      options: {
        compress: true,
        mangle: true,
        sourceMap: true,
      },
        target: {
          files: {
            'dist/js/script.min.js': ['src/js/*.js'], // Arquivo(s) de entrada
          },
      },
    },
  });

  // Carregar os plugins do Grunt
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Registrar as tarefas
  grunt.registerTask('default', ['less', 'uglify']);
};
