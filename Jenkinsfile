pipeline {
    agent any

    environment {
        // Define environment variables such as Docker image name and tag
        DOCKER_IMAGE_NAME = 'sometest66/cicd-jenkins'
        DOCKER_IMAGE_TAG = 'latest'
    }

    stages {
        stage('Build') {
            steps {
                // Checkout source code from your version control system
                //git 'https://github.com/your/repo.git'

                // Build Docker image
                script {
                  

                    docker.build("${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}")
                }
            }
        }

        stage('Push') {
            steps {
                // Push Docker image to Docker Hub using credentials stored in Jenkins
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'sometest66-docker-hub') {
                        // Push Docker image to Docker Hub
                        docker.image("${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}").push()
                    }
                }
            }
        }
    }
}
