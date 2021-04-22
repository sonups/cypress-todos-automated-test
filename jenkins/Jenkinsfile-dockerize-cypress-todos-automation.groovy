pipeline {
    agent any
    stages {
        stage('Git Checkout Cypress Todos automation repository') {
            steps {
                sh 'rm -rf *'
                git 'https://github.com/sonups/cypress-todos-automated-test-private.git'
            }
        }

        stage('Dockerize Cypress test automation') {
            steps {
                script {
                    try {
                        sh '''
                    docker build -t sps89/jenkins-gelato .'''
                        } catch (err) {
                        echo err.getMessage()
                    }
                }
            }
        }
    }
}

