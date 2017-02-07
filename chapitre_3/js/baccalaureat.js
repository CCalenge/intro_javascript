/*
Entrez une moyenne de baccalauréat
Moins de 10 : Le candidat est recalé
10 à 11 Le candidat est reçu
egal ou supérieur à 12 : Le candidat est reçu avec mention
*/

var moyenne = Number(prompt("Entrez une moyenne de baccalauréat :"));

if (moyenne < 10) {
  console.log("Le candidat est recalé");
} else if (moyenne >= 10 && moyenne <= 11) {
  console.log("Le candidat est reçu");
} else {
  console.log("Le candidat est reçu avec mention");
}
