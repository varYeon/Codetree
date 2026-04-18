const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const forecastsLines = input.slice(1, n + 1).map(line => line.split(' '));

class Forecast {
  constructor(date, dayOfWeek, weather) {
    this.date = date;
    this.dayOfWeek = dayOfWeek;
    this.weather = weather;
  }
}

const forecasts = forecastsLines.map(([date, dayOfWeek, weather]) => {
  return new Forecast(date, dayOfWeek, weather);
});
/*
[
  Forecast { date: '2036-12-27', dayOfWeek: 'Sun', weather: 'Snow' },
  Forecast { date: '2052-08-28', dayOfWeek: 'Wed', weather: 'Rain' },
  Forecast { date: '2043-03-21', dayOfWeek: 'Sat', weather: 'Sun' },
  Forecast { date: '2077-08-19', dayOfWeek: 'Thu', weather: 'Rain' }
]
 */

const target = forecasts.find(forecast => forecast.weather === "Rain");

console.log(`${target.date} ${target.dayOfWeek} ${target.weather}`)
