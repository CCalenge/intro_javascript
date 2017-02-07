// Conversion Celsius/Farheneit

// saisie de la température en Celsius

var celsius = Number(prompt("Saisissez une température en degrés Celsius : "));

// Calcul de Conversion

/*
[°C] = ([°F] - 32) x 5/9
[°F] = [°C] x 9/5 + 32
*/

var farheneit = celsius * 9/5 + 32 ;

// Affichage du résultat

console.log(celsius + " °C = " + farheneit + " °F.");
