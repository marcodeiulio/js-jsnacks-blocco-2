//# Snack 4
//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

let numbers = [];

const randomLength = Math.floor(Math.random() * 10) + 1;

while (numbers.length < randomLength) {
	// Generare un numero casuale
	let digit = Math.floor(Math.random() * 10);

	// Aggiungerlo all'array
	numbers.push(digit);
}

console.table(numbers);

let sum = 0;
let i = 0;

while (i < randomLength) {
	if (i % 2) {
		sum = sum + numbers[i];
		i++;
	} else {
		i++;
	}
}

console.log("La somma dei numeri in posizione dispari nell'array è: " + sum);