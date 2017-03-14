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
    if ((lettre === "a") || (lettre === "à") || (lettre === "â") || (lettre === "e") || (lettre === "é") || (lettre === "è") || (lettre === "ê") || (lettre ===  "ë") || (lettre === "i") || (lettre === "î") || (lettre === "ï")|| (lettre === "î") || (lettre === "o") || (lettre === "ô") || (lettre === "ö") || (lettre === "u") || (lettre === "û") || (lettre === "ü")|| (lettre === "y") || (lettre === "ÿ")) {
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

/* Il existe deux techniques pour construire le mot inversé :

1  Parcourir le mot initial lettre à lettre en ajoutant chaque lettre au début (et non à la fin) du mot inversé.*/


function inverser(mot) {
  var motInverse = "";
  for (var i = 0; i < mot.length; i++) {
    motInverse = mot[i] + motInverse;
  }
  return motInverse;
}
console.log(mot +" à l'envers est " + inverser(mot));


/*  2  Parcourir le mot initial lettre à lettre mais à l'envers (de la fin vers le début).
*/

function inverserDeux(mot) {
  var motInv = "";
  for (var i = mot.length -1; i >= 0; i-- ){
    motInv = motInv + mot[i];
  }
  return motInv;
}
console.log(mot + " retourné est " + inverserDeux(mot));

/* PALINDROME
utiliser la fonction inverser() pour vérifier si le mot est un palindrome ou non
*/

if (mot === inverser(mot)){
  console.log("C'est un palindrome");
} else {
  console.log("Ce n'est pas un palindrome");
}

/*CONVERSION EN LEET SPEAK
Complétez le programme mot.js avec une fonction convertirEnLeetSpeak() qui prend en paramètre un mot et renvoie son équivalent leet. Utilisez cette fonction pour afficher le mot converti.

Afin d'alléger le code de la fonction convertirEnLeetSpeak(), créez une autre fonction trouverLettreLeet() qui prend en paramètre une lettre et renvoie son équivalent leet. Cette fonction sera appelée pour chaque lettre du mot initial.
*/

function convertirEnLeetSpeak(mot){
  var motLeet = "";
  for(var i = 0; i< mot.length; i++){
    motLeet = motLeet + trouverLettreLeet(mot[i]);
  }
  return motLeet;
}

function trouverLettreLeet(lettre){
  var lettreLeet = lettre;
  switch(lettre){
    case "a":
    lettreLeet = "4";
    break;
    case "b":
    lettreLeet = "8";
    break;
    case "e":
    lettreLeet = "3";
    break;
    case "l":
    lettreLeet = "1";
    break;
    case "o":
    lettreLeet = "0";
    break;
    case "s":
    lettreLeet = "5";
    break;
  }
  return lettreLeet;
}

var motLeetSpeak = convertirEnLeetSpeak(mot);
console.log(mot + " s'écrit en Leet Speak " + motLeetSpeak);
