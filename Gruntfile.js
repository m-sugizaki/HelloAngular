module.exports = function(grunt){

grunt.loadNpmTasks('grunt-war');
  // プロジェクト設定
  grunt.initConfig({
    pkg:grunt.file.readJSON("package.json"),
    war: {
      target: {
      
  options: {
          war_dist_folder: './temp', // warファイル生成先フォルダ
          war_name: 'hello' // warファイル名
        },
        files: [
          {
            expand: true,
            cwd: 'dist',
            src: ['**'],
            dest: ''
          }
        ]
      }
    }
  });

grunt.registerTask('default', ['war']);
}
