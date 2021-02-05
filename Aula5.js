//Brasil

function multiplicacao() {
  const numberOne = Number(prompt('Digite um numero:'));
  const numberSecond = Number(prompt('Digite um numero:'));
	const result = numberOne * numberSecond

	return result
}
console.log(multiplicacao())

// Escopos
// Global e local 

// var - Global
// let e const - Local
var name = 'Lucas'


if (true) {  
  var name = 'Amanda'
  console.log(name) // 'Amanda'
}

console.log(name) // 'Amanda'


let estado = 'Brasil'
//escopo global

{
	let estado = 'Pernambuco'
console.log(estado)
	//escopo local
	estado = 'sdsadasda'
	console.log(estado)
}

{
	let estado = 'São Paulo'
console.log(estado)

}
console.log(estado)