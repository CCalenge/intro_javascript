var stylo = {
  type: "bille",
  couleur: "bleu",
  marque: "Bic"
};

console.log(stylo.type); // Affiche "bille"
console.log(stylo.couleur); // Affiche "bleu"
console.log(stylo.marque); // Affiche "Bic"

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

/*
MODIFICATION D'UN OBJET
*/

stylo.couleur = "rouge"; // Modifie la couleur de l'encre
console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en "+ stylo.couleur);

/*
AJOUT D'UNE PROPRIETE
*/
stylo.prix = 2.5; // Ajout de la propriété prix à l'objet stylo

console.log("Il coûte " + stylo.prix + " euros");
