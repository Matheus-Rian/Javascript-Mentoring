
// 1º Perguntar a mesada do adolescente
// 2º Perguntar se ele deseja comprar alguma coisa
// 3º adolescentepode comprar produtos até o dinheiro acabar ou pode comprar somente o necessário

const mesada = Number(prompt('Quanto dinheiro você tem?'))
const pergunta = prompt('Deseja comprar alguma coisa?')

switch (pergunta) {
	case 'sim':
		console.log(compras(mesada))
		break
	case 'não':
		console.log('Tenha um bom dia!')
		break
	default:
		console.log('Valor invalido')
}

function compras(dinheiro) {

	let comprarAinda = true

	while (dinheiro > 0 && comprarAinda) {
		let brinquedo = prompt('Boneco/Carro/Robô')

		switch (brinquedo) {
			case 'Boneco':
				dinheiro -= 50
				// dinheiro = dinheiro - 50
				comprarAinda = false
				break
			case 'Carro':
				dinheiro -= 30
				comprarAinda = false
				break
			case 'Robô':
				dinheiro -= 40
				comprarAinda = false
				break
			default:
				console.log('Brinquedo em falta')
		}
		comprarAinda = false

	}

	return dinheiro
}

