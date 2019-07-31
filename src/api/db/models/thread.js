"use strict";
module.exports = (sequelize, DataTypes) => {
  const thread = sequelize.define(
    "thread",
    {
      title: DataTypes.STRING,
      input: DataTypes.STRING,
      userId: DataTypes.INTEGER
    },
    {}
  );
  thread.associate = function(models) {
    thread.hasMany(models.comment);
    thread.belongsTo(models.user);
  };
  return thread;
};
