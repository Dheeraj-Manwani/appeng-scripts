import chalk from "chalk";
import knex from "knex";
import dotenv from "dotenv";
dotenv.config();

const sqlKnex = knex({
  client: "mysql",
  connection: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_MAIN_DATABASE,
  },
});

const auditMysqlKnex = knex({
  client: "mysql",
  connection: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_AUDIT_DATABASE,
  },
});

const mssqlKnex = knex({
  client: "mssql",
  connection: {
    host: process.env.MSSQL_HOST,
    user: process.env.MSSQL_USER,
    password: process.env.MSSQL_PASSWORD,
    database: process.env.MSSQL_DATABASE,
    options: {
      encrypt: true,
    },
  },
});

export const getKnex = () => {
  if (process.env.DB_TYPE === "MYSQL") {
    return { knex: sqlKnex, auditKnex: auditMysqlKnex };
  } else if (process.env.DB_TYPE === "MSSQL") {
    return {
      knex: () => mssqlKnex.withSchema(process.env.MSSQL_SCHEMA),
      auditKnex: () => mssqlKnex.withSchema(process.env.MSSQL_SCHEMA),
    };
  } else {
    throw new Error(
      "Unsupported DB_TYPE. Please set DB_TYPE to 'MYSQL' or 'MSSQL'."
    );
  }
};
