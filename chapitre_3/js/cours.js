// L'INSTRUCTION IF

var nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
    console.log(nombre + " est positif");
}

// if (condition) {
//     // instructions exécutées quand la condition est vraie
// "Si la condition est vraie, alors exécute les instructions contenues dans le bloc de code entre accolades"
// }

// LA NOTION DE CONDITION

/* Une condition est une expression dont l'évaluation produit une valeur soit vraie (true), soit fausse (false): on parle de valeur booléenne.

if (true) {
    // la condition du if est toujours vraie :
    // les instructions de ce bloc seront toujours exécutées
}
if (false) {
    // la condition du if est toujours fausse :
    // les instructions de ce bloc ne seront jamais exécutées
}
*/

var nombre = Number(prompt("Entrez un nombre :"));
if (nombre >= 0) {
  console.log(nombre + " est positif ou nul.")
}

// L'INSTRUCTION ELSE

var nombre = (prompt("Entrez un nombre :"));
if (nombre > 0) {
  console.log(nombre + " est positif");
}
else {
  console.log(nombre + " est négatif ou nul");
}

// IMBRIQUER DES CONDITIONS

var nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0){
  console.log(nombre + " est positif");
} else { // nombre <= 0
  if (nombre < 0) {
    console.log(nombre + " est négatif");
  } else { // nombre === O
    console.log(nombre + " est nul");
  }
}

/* Peut aussi s'écrire :

var nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
    console.log(nombre + " est positif");
} else if (nombre < 0) {
    console.log(nombre + " est négatif");
} else {
    console.log(nombre + " est nul");
}
*/

// CREER DES CONDITIONS COMPOS2ES
// L'opérateur logique ET
if ((nombre >= 0) && (nombre <= 100)) {
  console.log(nombre + " est compris entre 0 et 100");
}

/*
console.log(true && true); // Affiche true
console.log(true && false); // Affiche false
console.log(false && true); // Affiche false
console.log(false && false); // Affiche false
*/

// L'opérateur logique OU

if ((nombre < 0) || (nombre > 100)) {
  console.log(nombre + " est en dehors de l'intervalle [0, 100]");
}

/*
console.log(true || true); // Affiche true
console.log(true || false); // Affiche true
console.log(false || true); // Affiche true
console.log(false || false); // Affiche false
*/

// L'opérateur logique NON (!)

if (!(nombre > 100)) {
  console.log(nombre + " est inférieur ou égal à 100");
}

/*
console.log(!true); // Affiche false
console.log(!false); // Affiche true
*/

// EXPRIMER UN CHOIX

var meteo = prompt("Quel temps fait-il dehors ?");
if (meteo === "soleil") {
  console.log("Sortez en t-shirt.");
} else if (meteo === "vent") {
  console.log("Sortez en pull.");
} else if (meteo === "pluie") {
  console.log("Sortez en blouson.")
} else if (meteo === "neige") {
  console.log("Restez au chaud à la maison.")
} else {
  console.log("Je n'ai pas compris !")
}

// Autre écriture

var meteo = prompt("Quel temps fait-il dehors ?");
switch (meteo) {
case "soleil":
    console.log("Sortez en t-shirt.");
    break;
case "vent":
    console.log("Sortez en pull.");
    break;
case "pluie":
    console.log("Sortez en blouson.");
    break;
case "neige":
    console.log("Restez au chaud à la maison.");
    break;
default:
    console.log("Je n'ai pas compris !");
}

// SWITCH
/* L'instruction switch déclenche l'exécution d'un bloc d'instructions parmi plusieurs possibles. Seul le bloc correspondant à la valeur de l'expression testée sera pris en compte. Sa syntaxe est la suivante.

switch (expression) {
case valeur1:
    // instructions exécutées quand expression vaut valeur1
    break;
case valeur2:
    // instructions exécutées quand expression vaut valeur2
    break;
...
default:
    // instructions exécutées quand aucune des valeurs ne correspond
}
*/

// BREAK

/*
Les instructions break; dans les blocs case sont indispensables pour sortir du switch et éviter de passer d'un bloc à un autre.

var x = "abc";
switch (x) {
case "abc":
    console.log("x vaut abc");
    // pas de break : on passe au bloc suivant !
case "def":
    console.log("x vaut def");
    break;
}
