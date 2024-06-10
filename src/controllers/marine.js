const { default: axios } = require('axios');
require('dotenv').config();
// const refactJsonQuake = require('../utils/refactJsonQuake');
const responseCreator = require('../utils/responseCreator');

// mock up response
const mockupResponse = {"hours":[{"airTemperature":{"noaa":28.29,"sg":28.29},"time":"2024-03-28T00:00:00+00:00","waveHeight":{"icon":0.82,"noaa":0.02,"sg":0.82}},{"airTemperature":{"noaa":28.32,"sg":28.32},"time":"2024-03-28T01:00:00+00:00","waveHeight":{"icon":0.83,"noaa":0.02,"sg":0.83}},{"airTemperature":{"noaa":28.34,"sg":28.34},"time":"2024-03-28T02:00:00+00:00","waveHeight":{"icon":0.84,"noaa":0.02,"sg":0.84}},{"airTemperature":{"noaa":28.36,"sg":28.36},"time":"2024-03-28T03:00:00+00:00","waveHeight":{"icon":0.85,"noaa":0.02,"sg":0.85}},{"airTemperature":{"noaa":28.43,"sg":28.43},"time":"2024-03-28T04:00:00+00:00","waveHeight":{"icon":0.86,"noaa":0.03,"sg":0.86}},{"airTemperature":{"noaa":28.49,"sg":28.49},"time":"2024-03-28T05:00:00+00:00","waveHeight":{"icon":0.87,"noaa":0.03,"sg":0.87}},{"airTemperature":{"noaa":28.55,"sg":28.55},"time":"2024-03-28T06:00:00+00:00","waveHeight":{"icon":0.88,"noaa":0.04,"sg":0.88}},{"airTemperature":{"noaa":28.66,"sg":28.66},"time":"2024-03-28T07:00:00+00:00","waveHeight":{"icon":0.89,"noaa":0.03,"sg":0.89}},{"airTemperature":{"noaa":28.77,"sg":28.77},"time":"2024-03-28T08:00:00+00:00","waveHeight":{"icon":0.89,"noaa":0.03,"sg":0.89}},{"airTemperature":{"noaa":28.89,"sg":28.89},"time":"2024-03-28T09:00:00+00:00","waveHeight":{"icon":0.9,"noaa":0.02,"sg":0.9}},{"airTemperature":{"noaa":28.93,"sg":28.93},"time":"2024-03-28T10:00:00+00:00","waveHeight":{"icon":0.9,"noaa":0.03,"sg":0.9}},{"airTemperature":{"noaa":28.97,"sg":28.97},"time":"2024-03-28T11:00:00+00:00","waveHeight":{"icon":0.91,"noaa":0.03,"sg":0.91}},{"airTemperature":{"noaa":29.0,"sg":29.0},"time":"2024-03-28T12:00:00+00:00","waveHeight":{"icon":0.91,"noaa":0.04,"sg":0.91}},{"airTemperature":{"noaa":28.92,"sg":28.92},"time":"2024-03-28T13:00:00+00:00","waveHeight":{"icon":0.91,"noaa":0.05,"sg":0.91}},{"airTemperature":{"noaa":28.84,"sg":28.84},"time":"2024-03-28T14:00:00+00:00","waveHeight":{"icon":0.91,"noaa":0.07,"sg":0.91}},{"airTemperature":{"noaa":28.75,"sg":28.75},"time":"2024-03-28T15:00:00+00:00","waveHeight":{"icon":0.91,"noaa":0.08,"sg":0.91}},{"airTemperature":{"noaa":28.66,"sg":28.66},"time":"2024-03-28T16:00:00+00:00","waveHeight":{"icon":0.91,"noaa":0.07,"sg":0.91}},{"airTemperature":{"noaa":28.56,"sg":28.56},"time":"2024-03-28T17:00:00+00:00","waveHeight":{"icon":0.91,"noaa":0.05,"sg":0.91}},{"airTemperature":{"noaa":28.47,"sg":28.47},"time":"2024-03-28T18:00:00+00:00","waveHeight":{"icon":0.91,"noaa":0.04,"sg":0.91}},{"airTemperature":{"noaa":28.21,"sg":28.21},"time":"2024-03-28T19:00:00+00:00","waveHeight":{"icon":0.91,"noaa":0.04,"sg":0.91}},{"airTemperature":{"noaa":27.96,"sg":27.96},"time":"2024-03-28T20:00:00+00:00","waveHeight":{"icon":0.91,"noaa":0.03,"sg":0.91}},{"airTemperature":{"noaa":27.71,"sg":27.71},"time":"2024-03-28T21:00:00+00:00","waveHeight":{"icon":0.91,"noaa":0.03,"sg":0.91}},{"airTemperature":{"noaa":27.98,"sg":27.98},"time":"2024-03-28T22:00:00+00:00","waveHeight":{"icon":0.91,"noaa":0.03,"sg":0.91}},{"airTemperature":{"noaa":28.25,"sg":28.25},"time":"2024-03-28T23:00:00+00:00","waveHeight":{"icon":0.9,"noaa":0.03,"sg":0.9}},{"airTemperature":{"noaa":28.53,"sg":28.53},"time":"2024-03-29T00:00:00+00:00","waveHeight":{"icon":0.9,"noaa":0.03,"sg":0.9}},{"airTemperature":{"noaa":28.59,"sg":28.59},"time":"2024-03-29T01:00:00+00:00","waveHeight":{"icon":0.9,"noaa":0.05,"sg":0.9}},{"airTemperature":{"noaa":28.65,"sg":28.65},"time":"2024-03-29T02:00:00+00:00","waveHeight":{"icon":0.9,"noaa":0.08,"sg":0.9}},{"airTemperature":{"noaa":28.72,"sg":28.72},"time":"2024-03-29T03:00:00+00:00","waveHeight":{"icon":0.9,"noaa":0.1,"sg":0.9}},{"airTemperature":{"noaa":28.77,"sg":28.77},"time":"2024-03-29T04:00:00+00:00","waveHeight":{"icon":0.9,"noaa":0.1,"sg":0.9}},{"airTemperature":{"noaa":28.81,"sg":28.81},"time":"2024-03-29T05:00:00+00:00","waveHeight":{"icon":0.89,"noaa":0.1,"sg":0.89}},{"airTemperature":{"noaa":28.86,"sg":28.86},"time":"2024-03-29T06:00:00+00:00","waveHeight":{"icon":0.89,"noaa":0.1,"sg":0.89}},{"airTemperature":{"noaa":28.76,"sg":28.76},"time":"2024-03-29T07:00:00+00:00","waveHeight":{"icon":0.89,"noaa":0.11,"sg":0.89}},{"airTemperature":{"noaa":28.66,"sg":28.66},"time":"2024-03-29T08:00:00+00:00","waveHeight":{"icon":0.89,"noaa":0.13,"sg":0.89}},{"airTemperature":{"noaa":28.55,"sg":28.55},"time":"2024-03-29T09:00:00+00:00","waveHeight":{"icon":0.89,"noaa":0.14,"sg":0.89}},{"airTemperature":{"noaa":28.71,"sg":28.71},"time":"2024-03-29T10:00:00+00:00","waveHeight":{"icon":0.89,"noaa":0.13,"sg":0.89}},{"airTemperature":{"noaa":28.87,"sg":28.87},"time":"2024-03-29T11:00:00+00:00","waveHeight":{"icon":0.88,"noaa":0.11,"sg":0.88}},{"airTemperature":{"noaa":29.04,"sg":29.04},"time":"2024-03-29T12:00:00+00:00","waveHeight":{"icon":0.88,"noaa":0.1,"sg":0.88}},{"airTemperature":{"noaa":28.99,"sg":28.99},"time":"2024-03-29T13:00:00+00:00","waveHeight":{"icon":0.88,"noaa":0.09,"sg":0.88}},{"airTemperature":{"noaa":28.94,"sg":28.94},"time":"2024-03-29T14:00:00+00:00","waveHeight":{"icon":0.88,"noaa":0.07,"sg":0.88}},{"airTemperature":{"noaa":28.89,"sg":28.89},"time":"2024-03-29T15:00:00+00:00","waveHeight":{"icon":0.88,"noaa":0.06,"sg":0.88}},{"airTemperature":{"noaa":28.76,"sg":28.76},"time":"2024-03-29T16:00:00+00:00","waveHeight":{"icon":0.88,"noaa":0.05,"sg":0.88}},{"airTemperature":{"noaa":28.62,"sg":28.62},"time":"2024-03-29T17:00:00+00:00","waveHeight":{"icon":0.88,"noaa":0.05,"sg":0.88}},{"airTemperature":{"noaa":28.49,"sg":28.49},"time":"2024-03-29T18:00:00+00:00","waveHeight":{"icon":0.88,"noaa":0.04,"sg":0.88}},{"airTemperature":{"noaa":28.46,"sg":28.46},"time":"2024-03-29T19:00:00+00:00","waveHeight":{"icon":0.88,"noaa":0.04,"sg":0.88}},{"airTemperature":{"noaa":28.42,"sg":28.42},"time":"2024-03-29T20:00:00+00:00","waveHeight":{"icon":0.89,"noaa":0.03,"sg":0.89}},{"airTemperature":{"noaa":28.38,"sg":28.38},"time":"2024-03-29T21:00:00+00:00","waveHeight":{"icon":0.89,"noaa":0.03,"sg":0.89}},{"airTemperature":{"noaa":28.46,"sg":28.46},"time":"2024-03-29T22:00:00+00:00","waveHeight":{"icon":0.89,"noaa":0.04,"sg":0.89}},{"airTemperature":{"noaa":28.54,"sg":28.54},"time":"2024-03-29T23:00:00+00:00","waveHeight":{"icon":0.9,"noaa":0.04,"sg":0.9}},{"airTemperature":{"noaa":28.63,"sg":28.63},"time":"2024-03-30T00:00:00+00:00","waveHeight":{"icon":0.9,"noaa":0.05,"sg":0.9}}],"meta":{"cost":1,"dailyQuota":10,"end":"2024-03-30 00:00","lat":-8.54426653582586,"lng":119.64807496512573,"params":["waveHeight","airTemperature"],"requestCount":2,"start":"2024-03-28 00:00"}}

const getMarine = async (req, res) => {
  const lat = req.query.lat;
  const lng = req.query.lng;
  const params = 'waveHeight,airTemperature';
  const apiKey = process.env.STORMGLASS_API_KEY;

  if (!lat || !lng) return res
    .status(500)
    .send(responseCreator({message: "Need lat/long parameters"}));
  
  console.log(lat, lng);
  console.log(apiKey);
  try {
    const response = await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
      headers: {
        'Authorization': `${apiKey}`
      }
    });
    const data = await response.json();
    return res.status(200).send(responseCreator({ data }));
  } catch (error) {
    return res
      .status(500)
      .send(responseCreator({ message: 'Something went wrong' }));
  }
};

module.exports = { getMarine };
