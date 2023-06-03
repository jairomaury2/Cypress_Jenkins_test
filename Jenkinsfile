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
        
        stage("run tests") {
            steps {
          
                sh 'npx cypress run --spec cypress/e2e/testpage.cy.js'
            }
        }
    }
}