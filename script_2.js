console.log("Calcul de factorielles")
// On demande au user un chiffre
let number = prompt("De quelle nombre veux tu calculer la factorielle ?")
// On initialise une variable résultat
let result = 1
// Fonction qui calcul la factorielle : 
const factorielle = () => {
    while (number >= 1) {
    result = result * number;
    number --;
}
return result
}
console.log(`le résultat est : ${factorielle()}`)
/* Fonctionnement de la fonction : 
Le number est définie par l'entrée du user
Puis on définit la résultat à 1 qu'on muliplie par le number, puis on enlève 1 au number jusqu'à ce qu'il soit = 1
Et on répète la multiplication*/
