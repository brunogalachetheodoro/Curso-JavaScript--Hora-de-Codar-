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
Cachorro.prototype.raca = 'srd';

let labrador = new Cachorro('labrador', 4, 'amarelo');
labrador.latir();

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);
