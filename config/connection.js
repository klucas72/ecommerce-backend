const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_DATABASE, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialectOptions: {
      decimalNumbers: true,
    },
  });

module.exports = sequelize;
