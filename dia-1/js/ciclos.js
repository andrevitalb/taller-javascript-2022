// Compuertas lógicas
// AND
// true && true => true
// true && false => false
// false && true => false
// false && false => false

// OR
// true || true => true
// true || false => true
// false || true => true
// false || false => false

const arreglo1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Ciclo for
// console.log("Ciclo for estándar")
for (let i = 1; i <= arreglo1.length; i++) {
	// console.log(i)
}

// console.log("Ciclo for => of")
for (let element of arreglo1) {
	// console.log(element)
}

// console.log("Ciclo for => in")
for (let index in arreglo1) {
	// console.log(arreglo1[index])
}

// Ciclo while
// console.log("Ciclo while")
let i = 0
while (i < arreglo1.length) {
	// console.log(arreglo1[i])
	i++
}

// Ciclo do-while
// console.log("Ciclo do-while")
i = 0
do {
	// console.log(arreglo1[i])
	i++
} while (i < arreglo1.length)
