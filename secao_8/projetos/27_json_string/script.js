let pessoa = {
    "nome": "Matheus",
    "idade": 28,
    "profissão":"programador",
    "hobbies": ["games", "leitura", "correr"]
}

let pessoaTexto = JSON.stringify(pessoa)
console.log(pessoaTexto)

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON)

console.log(pessoaJSON.hobbies[0])