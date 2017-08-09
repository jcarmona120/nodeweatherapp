const yargs = require('yargs')
const axios = require('axios')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch Weather',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv

var encodeAddress = encodeURIComponent(argv.address)
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`

axios.get(geocodeUrl).then((response) => {
	if (response.data.status === 'ZERO_RESULTS') {
		throw new Error('Unable to find that address');
	} 
	var latitude = response.data.results[0].geometry.location.lat;
	var longitude = response.data.results[0].geometry.location.lng;
	var weatherURL = `https://api.darksky.net/forecast/edf577047296d5abe4db0f56e085ea7a/${latitude},${longitude}`;
	console.log(response.data.results[0].formatted_address)
	return axios.get(weatherURL)
}).then((response) => {
	var temperature = response.data.currently.temperature;
	var apparentTemperature = response.data.currently.apparentTemperature;
	console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}!`)
}).catch((e) => {
	if (e.code === 'ENOTFOUND') {
		console.log('Unable to connect to API servers')
	} else {
		console.log(e.message);
	} 
})