module.exports = function(grunt){

grunt.loadNpmTasks('grunt-war');
  // �v���W�F�N�g�ݒ�
  grunt.initConfig({
    pkg:grunt.file.readJSON("package.json"),
    war: {
      target: {
      
  options: {
          war_dist_folder: './temp', // war�t�@�C��������t�H���_
          war_name: 'hello' // war�t�@�C����
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
