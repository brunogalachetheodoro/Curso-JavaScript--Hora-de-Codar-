const produtos = [
    {nome: 'Camisa', preco: 22.00, categoria: 'Roupas'},
    {nome: 'Chaleita Elétrica', preco: 49.00, categoria: 'Eletro'},
    {nome: 'Geladeira', preco: 2200.00, categoria: 'Eletro'},
    {nome: 'Calça Jeans', preco: 59.00, categoria: 'Roupas'}
]

produtos.map((produto) => {
    if(produto.categoria === 'Roupas'){
        produto.desconto = true
    }
})

console.log(produtos)