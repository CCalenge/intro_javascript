/*
Ecrire un programme qui fait saisir un nombre à l'utilisateur puis affiche la table de multiplication de ce nombre.

Entrez un nombre entre 2 et 9 :
Voici la table de multiplication de 3 multiplication_while.js:10:1
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30
*/


var nombre = Number(prompt("Entrez un nombre entre 1 et 10 :"));
var multiplicateur = 1;

while (nombre < 1 || nombre > 9){
  var nombre = Number(prompt("Entrez un nombre entre 1 et 10 :"));
}
console.log("Voici la table de multiplication de " + nombre);
while (multiplicateur <= 10){

  var resultat = multiplicateur * nombre;
  console.log(nombre +" x "+ multiplicateur + " = " + resultat);
  multiplicateur++;
}


/*
CORRIGE


var nombre = 0; // Valeur par défaut permettant d'entrer dans la boucle
while ((nombre < 2) || (nombre > 9)) {
    nombre = Number(prompt("Entrez un nombre entre 2 et 9 : "));
}

console.log("Voici la table de multiplication de " + nombre);
var i = 1;
while (i <= 10) {
    console.log(nombre + " x " + i + " = " + (nombre * i));
    i++;
}

*/
