class Endereco {
    constructor (rua, bairro, cidade, estado ) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua){
        this.rua = novaRua;
    }
}    

let cliente1 = new Endereco('Júlio Bianchi, 170', 'Vale do Cedro', 'Londrina','PR')

console.log(`Os dados do nvo cliente são: ${cliente1.rua}, ${cliente1.bairro}, ${cliente1.cidade} - ${cliente1.estado}`)

cliente1.novaRua = 'Av. dos Pioneiros'

console.log(`Os dados do nvo cliente são: ${cliente1.rua}, ${cliente1.bairro}, ${cliente1.cidade} - ${cliente1.estado}`)


