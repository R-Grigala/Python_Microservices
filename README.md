
## 🐍 Microservices with Flask, Django & React
This repository demonstrates a Microservices Architecture project featuring Flask, Django, MySQL, RabbitMQ, and React.
The backend services are containerized using Docker, while the React app is run locally using npm start.
## 📂 Project Structure
```plaintext
.
├── admin/               # Django-based services (Admin portal)
│   ├── docker-compose.yml # Docker Compose for Django services
│   ├── Dockerfile       # Docker configuration for Django app
│   └── ...
├── main/                # Flask-based services
│   ├── docker-compose.yml # Docker Compose for Flask services
│   ├── Dockerfile       # Docker configuration for Flask app
│   └── ...
├── react-crud/          # Frontend application for managing products
│   ├── package.json     # NPM configuration for React app
│   ├── public/          # Static assets for React app
│   ├── src/             # React source code
│   └── ...
├── .gitignore           # Git ignore file for sensitive or unnecessary files
├── README.md            # Project documentation
└── comments.txt         # Development notes or comments
```
## 📦 Key Branches

#### admin
- Built using Django for the admin portal and backend configurations.
#### main
- Built using Flask, providing the core backend services.
#### react-crud
- Implements the front-end using React for CRUD operations.
## 🚀 Features

Backend:
- Flask: Handles main backend microservices.
- Django: Powers the admin portal and management services.
- RabbitMQ: Used for asynchronous message queue processing.
- MySQL: Database connected via Docker Compose.
Frontend:
- React: Used for managing product-related CRUD operations.
- Bootstrap: Adds responsive, user-friendly UI styling.
Dockerized Backend:
- Both Django and Flask services, including databases, are fully containerized.

## 🔧 Setup Instructions
#### Prerequisites:

 - [Install Docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)
 - Install docker-compose `sudo apt install docker-compose`.
 - Install [Node.js](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04) for React development.

 To deploy this project run

```bash
  cd admin
```

#### Steps to Run Backend Services
Django (admin folder):

Navigate to the admin folder:
```bash
cd admin
```
Start the Django services:
```bash
docker-compose up --build
```
Access the Django Admin Portal:

- [http://localhost:8000/admin](http://localhost:8000/admin)

Flask (main folder):

Navigate to the main folder:
```bash
cd main
```
Start the Flask services:
```bash
docker-compose up --build
```
Access the Flask backend:
- [http://localhost:5000](http://localhost:5000)
Steps to Run the React Frontend

Navigate to the react-crud folder:
```bash
cd react-crud
```
Install dependencies:
```bash
npm install
```
Start the React app:
```bash
npm start
```
Access the React frontend:
- [http://localhost:3000](http://localhost:3000)
