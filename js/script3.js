//# Snack 3
/* Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati. */

const names = ['Marco', 'Angela', 'Chiara', 'Giambabolo'];
const surnames = ['de Iulio', 'Isabella', 'Casadei', 'Arcistecco'];

let fakeList = [];

while (fakeList.length < 3) {
	randomName = names[Math.floor((Math.random() * names.length))];

	randomSurname = surnames[Math.floor((Math.random() * surnames.length))];

	fakeList.push('Invitato: ' + randomName + ' ' + randomSurname);

}
console.log(fakeList);
