pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/sidaouimanel/beauty-center'
            }
        }
        stage('Static Code Analysis (SonarQube)') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh 'mvn sonar:sonar'
                }
            }
        }
        stage('OWASP ZAP Scan') {
            steps {
                sh 'docker run -v $(pwd):/zap/wrk/ -t owasp/zap2docker-stable zap-baseline.py -t http://localhost:8080 -r zap_report.html'
            }
        }
    }

    post {
        always {
            echo 'Pipeline terminé !'
        }
    }
}
