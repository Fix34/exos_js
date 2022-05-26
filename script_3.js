console.log("Exo de la pyramide")
let user_number = prompt("Combien d'étages veux-tu à ta pyramide ?")
let number = "";
// Tant que i est inférieur au user_number on ajoute 1 à i donc 1er étage i = 1 puis 2e étage i = 2 etc...
for (let i = 1 ; i <= user_number ; i ++) {
    // on imprime les espaces : tant que j est inférieur à UE - i (qui augente de 1à chaque étage) on ajoute 1 à j
    for (let j = 0; j < user_number - i; j++) {
        // puis on imprime les espaces donc 1er étage si UE = 5 => i = 1 et j 5 - 1 = 4 donc number va imprimer 4 espaces au 1er étage
        number += " ";
    }
    // on imprime les #
    for (let k = 0; k < i; k++) {
        // Même fonctionnement au 1er étage Si UE = 5, k = 0 puis 1 puis 2 etc....
        number += "#";
    }
    number += "\n"; // On change de ligne à la fin de chaque éxecution de la fonction
}
console.log(number);