import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const db = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted() {
  const result = await db.query(
    "SELECT country_code FROM visited_countries"
  );

  let countries = [];

  result.rows.forEach((entry) => {
    countries.push(entry.country_code);
  });

  return countries;
}

app.get("/", async (req, res) => {
  const countries = await checkVisisted();

  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
  });
});

app.post("/add", async (req, res) => {
  const input = req.body.country;

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE country_name = $1",
      [input]
    );

    if (result.rows.length === 0) {
      const countries = await checkVisisted();

      return res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country not found, try again.",
      });
    }

    const data = result.rows[0].country_code;

    try {
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [data]
      );

      res.redirect("/");
    } catch (error) {
      console.log(error);

      const countries = await checkVisisted();

      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country has already been added, try again.",
      });
    }
  } catch (error) {
    console.log(error);

    const countries = await checkVisisted();

    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Something went wrong.",
    });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});