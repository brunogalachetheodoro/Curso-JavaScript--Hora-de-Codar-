class Cachorro {
    constructor(raca,cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log('au au')
    }
}
Cachorro.prototype.raca = 'srd';

let patas = Symbol();
Cachorro.prototype[patas] = 4;

let labrador = new Cachorro('labrador', 4, 'amarelo');
labrador.latir();

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);


// acessando symbol //

console.log(Cachorro.prototype[patas])
console.log(labrador[patas])
