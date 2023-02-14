module.exports = (sequelize, DataTypes) => {
  const api = sequelize.define("api", {
    label: { type: DataTypes.STRING },
    url: { type: DataTypes.STRING },
    key: { type: DataTypes.STRING },
    q: { type: DataTypes.STRING },
    days: { type: DataTypes.STRING }
  });
  return api;
};