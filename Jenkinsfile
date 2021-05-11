pipeline {
  agent any
  stages {
    stage('BuildImage') {
      steps {
        sh 'docker build -t selecciongalicia:latest .' 
        sh 'docker tag selecciongalicia tkd157/selecciongalicia:latest'
        sh 'docker tag selecciongalicia tkd157/selecciongalicia:$BUILD_NUMBER'
      }
    }
    stage('Run') {
      steps {
        sh 'docker run --name selecciongalicia -p 3000:3000 -d tkd157/selecciongalicia'
      }
    }
    stage('Test') {
      steps {
        sh '''
          sleep 5;curl $(docker inspect -f "{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}" selecciongalicia):3000
        '''    
      }
    }
    stage('Publish DockerHub') {
      steps {
        withDockerRegistry([ credentialsId: "dockerhub", url: "" ]) {
          sh 'docker push tkd157/selecciongalicia:latest'
          sh 'docker push tkd157/selecciongalicia:$BUILD_NUMBER' 
        }
      }
    }
    stage ('Deploy k8s') {
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

