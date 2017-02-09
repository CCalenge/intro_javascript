/*
Ni oui ni non

Voulez-vous jouer au ni oui ni non ?
oui -> Vous avez perdu
non -> Vous avez perdu
Autre -> Voulez-vous jouer au ni oui ni non ?
*/
var reponse = prompt("Voulez-vous jouer au ni oui ni non ?");

while ((reponse !== "oui") && (reponse !== "non")){
  reponse = prompt("Voulez-vous jouer au ni oui ni non ?");
}
console.log("Vous avez perdu !");
