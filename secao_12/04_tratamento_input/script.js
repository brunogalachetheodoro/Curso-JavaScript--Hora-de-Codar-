function checarNumero(num ) {
    let number = Number(num);
    if(Number.isNaN(number)) {
        console.log('por favor, passe só números para o programa');
    } else {
        return number;
    }
}

checarNumero(5);
checarNumero('sdfjlk')