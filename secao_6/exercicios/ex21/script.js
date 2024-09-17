function tipoDado (dado) {
    if (typeof dado === 'string') {
        console.log('este dado é uma string')
    } else if ( typeof dado === 'number' ) {
        console.log('este dado é um número')
    } else {
        console.log ('Este dado é um boolean')
    }
}

tipoDado (10)
tipoDado ('bruno')
tipoDado (true)