-- Create visited_countries table
CREATE TABLE IF NOT EXISTS visited_countries (
    id SERIAL PRIMARY KEY,
    country_code VARCHAR(2)
);

-- Create countries table
CREATE TABLE IF NOT EXISTS countries (
    id SERIAL PRIMARY KEY,
    country_id VARCHAR(2),
    country_name VARCHAR(100)
);

-- Import the given Country file in the countries table.