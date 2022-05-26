const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  console.log("Est-ce que tous les livres ont été empruntés au moins une fois ?")
  for(let i in books) {
      if(books[i].rented > 0) {
          console.log("Oui tous les livres ont été empruntés au moins une fois")
      }
      else {
          console.log("Négatif y'a des livres que personne ne veut")
      }
  }

  console.log("Quel est le livre le plus emprunté ?")
  maxi = []
  for(let i in books) {
    maxi.push(books[i].rented)
  }
  console.log(Math.max(...maxi))
console.log("quel est le livre le moins emprunté ?")
mini = []
for(let i in books) {
  mini.push(books[i].rented)
}
console.log(Math.min(...mini))


console.log("Trouve le livre avec l'id 873495")

let secretbook = books.find(element => element.id === 873495)
console.log(secretbook)

console.log("Supprimer le livre avec l'id 133712")
for(let i in books)
delete books[i].id === 133712
console.log(books) //bah ça marche pas :(

console.log("Trier les livres par ordre alphabétique")
let alphabet = []
// On parcourt chaque index dans entrepreneurs
for(let i in books) {
    //On ajoute les noms des entrepreneurs dans notre tableau
    alphabet.push(books[i].title)
}
// sort permet de trier chaque nom de notre tableau alphabet dans l'ordre alphabétique
console.log(alphabet.sort())