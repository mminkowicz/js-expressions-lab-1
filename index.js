// Temperature Data
const celsiusTemps = [25, 18, 15, 28, 20, 23, 30, 22, 26, 24, 21, 27, 19, 17, 29];
const fahrenheitTemps = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76];

// Convert each Fahrenheit to Celsius//

const fahrenheitTempsToCelsius = [
  (32 - 32) * 5 / 9,   
  (70 - 32) * 5 / 9,  
  (80 - 32) * 5 / 9,   
  (72 - 32) * 5 / 9,   
  (68 - 32) * 5 / 9,   
  (75 - 32) * 5 / 9,   
  (82 - 32) * 5 / 9,   
  (65 - 32) * 5 / 9,   
  (77 - 32) * 5 / 9,   
  (78 - 32) * 5 / 9,   
  (73 - 32) * 5 / 9,   
  (79 - 32) * 5 / 9,   
  (71 - 32) * 5 / 9,   
  (74 - 32) * 5 / 9,   
  (76 - 32) * 5 / 9    
];

// Convert each Celsius to Fahrenheit//
const celsiusTempsToFahrenheit = [
(25 * 9 / 5) + 32, 
  (18 * 9 / 5) + 32, 
  (15 * 9 / 5) + 32, 
  (28 * 9 / 5) + 32, 
  (20 * 9 / 5) + 32, 
  (23 * 9 / 5) + 32, 
  (30 * 9 / 5) + 32, 
  (22 * 9 / 5) + 32, 
  (26 * 9 / 5) + 32, 
  (24 * 9 / 5) + 32, 
  (21 * 9 / 5) + 32, 
  (27 * 9 / 5) + 32, 
  (19 * 9 / 5) + 32, 
  (17 * 9 / 5) + 32, 
  (29 * 9 / 5) + 32  
];




const tot_temperature_in_celsius =
  25 + 18 + 15 + 28 + 20 + 23 + 30 + 22 + 26 + 24 + 21 + 27 + 19 + 17 + 29 +
  0 + 21.111 + 26.667 + 22.222 + 20 + 23.889 + 27.778 + 18.333 + 25 +
  25.556 + 22.778 + 26.111 + 21.667 + 23.333 + 24.444;




const tot_temperature_in_fahrenheit =
  32 + 70 + 80 + 72 + 68 + 75 + 82 + 65 + 77 + 78 + 73 + 79 + 71 + 74 + 76 +
  77 + 64.4 + 59 + 82.4 + 68 + 73.4 + 86 + 71.6 + 78.8 + 75.2 + 69.8 +
  80.6 + 66.2 + 62.6 + 84.2;
  
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

console.log("Total Temp F:", tot_temperature_in_fahrenheit);
console.log("Average Temp F:", avg_temperature_in_fahrenheit);

console.log("Total Temp C:", tot_temperature_in_celsius);
console.log("Average Temp C:", avg_temperature_in_celsius);
