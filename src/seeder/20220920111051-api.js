'use strict';
let apiArray = [
  {
    label: " weatherapi current",
    url: "http://api.weatherapi.com/v1/current.json",

  },
  {
    label: "weatherapi forecast",
    url: "http://api.weatherapi.com/v1/forecast.json",

  },
];
module.exports = {
  async up(queryInterface, Sequelize) {
    //delete all exisiting seerders and insert all new seeders
    await queryInterface.bulkDelete('apis');
    return await queryInterface.bulkInsert('apis', apiArray, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
