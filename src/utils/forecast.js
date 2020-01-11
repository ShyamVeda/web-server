const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url =
        'https://api.darksky.net/forecast/6e0a9133a6d0cab1fb61e82d74335e37/'+longitude+','+latitude
    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            console.log('Unable to connect to location services!')
            callback({error:'Unable to connect to location services!'}, undefined)
        } else if (body.error) {
            console.log('Unable to find location. Try another search.')
            callback({error:'Unable to find location. Try another search'}, undefined)
        } else {
                const summary = body.daily.data[0].summary
                const temperature = body.currently.temperature
                const precipProbability = body.currently.precipProbability
                callback(undefined, {summary, 
                        temperature,
                        precipProbability
                    })
        }
    })
}
module.exports = forecast;