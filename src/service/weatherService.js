const axios = require('axios');
const configuration = require('../config/configuration');
const { weatherApiKey } = configuration;

module.exports = {
    async weatherCurrentApi(city) {
        try {
            let queryParams = {
                key: weatherApiKey,
                q: city,
                days: "1",
                aqi: "no",
                alrets: "no"
            }
            let url = `http://api.weatherapi.com/v1/current.json`;
            let data = await axios.get(url, { params: queryParams });;
            return data.data;
        } catch (error) {
            throw Error(error);
        }
    },

    async forecastApi(city) {
        try {
            let queryParams = {
                key: weatherApiKey,
                q: city,
                days: "1",
                aqi: "no",
                alrets: "no"
            }
            let url = `https://api.weatherapi.com/v1/forecast.json`;
            let data = await axios.get(url, { params: queryParams });;
            return data.data;

        } catch (error) {
            throw Error(error);
        }
    }
}