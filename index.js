// Temperature Data
const celsiusTemps = [25, 18, 15, 28, 20, 23, 30, 22, 26, 24, 21, 27, 19, 17, 29];
const fahrenheitTemps = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];

    const celsiusTempsToFahrenheit = celsiusTemps.map(temp => ((temp * 9 / 5) + 32));
    const fahrenheitTempsToCelsius = fahrenheitTemps.map(temp => ((temp - 32) * 5 / 9));

    const tot_temperature_in_fahrenheit = 32 + 70 + 80 + 72 + 68 + 75 + 82 + 65 + 77 + 78 + 73 + 79 + 71 + 74 + 76;
    const tot_temperature_in_celsius = 25 + 18 + 15 + 28 + 20 + 23 + 30 + 22 + 26 + 24 + 21 + 27 + 19 + 17 + 29;

    console.log("Total Temp C", tot_temperature_in_celsius)
    console.log("Total Temp F",tot_temperature_in_fahrenheit)

    const avg_temperature_in_celsius = tot_temperature_in_celsius / celsiusTemps.length;
    const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / fahrenheitTemps.length;

    console.log("Celcius Average is", avg_temperature_in_celsius);
    console.log("Fahrenheit Average is", avg_temperature_in_fahrenheit);