let timeout;

window.addEventListener('mousemove', function(e) {
    this.clearTimeout(timeout);
let timeout = setTimeout(function(){
        console.log(e.x)
    }, 500)
})