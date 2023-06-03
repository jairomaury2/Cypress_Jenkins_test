pipeline {
    agent any
    
    stages {
        stage('Instalar Cypress') {
            steps {
                sh 'npm install cypress'
            }
        }
        stage("Clonar repositorio") {
            steps {
        
                //git 'https://github.com/javilama/TestCypressTS.git'
                sh 'npm install'
                
            }
           
        }
        
        stage("run tests") {
            steps {
          
                sh 'npx cypress run --spec cypress/e2e/testpage.cy.js'
            }
        }
    }
}