let array1 = [5,4,2,3,1,2,4]
let array2 = [5,2,3]

// minha solução

/*
function verificarElementos () {
    if (array1.length < 5 ) {
        console.log(`O array1 possui poucos elementos`)
    } else {
        console.log('O array1 possui muitos elementos')
    }

    if (array2.length < 5) {
        console.log('o array2 possui poucos elementos')
    } else {
        console.log('o array2 possui muitos elementos')
    }
}

verificarElementos() */

// solução do curso

function verificarElementos(arr) {
    if(arr.length >= 5) {
        console.log('muitos elementos')
    } else {
        console.log('poucos elementos')
    }
}

verificarElementos (array1)
verificarElementos (array2)