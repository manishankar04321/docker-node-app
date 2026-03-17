# Node.js Docker App

This is a simple Node.js application running inside a Docker container.

##  How to Run

### 1. Build Image

docker build -t node-app .

### 2. Run Container

docker run -d -p 8085 :8085 node-app

### 3. Open Browser

http://localhost:8085

##  Concepts Used

* Dockerfile
* Node.js
* Containerization
* Port Mapping

##  Output

Displays: "Hello from Node.js in Docker.."
