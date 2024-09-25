function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor
    this.uivar = function() {
        console.log('auuuuuu')
    }
}

let husky = new Cachorro('husky', 4, 'branco');
husky.uivar()

