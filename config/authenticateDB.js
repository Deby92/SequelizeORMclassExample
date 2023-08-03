const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new sequelize(
    process.env.PG_DATABASE,
    process.env.PG_USER,
    process.env.PG_PASSWORD,
  'db_node',
  'node_user',
  'node_password', 
  {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: 'postgres',
    pool: {
        max: process.env.PG_MAX,
        min: 0,
        acquire: process.env.PG_CONNECTIONTIMEOUTMILLIS,
        idle: process.env.PG_IDLETIMEOUTMILLIS
    }
  }
);