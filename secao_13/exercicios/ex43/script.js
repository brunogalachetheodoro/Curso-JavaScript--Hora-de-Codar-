const nomdeDaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(nomdeDaMarca.test('Marca: Nike'));
console.log(nomdeDaMarca.test('Marca: Puma'));
console.log(nomdeDaMarca.test('Marca: Under Armor'));