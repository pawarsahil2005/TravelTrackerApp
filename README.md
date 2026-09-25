# 🌍 Travel Tracker

A simple **Travel Tracker web application** that allows users to keep track of the countries they have visited.

The application is built using **Node.js, Express.js, EJS, and PostgreSQL**. The database is hosted on **Neon PostgreSQL**, and the application is deployed on **Render**.

## 🚀 Live Demo

🔗 **[Travel Tracker – Live Website](https://traveltrackerapp.onrender.com)**

---

## 📌 Features

- 🌍 Add countries that you have visited
- 📊 Display the total number of visited countries
- 🗺️ Visual representation of visited countries
- 🔎 Search countries by country name
- 💾 Store visited countries in PostgreSQL
- ⚡ Server-side rendering using EJS
- ☁️ Deployed using Render
- 🗄️ PostgreSQL database hosted using Neon

---

## 🛠️ Technologies Used

### Frontend
- HTML
- CSS
- EJS
- SVG

### Backend
- Node.js
- Express.js
- Body Parser

### Database
- PostgreSQL
- Neon PostgreSQL

### Deployment
- Render
- GitHub

### Other Tools
- Git
- GitHub
- dotenv

---

## 📂 Project Structure

```text
TravelTrackerApp/
│
├── database/
│   ├── countries.csv
│   └── queries.sql
│
├── public/
│   ├── styles/
│   ├── images/
│   └── ...
│
├── views/
│   └── index.ejs
│
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/pawarsahil2005/TravelTrackerApp.git
```

### 2. Navigate to the Project

```bash
cd TravelTrackerApp
```

### 3. Install Dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
DATABASE_URL=your_neon_database_connection_string
```

**Do not upload the `.env` file to GitHub.**

The `.gitignore` file should contain:

```text
node_modules/
.env
```

---

## 🗄️ Database

This project uses **PostgreSQL** to store country information.

### `countries`

Stores the available countries.

```text
id
country_code
country_name
```

### `visited_countries`

Stores the countries visited by the user.

```text
id
country_code
```

The country data is imported from:

```text
database/countries.csv
```

---

## ▶️ Run the Project Locally

Start the application using:

```bash
npm start
```

Or:

```bash
node index.js
```

The application will run at:

```text
http://localhost:3000
```

---

## 📦 NPM Dependencies

The project uses the following main packages:

- **Express.js** – Web application framework
- **EJS** – Server-side templating
- **pg** – PostgreSQL client for Node.js
- **body-parser** – Parses incoming request bodies
- **dotenv** – Loads environment variables

---

## ☁️ Deployment

The application is deployed using:

**GitHub → Render → Neon PostgreSQL**

```text
              ┌─────────────────┐
              │     GitHub      │
              │  Source Code    │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │     Render      │
              │ Node + Express  │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │      Neon       │
              │   PostgreSQL    │
              └─────────────────┘
```

### Render Configuration

```text
Build Command:
npm install

Start Command:
node index.js
```

The application uses the `PORT` environment variable provided by Render.

---

## 🌐 Live Application

Visit the deployed application:

**https://traveltrackerapp.onrender.com**

---

## 🔄 How It Works

1. User enters a country name.
2. The Express server receives the request.
3. The server searches for the country in the PostgreSQL `countries` table.
4. The corresponding country code is stored in `visited_countries`.
5. The application redirects to the home page.
6. EJS displays the visited countries.
7. The total number of visited countries is displayed.

---

## 🎯 Learning Objectives

This project demonstrates:

- Node.js backend development
- Express.js routing
- EJS templating
- PostgreSQL database integration
- SQL queries
- Environment variables
- Git and GitHub
- Cloud database deployment
- Web application deployment using Render

---

## 👨‍💻 Author

**Sahil Pawar**

Computer Engineering Student  
Pimpri Chinchwad College of Engineering (PCCOE), Pune

---

## 🔗 Links

- **Live Website:** https://traveltrackerapp.onrender.com
- **GitHub Repository:** https://github.com/pawarsahil2005/TravelTrackerApp

---

## ⭐ Project

If you find this project useful, consider giving the repository a ⭐ on GitHub.
