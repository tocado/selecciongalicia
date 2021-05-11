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
        sh 'docker run --name selecciongalicia -p 80:80 -d tkd157/selecciongalicia'
      }
    }
    stage('Pruebo el run con curl') {
      steps {
        sh '''
          sleep 5;curl $(docker inspect -f "{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}" selecciongalicia):80
        '''    
      }
    }
    stage('publico en dockerhub') {
      steps {
        withDockerRegistry([ credentialsId: "dockerhub", url: "" ]) {
          sh 'docker push tkd157/selecciongalicia:latest'
          sh 'docker push tkd157/selecciongalicia:$BUILD_NUMBER' 
        }
      }
    }
    stage ('Deploy en k8s local') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'sshAllServersRoot', usernameVariable: 'USUARIO', passwordVariable: 'CONTRASENIA')]) {
          sh '''
           sshpass -p ${CONTRASENIA} ssh -o StrictHostKeyChecking=no ${USUARIO}@172.26.241.58 'kubectl rollout restart deploy selecciongaliciadeploy'
          '''
        }
      }
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

