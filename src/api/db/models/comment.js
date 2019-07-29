"use strict";
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define(
    "comment",
    {
      userid: DataTypes.INTEGER,
      threadid: DataTypes.INTEGER,
      comment: DataTypes.STRING
    },
    {}
  );
  comment.associate = function(models) {
    comment.belongsTo(models.user);
    comment.belongsTo(models.thread);
  };
  return comment;
};
