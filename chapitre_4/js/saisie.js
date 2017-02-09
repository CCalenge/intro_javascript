/*
Ecrire un programme qui fait saisir un nombre à l'utilisateur jusqu'à ce que ce nombre soit inférieur ou égal à 100

Ensuite, améliorer le programme pour que le nombre saisi soir compris en 50 et 100.

! Quel est l'inverse de "compris entre 50 et 100"?
*/

var nombre = Number(prompt("Entrez un nombre entre 50 et 100"));
while (nombre < 50 || nombre >= 100){
  var nombre = Number(prompt("Entrez un nombre entre 50 et 100"));
} 
