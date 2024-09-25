function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor
}


Cachorro.prototype.uivar = function() {
    console.log('auuuuuuu')
}

let husky = new Cachorro('husky', 4, 'branco');
husky.uivar()

