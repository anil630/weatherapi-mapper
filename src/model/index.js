const { dbHost, dbName, dbPassword, dbPort, dbUserName } = require('../config/configuration').database;
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  dbName, dbUserName, dbPassword,
  {
    host: dbHost,
    logging: false,
    dialect: "mysql",
    pool: { max: 5, min: 0, idel: 10000 },
    port: dbPort
  }
);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.mapper = require("./mapper")(sequelize, Sequelize);
db.api = require("./api")(sequelize, Sequelize);
sequelize
  .authenticate()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("Error" + err);
  });
sequelize.sync({}).then(() => {
  console.log("database sync");
});
module.exports = db;