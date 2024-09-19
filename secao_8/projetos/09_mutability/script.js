let pessoa = {
    nome:  'matheus'
}

let pessoa2 = pessoa;
let pessoa3 = {
    nome: 'matheus'
}


console.log(pessoa==pessoa2);

pessoa2.nome = 'bruno'
console.log(pessoa.nome)

pessoa.nome = 'jonas'
console.log(pessoa2.nome)