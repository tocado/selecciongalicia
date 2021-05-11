pipeline {
  agent any
  stages {
    stage('Hago el build inicial del codigo y taggeo el build number') {
      steps {
        sh 'docker build -t selecciongalicia:latest .' 
        sh 'docker tag selecciongalicia tkd157/selecciongalicia:latest'
        sh 'docker tag selecciongalicia tkd157/selecciongalicia:$BUILD_NUMBER'
      }
    }
    stage('corro la imagen') {
      steps {
        sh 'docker run --name selecciongalicia -p 800:800 -d tkd157/selecciongalicia'
      }
    }
  }
  post {
    always {
      sh 'docker rm -f selecciongalicia'
      sh 'docker rm -f tkd157/selecciongalicia:latest'
      sh 'docker rm -f tkd157/selecciongalicia:$BUILD_NUMBER'
    }
  }
}

