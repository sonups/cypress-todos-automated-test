<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->


<!-- PROJECT LOGO -->
<br />
<p align="center">
   <a href="https://github.com/sonups/cypress-test-docker">
   <img src="https://hackernoon.com/hn-images/1*IrV85j4bpBjZocD5jVnCHQ.jpeg" alt="Logo" width="300" height="150">
      <img src="https://images.adamtheautomator.com/fetch/w_2000,f_auto,q_auto:420,fl_strip_profile,c_fit/https://adamtheautomator.com/wp-content/uploads/2019/12/jenkins-powershell.png" alt="Logo" width="150" height="150">
   </a>
<h3 align="center">Cypress Todos Test Automation with Docker & Jenkins</h3>
<p align="center">
   Cypress test automation using docker and Jenkins. Run all your UI End to end tests silently 
</p>


### Built With

Npm, nodejs & docker required for running the tests. Thse tools needs to be installed in host machine prior to building the project
* [Docker](https://www.docker.com/)
* [Npm](https://www.npmjs.com/)
* [NodeJs](https://nodejs.org/en/)


<!-- SETTING PROJECT LOCALLY -->
## 1. Setting up project locally

1. Clone the repo & Install npm dependencies
   ```sh
   git clone https://github.com/sonups/cypress-todos-automated-test
   cd cypress-todos-automated-test
   npm install
   ```
2. There are many npm scripts available to executed from commandline

Link check:-
   ```sh
npm run lint
   ```
 Various Test configurations:-
 
   | Command  | Description |
| ------------- | ------------- |
| npm run cy-open  | Open cypress workbook  |
| npm run cy-run-headless  | Run tests in headless mode  |
| npm run cy-run-chrome  | Run tests in headless mode  |
| npm run cy-run-firefox  | Run tests in headless mode  |
| npm run cucumber | Run tests in headless mode  |
| npm run cucumber-run-specific | Run specific tests by @tags  |


For report Generation:-

   | Command  | Description |
| ------------- | ------------- |
| npm run test-mochawesomereport | Open cypress workbook  |
| npm run test-allurereport  | Run tests in headless mode  |
| npm run test-htmlreport  | Run tests in headless mode  |
| npm run report  | Run tests in headless mode  |
| npm run test-run-allure-report | Run tests in headless mode  |


   
<!-- EXECUTING TEST FROM DOCKERIZED TESTS -->
## 2. Executing tests from Dockerized tests

1. Clone the repo & run docker build
   ```sh
   git clone https://github.com/sonups/cypress-todos-automated-test
   cd cypress-todos-automated-test
   docker build -t sps89/cypress-todos-automated-tests .
   ```
 
2. Execute the tests by:- (ensure docker is installed in your host machine)
   ```sh
	docker run --interactive --name cypress-todos-automated-tests sps89/cypress-todosautomated-tests .
   ```
 
   
<!-- EXECUTING THE TESTS FROM JENKINS HOSTED IN DOCKER CONTAINER -->
## 3. Executing tests from Jenkins hosted in docker container

1. Clone the repo & run docker build (for building jenkins images)
   ```sh
   git clone https://github.com/sonups/cypress-todos-automated-test
   cd cypress-todos-automated-test
   cd jenkins
   docker build -t sps89/jenkins-gelato .
   docker kill jenkins-gelato
   docker rm jenkins-gelato 
   docker run -d --shm-size=2048m --name jenkins-gelato -v /var/run/docker.sock:/var/run/docker.sock -p 8089:8080 -p 50000:50000 sps89/jenkins-gelato
   ```

<!-- EXECUTING THE TESTS IN AZURE CLOUD -->
## 4. Executing the tests in Azure Cloud


<!-- CONTACT -->
## Contact

Sonu Sadasivan - sonu.sadasivan@gmail.com
LinkedIn - https://www.linkedin.com/in/sonups/

Project Link: [https://github.com/sonups/cypress-test-docker](https://github.com/sonups/cypress-test-docker)

