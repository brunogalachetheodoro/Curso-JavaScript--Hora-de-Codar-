    let num = 7;
    let divisoes = 0;

    for (let cont = 1; cont <= num; cont++) {
        if(num % cont == 0) {
            divisoes++;
        } 
    }

    if(divisoes == 2) {
        console.log (`O número ${num} é primo`);
    } else {
        console.log (`O núemor ${num} não é primo`);
    }