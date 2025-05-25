import dotenv from "dotenv";
import chalk from "chalk";
import express from "express";

import { exampleDataFix } from "./iterations/example-iteration/script.js";
import { getKnex } from "./db/config.js";

const app = express();
dotenv.config();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Script server is running fine ✅✅✅");
});

// This is where you would call your data fixer script
app.get("/dataFix", async (req, res) => {
  const { knex, auditKnex } = getKnex();

  return await exampleDataFix(req, res, knex, auditKnex);
});

app.listen(PORT, () => {
  console.log(
    chalk.blueBright(`Script Server started on http://localhost:${PORT}`)
  );
});
