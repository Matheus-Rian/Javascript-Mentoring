// Crie um programa para medir o comprimento da circunferência
// comprimento = 2*pi*r 
var pi = 3.14
var r = 4 
var comprimento = 2*pi*r

console.log (comprimento)

//Crie uma variável com seu nome e
//sobrenome e mostre no console a
//seguinte mensagem:

let nome = " Matheus" 
let sobrenome = " Rian"
let bemVindo = 'Olá' + nome + sobrenome + ' Bem vindo' 
console.log(bemVindo)

function soma() {
	const numA = prompt('Digite um número:')
	const numB = prompt('Digite outro número:')

	return Number(numA) + Number(numB)
}
console.log(soma())
function sub(a, b) {
	const subtracao = a - b
	console.log('sub: ' + subtracao)
}
sub(2, 2)



// !false = true
// !true = false
food = true
let girlFriendAngry = !food ? true : false //ternário
// ? - if
// : else

console.log(`Namorada irritada: ${girlFriendAngry}`)
// if(food !== false) {
// 	girlFriendAngry = false
// 	console.log('Com comida')
// 	console.log(`Namorada irritada: ${girlFriendAngry}`)
// } else {
// 	console.log('Sem comida')
// }



//Se a condição for verdadeira ele vai fazer oq tem dentro das chaves(bloco)

// == - Verificam apenas o valor
// === - Verificam o valor e o tipo(estritamente igual)
// !== - Estritamente diferente

// > - maior
// >= - maior ou igual
// < - menor
// <= - menor ou igual


// 8 - 10: Aluno Destaque
// 7 - 5: mediano
// 5 - 0: Precisa estudar

// Tabela verdade: && e ||
// true && true = true
// true && false = false
// true || true = true
// true || false = true
// false || false = false

let nota = 8
nota = 6
nota = 7
nota = 20
if (nota >=8 && nota <=10)  {
  console.log("aluno Destaque")
} else if (nota <=7 && nota > 4) {
  console.log("Aluno Mediano")
} else if (nota <=5 && nota >= 0) {
  console.log("Precisa estuda")
} else { console.log("Nota Invalida")}

