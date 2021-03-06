var nombre1 = 5;
var nombre2 = 3;

// Code

var nombre1 = nombre2 ;
var nombre2 = nombre1 + 2 ;


console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5



// CORRECTION

var nombre1 = 5;
var nombre2 = 3;

// Solution utilisant d'une variable temporaire
var temp = nombre1;
nombre1 = nombre2;
nombre2 = temp;

console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5

// OU

var nombre1 = 5;
var nombre2 = 3;

/* Solution utilisant l'addition et la soustraction
(ne fonctionne qu'avec des nombres) */

nombre1 = nombre1 + nombre2;
nombre2 = nombre1 - nombre2;
nombre1 = nombre1 - nombre2;

console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5
