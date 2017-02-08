/*
 La boucle WHILE

 Elle permer de répéter des instructions tant qu'une condition est vérifiée
 */

 console.log("Début du programme");
 var nombre = 1;
 while (nombre <= 5) {
   console.log(nombre);
   nombre++;
 }
 console.log("Fin du programme");

/*SYNTAXE

for (initialisation; condition; étape) {
    // instruction executées tant que la condition est vérifiée
}


/*
La boucle FOR

Pour écrire des boucles dont la condition est basée sur la valeur d'une variable qui est modifiée dans le corps de la boucle.

*/
console.log("Début du programme");

var compteur;
for (compteur = 1; compteur <= 5; compteur ++) {
    console.log(compteur);
}
console.log("Fin du programme");

/*
SYNTAXE

for (initialisation; condition; étape) {

    // instruction executées tant que la condition est vérifiée

}

L'initialisation se produit une seule fois, au début de l'exécution.

La condition est évaluée avant chaque tour de boucle. Si elle est vraie, un nouveau tour de boucle est effectué. Sinon, la boucle est terminée.

L'étape  est réalisée après chaque tour de boucle.


*/

// Autre syntaxe :
console.log("Début du programme");

for(var compteur = 1; compteur <= 5; compteur++) {
  console.log(compteur);
}
console.log("Fin du programme");

/*
ERREURS FREQUENTES

la boucle infinie avec la boucle while

var nombre = 1;
while (nombre <= 5) {
    console.log(nombre);
    // La variable n'est plus modifiée : la condition sera toujours vraie
}

Manipulation du compteur d'une boucle FOR

for (var compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
    compteur++; // La variable est modifiée dans le corps de la boucle
}

résultat :
1
3
5

A chaque tour de boucle, la variable compteur est incrémentée deux fois : dans le corps de la boucle, puis dans l'étape exécutée à la fin de chaque tour.
*/

/*
Choix entre WHILE et FOR

FOR : le nombre de tours de boucle doit être connu à l'avance.

WHILE : le nombre de tour est inconnu à l'avance.
*/

var lettre = "";
while (lettre !== "X") {
    lettre = prompt("Tapez une lettre ou X pour sortir :");
    console.log(lettre);
}


var lettre ="";
for (; lettre !== "X";){
  lettre = prompt("Tapez une lettre ou X pour sortir :");
  console.log(lettre);
}
