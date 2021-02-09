// Calculadora feita pelo mentorado Kaio

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

const numberOne = Number(prompt('Digite um numero:'));
const numberSecond = Number(prompt('Digite um numero:'));

function calculator() {
  const operacao = prompt('Digite a operação:')

  if (operacao === 'soma') {
    console.log(soma(numberOne, numberSecond))
  } else if (operacao === 'subtração') {
    console.log(sub(numberOne, numberSecond))
  } else if (operacao === 'multiplicacao') {
    console.log(multiplicacao(numberOne, numberSecond))
  } else {
    console.log(divisao(numberOne, numberSecond))
  }

}
calculator()