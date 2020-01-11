const request = require('request')

const geocode = (address, callback) => {
    const mapBoxURl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoidnNoeWFtc3VuZGFyMTk4OCIsImEiOiJjazU0M21xenQwYTBmM21uOHlmOHRpcGZvIn0.ifmJ5qPe-LE8GyojwMK3bw'
    console.log(mapBoxURl);
    request({ url: mapBoxURl, json: true }, (error, {body}) => {
        if (error) {
            console.log('Unable to connect to location services!')
            callback(error, undefined)
        } else if (body.features.length === 0) {
            console.log('Unable to find location. Try another search.')
            callback({error:'unable finding location'}, undefined)
        } else {
            const longitude = body.features[0].center[0];
            const latitude = body.features[0].center[1];
            callback(undefined, {longitude, latitude, location: address })
        }
    })
}

module.exports = geocode