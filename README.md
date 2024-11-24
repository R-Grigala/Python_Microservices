🐍 Microservices with Flask, Django & React
This repository demonstrates a Microservices Architecture project featuring Flask, Django, MySQL, RabbitMQ, and React.
The backend services are containerized using Docker, while the React app is run locally using npm start.

📂 Project Structure

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

📦 Key Branches

1. admin

Built using Django for the admin portal and backend configurations.

3. main

Built using Flask, providing the core backend services.

5. react-crud

Implements the front-end using React for CRUD operations.

🚀 Features

Backend:

Flask: Handles main backend microservices.

Django: Powers the admin portal and management services.

RabbitMQ: Used for asynchronous message queue processing.

MySQL: Database connected via Docker Compose.

Frontend:

React: Used for managing product-related CRUD operations.

Bootstrap: Adds responsive, user-friendly UI styling.

Dockerized Backend:

Both Django and Flask services, including databases, are fully containerized.
