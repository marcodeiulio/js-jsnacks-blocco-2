//# Snack 2
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

while (randomNumber % 2) {
	console.log('Il numero era dispari.')
	randomNumber = Math.floor(Math.random() * 10);
}

console.log('Il numero ' + randomNumber + ' è pari.');