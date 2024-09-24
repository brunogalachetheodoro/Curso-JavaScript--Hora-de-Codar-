function faixaEtaria(idade) {
    if (idade < 12) {
        let crianca = idade
        console.log (`A pessoa é uma criança com ${crianca} anos de idade`)
    } else if (idade >= 12 && idade <= 24) {
        let jovem = idade
        console.log (`A pessoa é um jovem com ${jovem} anos de idade`)

    } else {
        let adulto = idade
        console.log (`A pessoa é um adulto com ${adulto} anos de idade`)
    }
}

faixaEtaria(16)
faixaEtaria(10)
faixaEtaria(26)