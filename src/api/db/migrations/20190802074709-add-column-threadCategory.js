'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("threads","category", {type: Sequelize.STRING, defaultValue: '0'}, {
      after: "userId"})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("threads", "category")
  }
};
