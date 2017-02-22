// Déclaration de la fonction nommée direBonjour()
function direBonjour() {
  // Instruction
  console.log("Bonjour !");
}

console.log("Début du programme");
// Appel de la fonction
direBonjour();
console.log("Fin du programme");


// VALEUR DE RETOUR

function direBonjourA() {
  return "Bonjour !";
}

console.log("Début du programme");
var resultat = direBonjourA();
console.log(resultat);
console.log("Fin du programme");

// VARIABLES LOCALES

function direBonjourB() {
  var message = "Bonjour !";
  return message;
}

console.log(direBonjourB());

// PASSAGE DE PARAMETRES

function direBonjourC(prenom) {
  var message = "Bonjour, " + prenom + " !";
  return message ;
}

console.log(direBonjourC("Baptiste"));
console.log(direBonjourC("Sophie"));

function presentation(prenom, age) {
  console.log("Tu t'appelles " + prenom + " et tu as " + age + " ans !");
}

presentation("Garance", 7);
presentation(3, "Prosper");
