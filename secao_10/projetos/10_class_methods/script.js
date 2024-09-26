class Cachorro {
    constructor(raca,cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log('au au')
    }
}
Cachorro.prototype.patas = 4;
let labrador = new Cachorro('labrador', 4, 'amarelo')
console.log(labrador)
labrador.latir()