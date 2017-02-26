/*
Exercice la fonction min() renvoie le minimum des deux nombres passés en paramètres
*/
function min(x, y){
  var x;
  var y;
  if (x < y) {
    return x;
  } else {
    return y;
  }
}


console.log(min(4.5, 5)); // Doit afficher 4.5
console.log(min(19, 9)); // Doit afficher 9
console.log(min(1, 1)); // Doit afficher 1
