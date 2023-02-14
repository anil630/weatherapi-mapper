const models = require("../model/index");
const mapperModel = models.mapper;
const apiModel = models.api;

module.exports = {
    async getMapper() {
        return await mapperModel.findAll({ raw: true });
    },
    async findOne(key) {
        return await mapperModel.findOne({ where: { key }, attributes: ['label'], raw: true });
    },

    async dropDownList() {
        return await apiModel.findAll({ attributes: ['label'] });
    },
}