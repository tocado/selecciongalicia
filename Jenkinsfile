pipeline {
  agent any
  stages {
    stage('arrancanding ... XD') {
      steps {
        sh 'docker build -t selecciongalicia:latest .' 
        sh 'docker tag selecciongalicia tkd157/selecciongalicia:latest'
        sh 'docker tag selecciongalicia tkd157/selecciongalicia:$BUILD_NUMBER'
      }
    }

  }
  post {
    always {
      sh 'docker rm -f selecciongalicia'
      sh 'docker build -t selecciongalicia:latest .' 
      sh 'docker tag selecciongalicia tkd157/selecciongalicia:latest'
      sh 'docker tag selecciongalicia tkd157/selecciongalicia:$BUILD_NUMBER'
    }
  }
}

