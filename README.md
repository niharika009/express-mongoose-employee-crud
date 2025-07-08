# express-mongoose-employee-crud
🛠️ Minimal Express + Mongoose CRUD API for Employee Management with MVC structure, service layer, and MongoDB integration. Ideal for beginners learning RESTful design and Node.js backend architecture.
# 🚀 Employee CRUD API (Express + Mongoose)

A minimal RESTful API for managing employee data using **Node.js**, **Express**, and **MongoDB (Mongoose)**.  
Follows a clean MVC architecture with a dedicated service layer for validation and business logic.

---

## 📦 Features

- Create, Read, Update, Delete Employees
- Clean MVC folder structure
- Mongoose schema with validations and enum
- MongoDB connection using `.env`
- Centralized error handling and input validation

---

## 🧱 Project Structure

minicrud/
│
├── models/           # 🧬 Mongoose Schema (empModel.js)
│   └── empModel.js
│
├── controllers/      # 🧭 Handles HTTP requests (empController.js)
│   └── empController.js
│
├── services/         # 🧠 Business logic and validations (empService.js)
│   └── empService.js
│
├── routes/           # 🌐 API route definitions (empRoutes.js)
│   └── empRoutes.js
│
├── config/           # ⚙️ MongoDB connection setup (database.js)
│   └── database.js
│
├── .env              # 🔐 Environment variables
├── app.js            # 🚀 Main Express app entry
└── package.json      # 📦 Project metadata & dependencies

