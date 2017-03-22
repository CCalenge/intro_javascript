/*
Modélisation d'un compte bancaire
*/

var compte = {
  titulaire: "Alex",
  solde: 0,

  crediter : function(montant){
    this.solde = this.solde + montant;
    return this.solde;
  },

  debiter : function(montant){
    this.solde = this.solde - montant;
    return this.solde;

  },

  decrire : function(){
    var description = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros";
    return description;
  }
};

console.log(compte.decrire());
var credit = Number(prompt("Saisissez un montant à créditer : "));
compte.crediter(credit);
var debit = Number(prompt("Saisissez une montant à débiter : "));
compte.debiter(debit);
console.log(compte.decrire());
