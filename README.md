# Physiotherapy App

## Description
Fullstack application to manage patients, exercises, appointments, and physiotherapy progress.

## Technologies
- Backend: Node.js, Express, MongoDB (Mongoose)
- Frontend: React, React Router
- Authentication: JWT
- Pure CSS for responsive design

## Installation

### Backend
1. Install dependencies: `npm install`
2. Create `.env` file with environment variables
3. Run backend: `npm run dev`

## 📁 Folder Structure
physiotherapy-backend/
├── controllers/
│ ├── appointmentController.js
│ ├── exercise.js
│ ├── paciente.js
│ └── user.js
├── models/
│ ├── appointment.js
│ ├── exercise.js
│ ├── paciente.js
│ └── user.js
├── routes/
│ ├── appointmentRoutes.js
│ ├── pacientesRoutes.js
│ └── userRoutes.js
├── .env
├── server.js
└── package.json


---

## 🧪 API Features

### 🔐 Authentication

- **POST** `/api/users/register` - Register a new user
- **POST** `/api/users/login` - Login and receive a JWT

### 🧑 Patients

- **GET** `/api/pacientes` - Get all patients
- **POST** `/api/pacientes` - Create a new patient
- **PUT** `/api/pacientes/:id` - Update a patient
- **DELETE** `/api/pacientes/:id` - Delete a patient

### 📋 Exercises

- **GET** `/api/exercises` - Get all exercises
- **POST** `/api/exercises` - Create a new exercise

### 📅 Appointments

- **GET** `/api/appointments` - Get all appointments
- **POST** `/api/appointments` - Create a new appointment

---

## 🛠️ Installation & Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/vanos0600/fisioterapia-backend.git
cd fisioterapia-backend
3. Create .env file
bash
Copy
Edit
touch .env
Add the following to .env:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
4. Run the development server
bash
Copy
Edit
npm run dev
The server will run on http://localhost:5000/

🔒 Security
Passwords are hashed using bcryptjs

Endpoints use JWT for protected access

All sensitive data is stored in environment variables

🧩 Dependencies
express

mongoose

dotenv

bcryptjs

jsonwebtoken

cors

nodemon (dev)

📬 Contact
Created with 💪 by Oskar Vanegas
Feel free to open an issue or submit a pull request.


## Author
Oskar David Vanegas Juarez
