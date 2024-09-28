//Exercício resolvido por mim (poderia ter colocado quantidade de consumo baseado nos km andados pelo carro )
class Carro {
    constructor (marca, cor, gasolinaRestante) {
        this.marca = marca;
        this.cor = cor;
        this. gasolinaRestante = gasolinaRestante;
    }

    menosGas(km) {
        this.gasolinaRestante -= 1
        console.log('O carro consumiu 1 litro')
    }

    maisGas() {
        if (this.gasolinaRestante < 60) {
            this.gasolinaRestante += 60 - this.gasolinaRestante
        }

        console.log('Você encheu o tanque')
    }
 }

let carro1 = new Carro ('Fiat', 'Preto', 37)

console.log(carro1)

carro1.menosGas()
console.log(`O carro possui ${carro1.gasolinaRestante} litros`)

carro1.maisGas()
console.log(`O carro possui ${carro1.gasolinaRestante} litros`)

carro1.menosGas()
carro1.menosGas()
carro1.menosGas()
console.log(`O carro possui ${carro1.gasolinaRestante} litros`)

carro1.maisGas()
console.log(`O carro possui ${carro1.gasolinaRestante} litros`)

