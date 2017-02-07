/* Calculer un prix TTC à partir d'un prix hors taxe */

// Saisie du prix hors taxe
var prixHT = Number (prompt("Veuillez saisir le prix hors taxe : "));

// Calcul du prix TTC
var tauxTVA = 19.6 / 100 ;
var prixTTC = prixHT * (1 + tauxTVA);

// Affichage du résultat
console.log ("Le prix TTC est de "+ prixTTC + " euros");
