// Affecter une valeur à une variable

var a;
a = 3.14;
console.log(a);

/*
correspond à :
var a = 3.14;
console.log(a);
*/

//Incrémenter une variable de type nombre

var b = 0; // b contient la valeur 0
b += 1; // b contient la valeur 1
b++; //b contient la valeur 2
console.log(b) // affiche la valeur 2

//Incrémenter la valeur d'une variable pendant le débogage cf. vidéo -> débogage -> espionner


//La notion d'expression

// 3 est une expression dont la valeur est le nombre 3
var c = 3;
// c'est une expression dont la valeur est celle de c (ici 3)
var d = c;
// (d + 1) est une expression
// Sa valeur est celle de d augmentée de 1 (ici 4)
d = d + 1; //d contient la valeur 4
console.log(d); // affiche 4

var e = 3 + 2 * 4; // e contient la valeur 11
console.log(e);
e = (3 + 2) * 4; //contient la valeur  20
console.log(e);
