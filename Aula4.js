const calculadora = {
	soma: (a, b) => a + b,
	subtracao: (a, b) => a - b,
	multiplicacao: (a, b) => a * b,
	divisao: (a, b) => a / b,
};

const num1 = Number(prompt('primeiro número:'));
const num2 = Number(prompt('segundo número:'));
const operacao = prompt('operação:')

if(operacao === 'soma') {
	console.log(calculadora.soma(num1, num2))
}else if(operacao === 'subtração') {
	console.log(calculadora.subtracao(num1, num2))
}else if(operacao === 'multiplicação') {
	console.log(calculadora.multiplicacao(num1, num2))
}else {
	console.log(calculadora.divisao(num1, num2))
}