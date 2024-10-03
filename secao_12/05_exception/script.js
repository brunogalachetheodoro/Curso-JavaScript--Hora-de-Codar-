function saudacao(nome) {
    if(typeof nome != 'string') {
        throw new Error('o parâmetro nome precisa ser uma string')
    } else {
        console.log(`Olá ${nome}!`)
    }
}

saudacao('Bruno')
saudacao(5)

console.log('teste')