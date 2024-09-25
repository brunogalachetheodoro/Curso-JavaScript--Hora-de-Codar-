function criaCachorro(raca,patas,cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function() {
        console.log('au au')
    }
    return cachorro
}

let shihTzu  = criaCachorro('shih tzu', 4, 'branco com marrom')
console.log(shihTzu)
shihTzu.latir()