pipeline {
  agent any
  stages {
    stage('build') {
      parallel {
        stage('build') {
          steps {
            sh 'echo "build step..."'
          }
        }

        stage('build 2') {
          steps {
            echo 'here'
          }
        }

      }
    }

  }
}