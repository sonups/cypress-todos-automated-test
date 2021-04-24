<!-- PROJECT LOGO -->
<br />
<p align="center">
   <a href="https://github.com/sonups/cypress-todos-automated-test">
   <img src="https://hackernoon.com/hn-images/1*IrV85j4bpBjZocD5jVnCHQ.jpeg" alt="Logo" width="300" height="150">
      <img src="https://adamtheautomator.com/wp-content/uploads/2019/12/jenkins-powershell.png" alt="Logo" width="150" height="150">
   </a>
   </p>
<h3 align="center">Cypress Todos Test Automation with Docker & Jenkins</h3>
<p align="center">
   Cypress test automation using docker and Jenkins. Run all your UI End to end tests silently 
</p>

**Table of contents**

[TOCM]

[TOC]
### Built With

Npm, nodejs & docker required for running the tests. Thse tools needs to be installed in host machine prior to building the project
* [Docker](https://www.docker.com/)
* [Npm](https://www.npmjs.com/)
* [NodeJs](https://nodejs.org/en/)

#Different ways of Building & Executing project
<!-- SETTING PROJECT LOCALLY -->
##1. Local build and execution

1. Clone the repo & Install npm dependencies
   ```sh
   git clone https://github.com/sonups/cypress-todos-automated-test
   cd cypress-todos-automated-test
   npm install
   ```
2. There are many npm scripts available to executed from commandline

###Lint check:-
   ```sh
npm run lint
   ```
 ###Various Test configurations:-
 
   | Command  | Description | 
| ------------- | ------------- |
| npm run cy-open  | Open cypress workbook  |
| npm run cy-run-headless  | Run tests in headless mode  |
| npm run cy-run-chrome  | Run tests in Chrome  |
| npm run cy-run-firefox  | Run tests in Firefox  |
|  npm run cucumber-run-specific-test -- -e TAGS=@ui-tests  | Run All UI Tests   |
| npm run cucumber-run-specific-test -- -e TAGS=@rest-tests| Run All REST service test |
| npm run cucumber-run-specific-test -- -e TAGS=@ui-rest-integrated-test | Run UI test driver from REST API  |

 ###Structure of BDD feature files
    
    ├── cypress                    
    │         └── integration          
    │                   └──examples                  #  Spec file used for test script development
    │                   └── features                # BDD features folder
     |                            └──── todos-ui-tests.feature       # Todos UI tests
     |                            └──── jsonplaceholder-rest-api-tests.feature # REST API tests
     |                            └──── todos-jsonplaceholder-integrated-tests.feature # Todos and REST api integrated test




  ###Report Generation:-

a) allure
b) mocha-awesome


   | Command  | Description | Remarks| 
| ------------- | ------------- | |
| **npm run test-run-allure-report** | Generate Allure report  | Report opens automatically in a browser [ html generated in **/allure-report** ]
| **npm run test-mochawesomereport** | Generate mochaawesome report  | html generated in **/mochawesome-report **




   
<!-- EXECUTING TEST FROM DOCKERIZED TESTS -->
## 2. Dockerized build and execution

1. Clone the repo & run docker build
   ```
   git clone https://github.com/sonups/cypress-todos-automated-test
   cd cypress-todos-automated-test
   docker build -t sps89/cypress-todos-automated-tests .
   ```
2. (Optional) Ensure the existing running containers are killed and removed  - **(ignore errors)**
   ```
	docker kill cypress-todos-automated-tests
	docker rm cypress-todos-automated-tests
   ```
3. Execute All tests
   ```
	docker run --interactive --name cypress-todos-automated-tests sps89/cypress-todo-automated-tests
   ```

<!-- Execution from Jenkins hosted from docker container -->
## 3. Execution from Jenkins hosted from docker container

1. Clone the repo & run docker build (for building jenkins images)
   ```
   git clone https://github.com/sonups/cypress-todos-automated-test
   cd cypress-todos-automated-test
   cd jenkins
   docker build -t sps89/jenkins-gelato .
      ```
2. (Optional) Ensure the existing running containers are killed and removed  - **(ignore errors)**
      ```
   docker kill jenkins-gelato
   docker rm jenkins-gelato 
         ```
3. Start Jenkins service using docker
      ```
   docker run -d --shm-size=2048m --name jenkins-gelato -v /var/run/docker.sock:/var/run/docker.sock -p 8089:8080 -p 50000:50000 sps89/jenkins-gelato
   ```

2. Open the Jenkins dashboard using link http://localhost:8089   (**may be have to wait for 1-2 minutes for the docker container to spin up )**

<p align="center">
   <img src="https://raw.githubusercontent.com/sonups/cypress-todos-automated-test/master/pictures/jenkins.png" alt="Logo" width="600" height="200">
   </p>
   

There are 2 jobs to be executed here:

<span style="color:blue">To build docker tests run the job</span>.
<span style="color:red">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dockerize-cypress-test-automation</span>.

<span style="color:blue">To build docker tests run the job</span>.
<span style="color:red">&nbsp;&nbsp;&nbsp;&nbsp;run-cypress-todos-automated-tests</span>.

<p align="center">
   <img src="https://raw.githubusercontent.com/sonups/cypress-todos-automated-test/master/pictures/jenkins-console-output.png" alt="Logo" width="600" height="200">
   </p>

<!-- EXECUTING THE TESTS IN AZURE CLOUD -->
## 4. Executing the tests in Azure Cloud


<!-- CONTACT -->
# Contact

Sonu Sadasivan - sonu.sadasivan@gmail.com
LinkedIn - https://www.linkedin.com/in/sonups/

Project Link: [https://github.com/sonups/cypress-test-docker](https://github.com/sonups/cypress-test-docker)

