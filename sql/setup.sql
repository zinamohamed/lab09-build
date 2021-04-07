DROP TABLE IF EXISTS cats;
DROP TABLE IF EXISTS dogs;

CREATE TABLE cats (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  cats TEXT NOT NULL
);

CREATE TABLE dogs (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  dogs TEXT NOT NULL
);