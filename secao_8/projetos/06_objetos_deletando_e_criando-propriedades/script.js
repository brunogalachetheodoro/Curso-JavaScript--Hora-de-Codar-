let pessoa = {
    nome: 'Bruno',
    idade: 26,
    profissao: 'APAC'
}

console.log(pessoa.nome);
delete pessoa.nome;
console.log(pessoa.nome);
console.log(pessoa);
pessoa.casado = false;
console.log(pessoa.casado)