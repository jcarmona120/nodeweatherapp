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
	console.log(response)
	console.log(response.data)
})