# Travel Tracker

**Travel Tracker** is a simple web application that allows you to track countries you have visited.  
Users can add a country, which will then be highlighted on a map, and the country name is stored in a PostgreSQL database.

---

## Features

- Add countries to your visited list
- Highlight selected countries on the map
- Store visited countries in PostgreSQL
- Simple, easy-to-use interface
- Built using Node.js and Express

---

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- EJS (for rendering views)
- dotenv (for environment variables)
- CSS (for styling)

---

## Project Structure

'''
Travel Tracker/
├─ database/
│ ├─ countries.csv # List of countries and codes
│ └─ queries.sql # SQL queries for setup
├─ public/
│ └─ styles/
│ └─ main.css # CSS for styling
├─ views/
│ └─ index.ejs # Main EJS template
├─ .env # Local environment variables (ignored by Git)
├─ .gitignore # Git ignore file
├─ index.js # Main Node.js server file
├─ package.json # Node.js dependencies
└─ package-lock.json # Lock file for dependencies
'''
