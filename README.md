🐍 Microservices with Flask, Django & React
This repository demonstrates a Microservices Architecture project featuring Flask, Django, MySQL, RabbitMQ, and React. The backend services are containerized using Docker, while the React app is run locally using npm start.

📂 Project Structure
.

├── admin/               # Django-based services (Admin portal)
|
│   ├── docker-compose.yml # Docker Compose for Django services
|
│   ├── Dockerfile       # Docker configuration for Django app
|
│   └── ...
|
├── main/                # Flask-based services
|
│   ├── docker-compose.yml # Docker Compose for Flask services
|
│   ├── Dockerfile       # Docker configuration for Flask app
|
│   └── ...
|
├── react-crud/          # Frontend application for managing products

│   ├── package.json     # NPM configuration for React app

│   ├── public/          # Static assets for React app

│   ├── src/             # React source code

│   └── ...

├── .gitignore           # Git ignore file for sensitive or unnecessary files

├── README.md            # Project documentation

└── comments.txt         # Development notes or comments

📦 Key Branches
admin
Built using Django, this branch handles the admin portal and backend configurations.

main
Built using Flask, this branch provides the core backend services.

react-crud
Implements the front-end using React for CRUD operations.

🚀 Features
Backend:

Flask for the main backend microservices.
Django for the admin portal and management services.
RabbitMQ for asynchronous message queue processing.
MySQL database connected through Docker Compose.
Frontend:

React application for managing product-related CRUD operations.
Styled using Bootstrap for a responsive and user-friendly UI.
Dockerized Backend:

Both Django and Flask services, including databases, are containerized using Docker.
🔧 Setup Instructions
Prerequisites
Docker installed on your system.
Node.js installed for React development (required for the frontend).
Steps to Run Backend Services
Django (admin branch)
Navigate to the admin folder:

cd admin
Start the Django services:

docker-compose up --build
Access the Django Admin Portal at:
http://localhost:8000/admin

Flask (main branch)
Navigate to the main folder:

cd main
Start the Flask services:


docker-compose up --build
Access the Flask backend at:
http://localhost:5000

Steps to Run the React Frontend
Navigate to the react-crud folder:

cd react-crud
Install dependencies:

npm install
Start the React app:

npm start
Access the React frontend at:
http://localhost:3000

