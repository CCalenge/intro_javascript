/*
JEU DE RÔLE
*/

// Création d'un personnage

var perso = {
  nom: "Aurora",
  sante: 150, // nombre de points de vie
  force: 25
};

// Un objet peut avoir un autre objet comme propriété !

console.log(perso.nom + " a " + perso.sante + " points de vie et " + perso.force + " en force.");

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

console.log("Après avoir été blessée par une flèche et avoir trouvé un bracelet de force, " + perso.nom + " a " + perso.sante + " points de vie et " + perso.force + " en force.");
