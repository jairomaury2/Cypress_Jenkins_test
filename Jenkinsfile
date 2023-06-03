pipeline {
    agent any
    
    stages {
        stage("install node") {
            steps {
                  sh 'npm install'
            }
        }
        stage('Instalar Cypress') {
            steps {
        
                //git 'https://github.com/javilama/TestCypressTS.git'
             
                 sh 'npx cypress install'
            }
            
           
        }
        stage('Configurar Xvfb') {
        steps {
        sh 'Xvfb :99 -screen 0 1280x1024x24 &'
        sh 'export DISPLAY=:99'
    }
}

        stage("run tests") {
            steps {
                 sh 'export DISPLAY=:99 && npx cypress run'
                sh 'npx cypress run --spec cypress/e2e/testpage.cy.js'
            }
        }
    }
}