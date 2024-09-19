let carro = {
    portas: 2,
    portaMalas: '200 Litros',
    motor: '2.0'
}

let adicionais = {
    tetoSolar: true,
    arCondicionado: true
}

console.log(carro)

Object.assign(carro, adicionais);

console.log(carro)