/*
Ecrire un programme qui affiche tous les nombres entre 1 et 100 avec les exceptions suivantes:

- Il affiche "Fizz" à la place des nombres divisibles par 3
- Il affiche "Buzz" à la place des nombres divisibles par 5 et non par 3

- Puis afficher "Fizzbuzz" pour les nombres divisibles par 3 et 5.
*/


for (var nombre = 1; nombre <= 100 ; nombre++){
  if ((nombre % 3 === 0) && (nombre % 5 === 0)){
    console.log("Fizzbuzz");
  } else if (nombre % 3 === 0){
    console.log("Fizz");
  }else if (nombre % 5 === 0){
    console.log("Buzz");
  }else{
    console.log(nombre);
  }
}
