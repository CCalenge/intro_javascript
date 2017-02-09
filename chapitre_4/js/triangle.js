/*
Construire et afficher un triangle de 7 lignes
#
##
###
####
#####
######
#######

*/
var ligne = " ";

for (var diese = 1 ; diese <= 7 ; diese++){
 ligne = ligne + "#";
 console.log(ligne);
}

// ou :

var ligne = " ";

for (var diese = 1 ; diese <= 7 ; diese++){
 ligne += "#";
 console.log(ligne);
}
