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
    stage('Pruebo el run con netcat') {
      steps {
        sh '''
          sleep 5;curl localhost:80
        '''      }
    }
  }
  post {
    always {
      sh 'docker rm -f selecciongalicia'
      sh 'docker rmi tkd157/selecciongalicia:latest'
      sh 'docker rmi tkd157/selecciongalicia:$BUILD_NUMBER'
    }
  }
}

