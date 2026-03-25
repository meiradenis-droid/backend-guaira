//conversor de temperatura
const cidade = "Curitiba";
let tempCelsius = 26;

const tempFahrenheit = tempCelsius * (9/5) + 32;
const tempKelvin = tempCelsius + 273.15;

console.log(`A temperatura de ${cidade} esta ${tempCelsius} Cº`);
console.log(`Fahrenheit: ${tempFahrenheit.toFixed(1)} Fº`);
console.log(`Kelvin: ${tempKelvin.toFixed(1)} Kº`);