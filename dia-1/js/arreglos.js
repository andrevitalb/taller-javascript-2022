const arreglo1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Funciones
function saludo(nombre, apellido) {
	console.log(`Hola ${nombre} ${apellido}`)
	console.log("Hola " + nombre + " " + apellido)
}

const saludo2 = function (nombre, apellido) {
	console.log(`Hola ${nombre} ${apellido}`)
	console.log("Hola " + nombre + " " + apellido)
}

const saludo3 = (nombre, apellido) => {
	console.log(`Hola ${nombre} ${apellido}`)
	console.log("Hola " + nombre + " " + apellido)
}

const arreglo2 = arreglo1.map((elemento) => elemento * 2)
// arreglo2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

arreglo2.forEach((elemento, index) => {
	arreglo2[index] = elemento * 2
})

console.log(arreglo2)
