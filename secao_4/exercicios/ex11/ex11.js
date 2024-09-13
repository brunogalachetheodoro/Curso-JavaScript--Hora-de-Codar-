// resolvi o exercício de duas formas diferentes

let idade = 18;
let CNH = true;

 if ((idade >= 18) && (CNH == false)) {
    console.log ('Você já tem idade para dirigi, porém, ainda não possui CNH.')
} else if ((idade >= 18) && (CNH == true)) {
    console.log ('Você está apto a dirigir!')
} else {
    console.log ('Você ainda não tem idade para dirigir')
}

/* if (idade >= 18) {
    if (CNH == false) {
        console.log('Você já tem idade para dirigi, porém, ainda não possui CNH.')
    } else {
        console.log('Você está apto para dirigir')
    }
} else {
    console.log('Você não tem idade para dirigir.')
} */