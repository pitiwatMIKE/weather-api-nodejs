const axios = require('axios');
const settings = require('../settings.js');
const location = (lon = 99.9048538, lat=18.7967139)=>{
    return axios
        .get(`${settings.apiUrl}?lon=${lon}&lat=${lat}&appid=${settings.apiKey}&units=metric`);
};
module.exports = location;