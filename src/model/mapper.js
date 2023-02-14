module.exports = (sequelize, DataTypes) => {
  const mapper = sequelize.define("mapper", {
    labelFor: { type: DataTypes.STRING },
    key: { type: DataTypes.STRING },
    label: { type: DataTypes.STRING },
  });
  return mapper;
};

