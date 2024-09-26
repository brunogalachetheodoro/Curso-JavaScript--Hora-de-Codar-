/* class Carrinho {
    constructor (itens, qTotal, vTotal) {
        this.itens = itens;
        this.qTotal = qTotal;
        this.vTotal = vTotal;
    }

    add(addItens) {
        this.qTotal += addItens; 
        this.vTotal = this.qTotal * this.itens
        console.log(`Valor Item: ${this.itens}`)
        console.log(`Quantidade total no carrinho: ${this.qTotal}`)
        console.log(`Valor total no carrinho: ${this.vTotal}`)
        console.log(' ')

    }

    remover(remItens) {
        this.qTotal -= remItens;
        this.vTotal = this.qTotal * this.itens
        console.log(`Valor Item: ${this.itens}`)
        console.log(`Quantidade total no carrinho: ${this.qTotal}`)
        console.log(`Valor total no carrinho: ${this.vTotal}`)
        console.log(' ')
    }
}

let carrinhoCompras = new Carrinho (10,0,0)

carrinhoCompras.add(22)
carrinhoCompras.remover(12)

*/ // -> pensei bem, mas o real objetivo do exercício não foi atingido

class Carrinho {
    constructor (itens, qTotal, vTotal) {
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    } 
}

let carrinho = new Carrinho ([
    {
        id: 1,
        nome: 'Camisa',
        qtd: 1,
        preco: 20,
    },
    {
        id: 2,
        nome: 'calça',
        qtd: 2,
        preco:50
    }
], 3, 120)