let nomes = ['joão', 'pedro', 'paulo', 'bruno', 'lucas']

for (let cont = 0; cont < nomes.length; cont++) {
    if (nomes[cont] == 'bruno') {
        console.log (`O nome ${nomes[cont]} foi encontrado`)
    }
}


// resolução da aula

if (nomes.includes('bruno')) {
    console.log(`O nome foi encontrado`)
}