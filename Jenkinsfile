pipeline {
    agent any
    
    stages {
        stage('Instalar Cypress') {
            steps {
                sh 'npm install cypress'
            }
        }
        stage("install node") {
            steps {
        
                //git 'https://github.com/javilama/TestCypressTS.git'
                sh 'npm install'
        
                //git 'https://github.com/javilama/TestCypressTS.git'
               sh 'npm install cypress'
                
           
                
            }
            
           
        }
        stage('Configurar Cypress') {
            steps {
                // Almacenar en caché la carpeta de Cypress
                stash(name: 'cypress-cache', includes: '/var/lib/jenkins/.cache/Cypress/**')
            }
        }
        stage("run tests") {
            steps {
          
                sh 'npx cypress run --spec cypress/e2e/testpage.cy.js'
            }
        }
    }
}