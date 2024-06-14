pipeline {
    agent any

    environment {
        // Define environment variables such as Docker image name and tag
        DOCKER_IMAGE_NAME = 'your-docker-image'
        DOCKER_IMAGE_TAG = 'latest'
    }

    stages {
        stage('Build') {
            steps {
                // Checkout source code from your version control system
                //git 'https://github.com/your/repo.git'

                // Build Docker image
                script {
                  // Install Docker dependencies
                    // sh 'apt-get update'
                    // sh 'apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common'

                    // Download and execute Docker installation script
                    sh 'curl -fsSL https://get.docker.com -o get-docker.sh'
                    sh 'sh get-docker.sh'

                    // Clean up installation script
                    sh 'rm get-docker.sh'

                    // Start Docker service
                    sh 'service docker start'

                    docker.build("${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}")
                }
            }
        }

        stage('Push') {
            steps {
                // Push Docker image to Docker Hub using credentials stored in Jenkins
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'doh') {
                        // Push Docker image to Docker Hub
                        docker.image("${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}").push()
                    }
                }
            }
        }
    }
}
