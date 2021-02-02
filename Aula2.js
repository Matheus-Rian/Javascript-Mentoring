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



let girlFriendAngry = true
let food = false
food = true

//Se a condição for verdadeira ele vai fazer oq tem dentro das chaves(bloco)

// == - Verificam apenas o valor
// === - Verificam o valor e o tipo(estritamente igual)
// !== - Estritamente diferente
if(food !== false) {
	girlFriendAngry = false
	console.log('Com comida')
	console.log(`Namorada irritada: ${girlFriendAngry}`)
} else {
	console.log('Sem comida')
}

// > - maior
// >= - maior ou igual
// < - menor
// <= - menor ou igual


// 8 - 10: Aluno Destaque
// 7 - 5: mediano
// 5 - 0: Precisa estudar


let nota = 8
nota = 6
nota = 7
nota = 0
if (nota >= 8) {
  console.log("aluno Destaque")
} else if (nota <=7 && nota > 4) {
  console.log("Aluno Mediano")
} else {
  console.log("Precisa estuda")
}
