'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("threads","likedThread", {type: Sequelize.STRING, defaultValue: '0'}, {
      after: "input"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("threads", "likedThread")
  }
};
