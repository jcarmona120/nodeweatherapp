const request = require('request');
const yargs = require('yargs')

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

request({
	url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
	json: true
}, (error, response, body) => {
	if (error) {
		console.log('Cannot connect to Google Servers')
	} else if  (body.status === 'ZERO_RESULTS') {
		console.log(body.status)
		console.log('unable to find that address')
	} else if (body.status === 'OK') {
	console.log(body.status)
	var data = JSON.stringify(body, undefined, 2);
	// console.log(typeof body)
	// console.log(typeof data)
	 console.log(`Address: ${body.results[0].formatted_address} and the latitude/longitude is ${body.results[0].geometry.location.lat} and ${body.results[0].geometry.location.lng}`);
	}
})