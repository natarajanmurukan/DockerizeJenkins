pipeline {
  environment {
    registry = 'natarajanmurukan/nodejstodoapi'
    registryCredential = 'DockerHubCredentials'
    dockerImage = ''
  }
  agent any
  tools {nodejs 'Nodejs10.21' }
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/natarajanmurukan/DockerizeJenkins.git'
      }
    }
    stage('Build') {
       steps {
         sh 'npm install'
         sh 'npm run bowerInstall'
       }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Building Docker Image') {
      steps{
        script {
          dockerImage = docker.build registry + ":1.0.$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image to Hub') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
  }
}
