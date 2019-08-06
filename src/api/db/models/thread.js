"use strict";
module.exports = (sequelize, DataTypes) => {
  const thread = sequelize.define(
    "thread",
    {
      title: DataTypes.STRING,
      input: DataTypes.STRING,
      likedThread: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      category: DataTypes.STRING
    },
    {}
  );
  thread.associate = function(models) {
    thread.hasMany(models.comment);
    thread.belongsTo(models.user);
  };
  return thread;
};
