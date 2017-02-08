for (var i = 1; i <= 10; i++){
  if (i % 2 === 0) {
    console.log(i + " est pair");
  } else {
    console.log(i + " est impair");
  }
}

console.log("Choix de l'utilisateur");
var choixUti = Number(prompt("Choisissez un nombre"));
for (var i = choixUti; i < choixUti + 10; i++){
  if (choixUti % 2 === 0){
    console.log(i + " est pair");
  } else {
    console.log(i + " est impair");
  }
}
