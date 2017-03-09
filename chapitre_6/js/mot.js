/*
Exercice : jouer avec les chaînes de caractères
*/

var saisie = prompt("Entrez un mot :");

// Compter le nombre de caractères
console.log("Le mot " + saisie + " contient " + saisie.length + " caractère(s).")

// Ecrire en minuscules
console.log("Il s'écrit en minuscules " + saisie.toLowerCase());

// Ecrire en majuscules
console.log("Il s'écrit en majuscules " + saisie.toUpperCase());


// COMPTER LE NOMBRES DE VOYELLES
/*Complétez le programme mot.js en y ajoutant une fonction compterNbVoyelles() qui prend un mot en paramètre et renvoie son nombre de voyelles. Utilisez cette fonction pour afficher le nombre de voyelles et de consonnes du mot.*/

var mot = saisie.toLowerCase();

function compterNbVoyelles(mot) {

  var nbVoyelle = 0;
  var nbConsonne = 0;

  for (var i = 0; i < mot.length; i++){

    var lettre = mot[i];
    if ((lettre === "a") || (lettre === "e") || (lettre === "i") || (lettre === "o") || (lettre === "u") || (lettre === "y")) {
      nbVoyelle++;
    } else {
      nbConsonne++;
    }
  }
  var message = mot + " contient " + nbVoyelle + " voyelle(s) et " + nbConsonne + " consonne(s)";

  return message;
}

var resultat = compterNbVoyelles(mot);
console.log(resultat);


// INVERSION DU MOT

//Complétez le programme mot.js avec une fonction inverser() qui prend en paramètre un mot et renvoie ce mot écrit à l'envers. Utilisez cette fonction pour afficher le mot inversé.

//function inverser()
