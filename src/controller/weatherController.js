const { findOne } = require("../repository/mapperRepository");
const mapperRepository = require("../repository/mapperRepository");
const { weatherCurrentApi, forecastApi } = require("../service/weatherService")

module.exports = {
    async getCurrentWeatherData(req, res, next) {
        try {
            if (!req.query.city || req.query.city == undefined) {
                return res.status(400).json({
                    success: false,
                    data: null,
                    message: "please enter the city"
                });
            }
            let data = await weatherCurrentApi(req.query.city);
            let locationObject = data.location;
            let obj = {};
            for (let key in locationObject) {
                let value = locationObject[key];
                let label = await findOne(key);
                let labelKey = label != null ? label['label'] : key;
                obj[labelKey] = value;
            }
            return res.render('pages/current', {
                data: obj
            });

        } catch (error) {
            next(error);
        }
    },

    async getForecastWeatherData(req, res, next) {
        try {
            if (!req.query.city || req.query.city == undefined) {
                return res.status(400).json({
                    success: false,
                    data: null,
                    message: "please enter the city"
                });
            }
            let data = await forecastApi(req.query.city);
            let obj = {};
            let astroObject = data.forecast.forecastday[0].astro;
            for (let key in astroObject) {
                let value = astroObject[key];
                let label = await findOne(key);
                let labelKey = label != null ? label['label'] : key;
                obj[labelKey] = value;
            }
            return res.render('pages/forecast', {
                data: obj
            });
        } catch (error) {
            next(error);
        }
    },
    async dropDownList(req, res, next) {
        try {
            let data = await mapperRepository.dropDownList();
            return res.render('pages/dropDown', {
                data
            });
        } catch (error) {
            next(error);
        }
    },
}