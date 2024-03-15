// Generar dos números aleatorios entre 1 y 100
const number1 = Math.floor(Math.random() * 100) + 1;
const number2 = Math.floor(Math.random() * 100) + 1;

// Mostrar los números generados
console.log("Número 1:", number1);
console.log("Número 2:", number2);

// Suma de los dos números
let addition = number1 + number2;
console.log("Suma:", addition);

// Resta de los dos números
let subtraction = number1 - number2;
console.log("Resta:", subtraction);

// Multiplicación de los dos números
let multiplication = number1 * number2;
console.log("Multiplicación:", multiplication);

// División de los dos números (redondeo al entero más cercano)
let division = Math.round(number1 / number2);
console.log("División:", division);

// Incrementar el valor de un número
let increase = 5;
console.log("Incremento:", increase);
increase++; // Incremento en 1
console.log("Incremento después de ++:", increase);

// Redondear un número
const decimalNumber = Math.PI;
console.log("Valor de Pi:", decimalNumber);

let roundingPi = Math.floor(decimalNumber);
console.log("Redondeo de Pi hacia abajo:", roundingPi);

let roundUpPi = Math.ceil(decimalNumber);
console.log("Redondeo de Pi hacia arriba:", roundUpPi);
