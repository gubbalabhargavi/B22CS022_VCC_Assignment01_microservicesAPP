# MicroservicesAPP
Create and configure multiple Virtual Machines (VMs) using VirtualBox, establish a network between them, and deploy a microservice-based application across the connected VMs.


This file explains how to set up and run the microservice.

# Microservice Application

This is a simple microservice built with Node.js and Express.

## 📌 Features
- REST API with basic endpoints
- Health check route (`/health`)

## 📥 Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/gubbalabhargavi/B22CS022_VCC_Assignment01_microservicesAPP.git
   cd microservice-app

2. Install dependencies:
    npm install
3. Start the service:
   npm start

4. Open in your browser or test via curl:
   curl http://localhost:3000

🔗 API Endpoints
Method	     Endpoint	        Description
GET	          /	                Welcome message
GET	          /health	          Check API health

🚀 Deployment

To deploy this on a server:

    Use PM2 to keep it running:
    npm install -g pm2
    pm2 start server.js
