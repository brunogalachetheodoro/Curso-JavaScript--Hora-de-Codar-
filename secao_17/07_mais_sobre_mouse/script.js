let btn1 = document.querySelector('#btn1');

btn1.addEventListener('mousedown', function() {
    console.log('apertou o botão');
})

btn1.addEventListener('mouseup', function() {
    console.log('soltou o botão')
})

btn2.addEventListener('dbclick', function() {
    console.log('clicou duas vezes')
})

btn2.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    console.log('botão direito')
})