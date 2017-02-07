/* COMPARAISON DE NOMBRES
a est plus petit que b
a est plus grans que b
a et b sont égaux
*/

var nombre1 = Number(prompt("Entrez le nombre 1 :"));
var nombre2 = Number(prompt("Entrez le nombre 2 : "));

if (nombre1 < nombre2) {
  console.log(nombre1 + " est inférieur à " + nombre2);
} else if (nombre1 > nombre2) {
  console.log(nombre1 + " est supérieur à " + nombre2);
} else {
  console.log(nombre1 +" et " + nombre2 + " sont égaux");
}
