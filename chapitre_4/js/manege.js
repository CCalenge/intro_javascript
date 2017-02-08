console.log("Boucle WHILE");
var tour = 1;
while (tour <=10) {
  console.log("C'est le tour numéro "+ tour);
  tour++;
}

console.log("Boucle FOR");
for (var tour = 1; tour <= 10; tour++){
  console.log("Ceci est le tour numéro " + tour);
}

console.log("Choix du nombre de tours par l'utilisateur avec WHILE")
var choix = Number(prompt("Entrez un nombre de tours :"));
var tour = 1;
while (tour <= choix){
  console.log("Tour numéro " + tour);
  tour++;
}

console.log("Choix du nombre de tours par l'utilisateur avec FOR")
var choix = Number(prompt("Entrez un nombre de tours :"));
for (var tour = 1; tour <= choix; tour++){
  console.log("Tour "+ tour);
}
