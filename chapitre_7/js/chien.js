/*
Modélisation d'un chien
compléter le programme chien.js pour ajouter la définition de l'objet chien
*/

// TODO : ajouter la définition de l'objet chien
var chien = {
  nom : "Crockdur",
  race : "mâtin de Naples",
  taille : 75,

  // Renvoie l'aboiement du chien
  aboyer : function(){
  var grogne = "Grrr ! Grrr !";
  return grogne;
  },
};



console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm.");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());
