'use strict';
let mapperArray = [
  {
    labelFor: "current",
    key: "name",
    label: "town"
  }, {
    labelFor: "current",
    key: "region",
    label: "state"
  }, {
    labelFor: "current",
    key: "Country",
    label: "nation"
  }, {
    labelFor: "current",
    key: "lat",
    label: "latitude"
  }, {
    labelFor: "current",
    key: "lon",
    label: "longitude"
  }, {
    labelFor: "current",
    key: "tz_id",
    label: "Time Zone"
  }, {
    labelFor: "current",
    key: "localtime",
    label: "Time"
  },
  {
    labelFor: "forcast",
    key: "sunrise",
    label: "Dawn"
  },
  {
    labelFor: "forcast",
    key: "sunset",
    label: "Dusk"
  }, {
    labelFor: "forcast",
    key: "moonrise",
    label: "moon lit"
  }, {
    labelFor: "forcast",
    key: "mmoonset",
    label: "oon sleep"
  }, {
    labelFor: "forcast",
    key: "localtime",
    label: "Time"
  }, {
    labelFor: "forcast",
    key: "moon_phase",
    label: "orientation"
  },
  {
    labelFor: "forcast",
    key: "moon_illumination",
    label: "Illumination"
  }
];
module.exports = {
  async up(queryInterface, Sequelize) {
    //delete all exisiting seerders and insert all new seeders
    await queryInterface.bulkDelete('mappers');
    return await queryInterface.bulkInsert('mappers', mapperArray, {});
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
