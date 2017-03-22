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

// LA NOTION DE METHODE

// Renvoie la description d'un personnage
function decrire(personnage) {
  var description = personnage.nom + " a " + personnage.sante + " points de vie et "+ personnage.force + " en force";
  return description;
}
console.log(decrire(perso));

/*
La fonction decrire() n'utilise que les propriétés d'un personnage, qui est passé en paramètre. Plutôt que de la définir de manière externe, nous pouvons l'ajouter à la définition de notre objet sous la forme d'une nouvelle propriété :
*/

var perso = {
  nom: "Aurora",
  sante: 150,
  force: 25,
  experience: 0,

  // Renvoie la description du personnage
  decrire: function() {
    var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.experience + " points d'expérience";
    return description;
  }
};
console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante -20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

// Aurora acquiert de l'expérience
perso.experience = perso.experience + 15;

console.log(perso.decrire());
