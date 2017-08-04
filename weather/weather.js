const request = require('request');

const darkSkykey = 'edf577047296d5abe4db0f56e085ea7a';

var getWeather = (latitude, longitude, callback) => {
	request({
	url: `https://api.darksky.net/forecast/${darkSkykey}/${latitude},${longitude}`,
	json: true
}, (error, response, body) => {
	if (!error && response.statusCode === 200) {
		callback(undefined, {
			temperature: body.currently.temperature,
			apparentTemperature: body.currently.apparentTemperature
		})
	} else {
		callback('Unable to fetch weather')
	}
});
}


module.exports.getWeather = getWeather;