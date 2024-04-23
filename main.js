// 1 - Converta Celsius em Fahrenheit usando JavaScritp

// quantidade de graus celsius
let celsius = 33;

/* equação de conversão Celsius para Fahrenheit:
   Fahrenheit = Celsius * (9/5) + 32 */
let fahrenheit = celsius * (9 / 5) + 32;

// conversão de número decimal para número inteiro usando Math.floor
fahrenheit = Math.floor(fahrenheit);

console.log(
  `A Temperatura em Celsius convertida para Fahrenheit é de ${fahrenheit} graus Fahrenheit.`
);

// 2- Converta Fahrenheit em Celsius usando JavaScritp

// quantidade de graus Fahrenheit
let Fahrenheit = 215;

/* equação de conversão Fahrenheit para Celsius:
   Celsius = (Fahrenheit - 32) / 1.8 */
let Celsius = (Fahrenheit - 32) / 1.8;

// conversão de número decimal para número inteiro usando Math.floor
Celsius = Math.floor(Celsius);

console.log(
  `A Temperatura em Fahrenheit convertida para Celsius é de ${Celsius} graus Celsius.`
);

// 3 - Converta Celsius em Kelvin usando JavaScript

// quantidade de graus celsius
let celsiusInKelvin = 215;

/* equação de conversão Celsius para Kelvin:
   Kelvin = Celsius + 213.15 */
let Kelvin = celsiusInKelvin + 273.15;

// conversão de número decimal para número inteiro usando Math.floor
Kelvin = Math.floor(Kelvin);

console.log(
  `A Temperatura em Celsius convertida para Kelvin é de ${Kelvin} Kelvin.`
);

// 4 - Converta Kelvin em Celsius usando JavaScript

// quantidade de graus Kelvin
let kelvinInCelsius = 78;

/* equação de conversão Kelvin para Celsius:
   Celsius = Kelvin - 273.15 */
let celsiusKelvin = kelvinInCelsius - 273.15;

// conversão de número decimal para número inteiro usando Math.floor
celsiusKelvin = Math.floor(celsiusKelvin);

console.log(
  `A Temperatura em Kelvin convertida para Celsius é de ${celsiusKelvin} graus Celsius`
);
