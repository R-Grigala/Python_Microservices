
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
