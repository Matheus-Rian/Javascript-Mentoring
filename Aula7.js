function multiplicacao(a, b) {
  const result = numberOne * numberSecond

  return result
}

function soma(a, b) {
  const result = numberOne + numberSecond
  return result
}

function sub(a, b) {
  const result = numberOne - numberSecond

  return result
}

function divisao(a, b) {
  const result = numberOne / numberSecond

  return result
}

// const numberOne = Number(prompt('Digite um numero:'));
// const numberSecond = Number(prompt('Digite um numero:'));

function calculator() {
  const operacao = prompt('Digite a operação:')

  switch (operacao) {
    case 'soma':
      console.log(soma(numberOne, numberSecond));
      break;
    case 'subtração':
      console.log(sub(numberOne, numberSecond))
      break;
    case 'multiplicação':
      console.log(multiplicacao(numberOne, numberSecond))
      break;
    default:
      console.log(divisao(numberOne, numberSecond))
  }

}
// calculator()

// While - Pessoa cautelosa

let n = 0

while (n > 3) {
	n++
	console.log(`Dentro do while ${n}`)
}

// console.log('Sai do while')
// console.log(`Fora do while ${n}`)


// Do While - Vida Loka

let x = 0

do {
	x += 1
	// x = x + 1
	console.log(x)

} while(x > 0)

console.log('SAI')

