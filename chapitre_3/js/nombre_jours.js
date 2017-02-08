/*
Exercice : afficher le nombre de jours d'un mois
*/

var mois = Number(prompt("Entrez le numéro d'un mois :"));
switch(mois) {
  case 1 :
  console.log("Ce mois comporte 31 jours !");
  break;
  case 2 :
  console.log("Ce mois comporte 28 jours !");
  break;
  case 3 :
  console.log("Ce mois comporte 31 jours !");
  break;
  case 4 :
  console.log("Ce mois comporte 30 jours !");
  break;
  case 5 :
  console.log("Ce mois comporte 31 jours !");
  break;
  case 6 :
  console.log("Ce mois comporte 30 jours !");
  break;
  case 7 :
  console.log("Ce mois comporte 31 jours !");
  break;
  case 8 :
  console.log("Ce mois comporte 31 jours !");
  break;
  case 9 :
  console.log("Ce mois comporte 30 jours !");
  break;
  case 10 :
  console.log("Ce mois comporte 31 jours !");
  break;
  case 11 :
  console.log("Ce mois comporte 30 jours !");
  break;
  case 12 :
  console.log("Ce mois comporte 31 jours !");
  break;
  default :
  console.log("Mois non reconnu !");
}


/*
Exercice : afficher le nombre de jours d'un mois
*/
//MAIS C'EST BIEN SÛR ! LA MISE EN FACTEUR COMMUN ! ;)

var mois = Number(prompt("Entrez le numéro d'un mois :"));

// Solution avec des if
if (mois === 1 || mois === 3 || mois === 5 || mois === 7 || mois === 8 ||
    mois === 10 || mois === 12) {
    console.log("Ce mois comporte 31 jours.");
} else if (mois === 4 || mois === 6 || mois === 9 || mois === 11) {
    console.log("Ce mois comporte 30 jours.");
} else if (mois === 2) {
    console.log("Ce mois comporte 28 jours.");
} else {
    console.log("Mois non reconnu !");
}
