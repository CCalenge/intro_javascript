// Saisie et affichage d'informations

var prenom = prompt("Entrez votre prénom :");
console.log("Bonjour, " + prenom);
// console.log() n'interrompt pas l'exécution du code contrairement à alert()

// Saisie d'un nombre
/* prompt() renvoie toujours une valeur de type chaîne
penser à convertir cette valeur avec l'ordre Number() pour comparer la valeur avec d'autres nombres ou l'utiliser dans des expressions mathématiques
*/

var saisie = prompt("Entrez un nombre :"); // saisie de type chaîne
var nb = Number(saisie); // nb est de type nombre
console.log("Bonjour, "+ prenom + " . Vous avez entré le nombre " + nb);

// IMPORTANCE DU NOMMAGE DES VARIABLES
var nb1 = 5.5;
var nb2 = 3.14;
var nb3 = 2 * nb2 * nb1;
console.log(nb3);

var rayon = 5.5;
var pi = 3.14;
var perimetre = 2 * pi * rayon;
console.log(perimetre);

/* Choisir des noms significatifs
Bannir les caractères accentués
Ne pas utiliser les noms réservés du langage
Adopter une convention de nommage camelCase ou lowerCamelCase
JavaScript est sensible à la casse (case sensitive)
*/
