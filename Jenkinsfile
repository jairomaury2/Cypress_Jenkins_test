pipeline {
    agent any
    
    stages {
        stage("Clonar repositorio") {
            steps {
                script {
            // Ruta de la carpeta de caché de Cypress
            def cypressCachePath = '/var/lib/jenkins/.cache/Cypress'
            
            // Copiar la carpeta de caché de Cypress al directorio correcto
            stash(name: 'cypress-cache', includes: "${cypressCachePath}/**")
        }
                git 'https://github.com/javilama/TestCypressTS.git'
                sh 'npm install'
                
            }
           
        }
        
        stage("run tests") {
            steps {
                script {
            // Extraer y restaurar la carpeta de caché de Cypress
            unstash('cypress-cache')
          }
                sh 'npx cypress run --spec cypress/e2e/testpage.cy.js'
            }
        }
    }
}