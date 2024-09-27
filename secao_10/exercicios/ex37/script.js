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
    constructor (itens, qtd, valorTotal) {
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    } 

    addItem(item) {

        let contador = 0;

        for(let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }

        if (contador == 0) {
            this.itens.push(item);
        }

            this.qtd += item.qtd
            this.valorTotal += item.preco * item.qtd
        }

        removeItem(item) {
            for(let itemCarrinho in this.itens) {
                if(this.itens[itemCarrinho].id == item.id) {
                    let obj= this.itens[itemCarrinho];
                    let index = this.itens.findIndex(function(obj) {
                        return obj.id == item.id});

                        this.qtd -= this.itens[itemCarrinho].qtd;
                        this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;

                        this.itens.splice(index, 1);
                        
                    
                }
            }
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

carrinho.addItem({id:1, nome: 'Camisa', qtd: 2, preco: 20});
console.log(carrinho)

carrinho.addItem [{id: 3, nome: 'Boné', qtd: 1, preco: 15}]
console.log(carrinho)

carrinho.removeItem({id: 1, nome:'camisa', qtd: 1, preco: 20})
console.log(carrinho)

