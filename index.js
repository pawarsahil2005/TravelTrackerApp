import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  console.log(result.rows);
  let countries = [];
  result.rows.forEach((entry) => {
    countries.push(entry.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  //Write your code here.
  const countries = await checkVisisted();
  res.render("index.ejs",{
    countries:countries,
    total:countries.length
  });
});

app.post("/add", async (req,res) => {
   const input = req.body.country;
  //  console.log(input);
  try {
    const result = await db.query(
    "SELECT country_code FROM countries WHERE country_name = $1",
    [input]
  );
    
  const data = result.rows[0].country_code;

  try {
    if (result.rows.length !== 0) {
    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
      data]);
    res.redirect("/");
  }
  } catch (error) {
    console.log(error);
    const countries = await checkVisisted();
    res.render("index.ejs",{
    countries:countries,
    total:countries.length,
    error:"Country has already been added, try again."
  });  
  }
  } catch (error) {
    console.log(error);
    const countries = await checkVisisted();
    res.render("index.ejs",{
    countries:countries,
    total:countries.length,
    error:"Country has already been added, try again."
  }); 
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
