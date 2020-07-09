const axios = require('axios');
const settings = require("../settings.js");
const city = (cityName = "Banglol",countryCode="th")=>{
    return axios
        .get(`${settings.apiUrl}?q=${cityName},${countryCode}&appid=${settings.apiKey}&units=metric`);
};
module.exports = city;