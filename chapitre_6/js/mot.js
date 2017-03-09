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


// Compter le nombre de voyelles


function compterNbVoyelles() {
  var nbVoyelle = 0;
  var nbConsomne = 0;

  for (var i = 0; i < saisie.length; i++){

    var lettre = saisie[i];
    if ((lettre === "a") || (lettre === "e") || (lettre === "i") || (lettre === "o") || (lettre === "u") || (lettre === "y")) {
      nbVoyelle++;
    } else {
      nbConsomne++;
    }
  }
  var message = saisie + " contient " + nbVoyelle + " voyelle(s) et " + nbConsomne + " consomne(s)";
  
  return message;
}

var resultat = compterNbVoyelles();
console.log(resultat);
