//# Snack 1
/* Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while. */


//# Versione for
let sum = 0;

for (let i = 0; i < 2; i++) {
	userNumber = parseInt(prompt('Scrivi un numero', '5').trim());
	sum = sum + userNumber;
}

console.log(sum);

//# Versione while
let j = 0;
sumWhile = 0;

while (j < 2) {
	userNumberWhile = parseInt(prompt('Scrivi un numero', '5').trim());
	sumWhile += userNumberWhile;
	console.log(userNumberWhile);
	console.log(sumWhile);
	j++;
}

console.log(sumWhile);

//# Versione do-while
let y = 0;
sumDoWhile = 0;

do {
	userNumberDoWhile = parseInt(prompt('Scrivi un numero', '5').trim());
	sumDoWhile += userNumberDoWhile;
	console.log(userNumberDoWhile);
	console.log(sumDoWhile);
	y++;
} while (y < 2);