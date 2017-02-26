/*
Exercice : écrire un programme qui contient deux fonctions perimetre() et aire() qui calculent respectivement le périmètre et l'aire d'un cercle à partir de son rayon.
Tester les fonctions avec un rayon choisi par l'utilisateur.

calcul du périmètre :
  Périmètre = 2 x π x R

calcul de l'aire :
  Aire = π x R²

la valeur du nombre Pi peut s'obtenir en JavaScript en écrivant Math.PI

La fonction Math.pow() renvoie un nombre à une certaine puissance, c'est-à-dire baseexposant.
Syntaxe

Math.pow(base, exposant);

*/



function perimetre(rayon){
 return 2 * Math.PI * rayon;
}

function aire(rayon){
  return  Math.PI * Math.pow(rayon,2);
}

var rayon = Number(prompt("Entrez le rayon d'un cercle pour obtenir son aire et son périmètre : "));
console.log("Le périmètre d'un cercle de " + rayon + " cm est " + perimetre(rayon)+ " cm. Son aire est de " + aire(rayon) + " cm.");
