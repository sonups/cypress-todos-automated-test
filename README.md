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

Table of contents
=================

<!--ts-->

  * [Built With](#built-with)
  * [Clone the repo](#1-clone-the-repo-and-install-npm-dependencies)
  * [Different ways of Building And Executing project](#different-ways-of-building--executing-project)
  	* [Running tests in local](#1-running-tests-in-local)
  	 * [1. Clone the repo and Install npm dependencies](#1-clone-the-repo-and-install-npm-dependencies)
         * [2. Verify Lint](#2-verify-lint)
         * [3. Various Test configurations](#3-various-test-configurations)
         * [4. Structure of BDD feature files](#4-structure-of-bdd-feature-files)
         * [5. Report Generation](#5-report-generation)
  	* [Running tests in docker](#2-running-tests-from-docker)
  	 * [1. Run docker build](#1-clone-the-repo--run-docker-build)
         * [2. (Optional) Remove existing running containers](#2-required-only-when-there-is-already-a-container-running-with-same-name-ensures-the-existing-running-containers-are-killed-and-removed----ignore-errors)
         * [3. Execute tests by passing specific tags](#3-execute-tests-by-passing-specific-tags)
  	* [3. Running tests in Jenkins hosted from docker](#3-running-tests-in-jenkins-hosted-from-docker)
  	 * [3.1 Setting up jenkins](#31-setting-up-jenkins)
  	 	* [OPTION A - Running shell script jenkins-run.sh (In linux)](#31-setting-up-jenkins)
  	 	* [OPTION B - Executing each commands in shell](#31-setting-up-jenkins)
         * [3.2 Running tests in jenkins](#2-verify-lint)
         * [2. Verify Lint](#2-verify-lint)
  	* [Running tests from Azure cloud](#4-running-tests-from-azure-cloud)
- [Contact](#contact)


### Built With

Npm, nodejs & docker required for running the tests. Thse tools needs to be installed in host machine prior to building the project
* [Docker](https://www.docker.com/)
* [Npm](https://www.npmjs.com/)
* [NodeJs](https://nodejs.org/en/)

### Different ways of Building & Executing project

<!-- SETTING PROJECT LOCALLY -->
## 1. Running tests in local

##### 1. Clone the repo and Install npm dependencies
   ```sh
   git clone https://github.com/sonups/cypress-todos-automated-test
   cd cypress-todos-automated-test
   npm install
   ```

##### 2. Verify Lint
   ```sh
npm run lint
   ```
   
 ##### 3. Various Test configurations
 
   | Command  | Description | 
| ------------- | ------------- |
| npm run cy-open  | Open cypress workbook  |
| npm run cy-run-headless  | Run tests in headless mode  |
| npm run cy-run-chrome  | Run tests in Chrome  |
| npm run cy-run-firefox  | Run tests in Firefox  |
|  npm run cucumber-run-specific-test -- -e TAGS=@ui-tests  | Run All UI Tests   |
| npm run cucumber-run-specific-test -- -e TAGS=@rest-tests| Run All REST service test |
| npm run cucumber-run-specific-test -- -e TAGS=@ui-rest-integrated-test | Run UI test driver from REST API  |

 ##### 4. Structure of BDD feature files
    
    ├── cypress                    
    │         └── integration          
    │                   └──examples                  #  Spec file used for test script development
    │                   └── features                # BDD features folder
    |                            └──── todos-ui-tests.feature       # Todos UI tests
    |                            └──── jsonplaceholder-rest-api-tests.feature # REST API tests
    |                            └──── todos-jsonplaceholder-integrated-tests.feature # Todos and REST api integrated test




  ##### 5. Report Generation

a) allure

b) mocha-awesome



| Command                            | Description                  | Remarks                                                                          |
| ------------- |:-------------:| -----:|
| **npm run test-run-allure-report** | Generate Allure report       | Report opens automatically in a browser [ html generated in **/allure-report** ] |
| **npm run test-mochawesomereport** | Generate mochaawesome report | html generated in **/mochawesome-report**                              |

   
<!-- EXECUTING TEST FROM DOCKERIZED TESTS -->
## 2. Running tests from docker

##### 1. Run docker build

Issue the build commands from Root Folder **cypress-todos-automated-test**

   ```sh
   cd cypress-todos-automated-test
   docker build -t sps89/cypress-todos-automated-tests .
   ```
##### 2. (Required only when there is already a container running with same name) Ensures the existing running containers are killed and removed  - **(ignore errors)**
   ```sh
	docker kill cypress-todos-automated-tests
	docker rm cypress-todos-automated-tests
   ```
##### 3. Execute tests by passing specific tags

| Description                            | Command                  |
| ------------- |:-------------:| 
| Execute UI tests of **todos.mvc.com** | **docker run -i -e "TAGS=-e TAGS="@ui-tests"" --name cypress-todos-automated-tests sps89/cypress-todos-automated-tests**      | 
| Execute REST endpoint tests of **jsonplaceholder.com** | **docker run -i -e "TAGS=-e TAGS="@rest-tests"" --name cypress-todos-automated-tests sps89/cypress-todos-automated-tests**      | 
| Execute **Integrated** UI & REST tests | **docker run -i -e "TAGS=-e TAGS="@ui-rest-integrated-test"" --name cypress-todos-automated-tests sps89/cypress-todos-automated-tests**   |


<!-- Execution from Jenkins hosted from docker container -->
## 3. Running tests in Jenkins hosted from docker
### 3.1 Setting up jenkins
#### -----> *OPTION A* -- Running shell script jenkins-run.sh (In linux)

Execute the shell script in Linux environment
   ```sh
   cd cypress-todos-automated-test
   cd scripts
   sh jenkins-run.sh
   ```

#### -----> *OPTION B* -- Executing each commands in shell 
##### 
1. Clone the repo & run docker build (for building jenkins images)

   ```sh
   cd cypress-todos-automated-test
   cd jenkins
   docker build -t sps89/jenkins-gelato .
   ```
##### 
2. (Required only when there is already a container running with same name) This ensures the existing running containers are killed and removed  - **(ignore errors)**
   ```sh
   docker kill jenkins-gelato
   docker rm jenkins-gelato 
   ```


##### 

3. Start Jenkins service using docker
   ```sh
	docker run -d --shm-size=2048m --name jenkins-gelato -v /var/run/docker.sock:/var/run/docker.sock -p 8089:8080 -p 50000:50000 sps89/jenkins-gelato  

   ```
### 3.2 Running tests in jenkins

#### Open the Jenkins dashboard using link http://localhost:8089   

**(may be have to wait for 1-2 minutes for the docker container to spin up )**

<p align="center">
   <img src="https://raw.githubusercontent.com/sonups/cypress-todos-automated-test/master/pictures/jenkins.png" alt="Logo" width="600" height="200">
   </p>
   

#### Builds the docker image required to run tests

The job **Build_cypress_tests_docker_image** builds the docker image required to run tests

**Benefits** - Any repo change will be cloned and build in a single click

#### To run tests: 

| Jenkins Job                            | Description                  |
| ------------- |:-------------:|
| **Run__rest.api__placeholder.com_tests** | Execute REST endpoint tests of **jsonplaceholder.com**        |
| **Run__todomvc.com__rest.api__integration__tests** | Execute **Integrated** UI & REST tests |
| **Run__todos.mvc__tests** | Execute UI tests of **todos.mvc.com** |

 
<p align="center">
   <img src="https://raw.githubusercontent.com/sonups/cypress-todos-automated-test/master/pictures/jenkins-console-output.png" alt="Logo" width="600" height="200">
   </p>

<!-- EXECUTING THE TESTS IN AZURE CLOUD -->
## 4. Running tests from Azure cloud


<!-- CONTACT -->
# Contact

Sonu Sadasivan - sonu.sadasivan@gmail.com
LinkedIn - https://www.linkedin.com/in/sonups/

Project Link: [https://github.com/sonups/cypress-test-docker](https://github.com/sonups/cypress-test-docker)


