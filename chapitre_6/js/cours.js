console.log("ABC".length); // affiche 3
console.log("Je suis une chaîne".length); // affiche 18

var mot="Kangourou";
var longueurMot = mot.length; // longueurMot contient la valeur 9
console.log(longueurMot);

/*
La syntaxe qui consiste à utiliser un point (.) entre la chaîne de caractères et le mot length s'appelle la notation pointée. Techniquement,length est ce que l'on appelle une propriété. On dit qu'on accède à la propriété length de la chaîne de caractères.
*/

// CONVERTIR UNE CHAÎNE EN MAJUSCULE OU EN MINUSCULE

// minuscule -> .toLowerCase()
// majuscule -> .toUpperCase()

var motInitial = "Bora-Bora";
var motEnMinuscules = motInitial.toLowerCase();
console.log(motEnMinuscules); // Affiche "bora-bora"
var motEnMajuscules = motInitial.toUpperCase();
console.log(motEnMajuscules); // Affiche "BORA-BORA"


// COMPARER DEUX CHAÎNES

var chaine = "azerty";
console.log(chaine === "azerty"); // Affiche true
console.log(chaine === "qwerty"); // Affiche false

// Convertir pour comparer

var valeurSaisie = "Quitter";
console.log(valeurSaisie === "quitter"); // Affiche false à cause du Q majuscule
console.log(valeurSaisie.toLowerCase() === "quitter"); // Affiche true

/*
ACCEDER A UN CARACTERE A PARTIR DE SON INDICE
*/

var sport = "Tennis-ballon"; // 13 caractères
console.log(sport.charAt(0)); // Affiche "T"
console.log(sport[0]); // Affiche "T"
console.log(sport.charAt(6)); // Affiche "-"
console.log(sport[6]); // Affiche "-"

// Pour accéder au dernier caractère

var longueurSport = sport.length;
console.log(sport[longueurSport - 1]); // Affiche "n"
console.log(sport[longueurSport]); // Affiche undefined : longueur dépassée !

// PARCOURIR UNE CHAÎNE CARACTERE PAR CARACTERE

var prenom = "Odile";
for (var i = 0; i < prenom.length; i++) {
  console.log(prenom[i]);
}
