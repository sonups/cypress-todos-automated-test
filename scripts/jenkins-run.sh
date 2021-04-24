cd ..
cd jenkins
docker build -t sps89/jenkins-gelato .
docker kill jenkins-gelato
docker rm jenkins-gelato 
docker run -d --shm-size=2048m --name jenkins-gelato -v /var/run/docker.sock:/var/run/docker.sock -p 8089:8080 -p 50000:50000 sps89/jenkins-gelato
