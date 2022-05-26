const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
// On défini une variable qui va filtrer dans la const entrepreneurs grâce à la fonction seventies les entrées dont year est compris entre 1970 et 1980
var bornin70 = entrepreneurs.filter(function(seventies) {
    return seventies.year <= 1980 && seventies.year >= 1970;
});
console.log("Tableau des entrepreneurs nés dans les années 70:")
console.log(bornin70)
//On défini un tableau
firstlast = []
// on défini i qui va parcourir tout les index d'entrepreneur
for (let i=0; i < entrepreneurs.length ; i++) {
    // On sort les attribut first et last de chaque index
firstlast[i]= { first: entrepreneurs[i].first, last: entrepreneurs[i].last};
}
console.log("Prenoms et noms des entrepreneurs du tableau :")
console.log(firstlast)

console.log("Que lâge aurait chaque inventeur aujourd'hui ?")
let Arrayage = []
var currentyear = 2022
var age = 0
for (let i in entrepreneurs) {
    age = currentyear - entrepreneurs[i].year
    Arrayage.push({first: entrepreneurs[i].first, last: entrepreneurs[i].last, age: age})
}
console.log(Arrayage);

console.log("Trier les entrepreneurs par ordre alphabétique")
let alphabet = []
// On parcourt chaque index dans entrepreneurs
for(let i in entrepreneurs) {
    //On ajoute les noms des entrepreneurs dans notre tableau
    alphabet.push(entrepreneurs[i].last)
}
// sort permet de trier chaque nom de notre tableau alphabet dans l'ordre alphabétique
console.log(alphabet.sort())

