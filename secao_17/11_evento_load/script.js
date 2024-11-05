/* window.addEventListener('load', function() {
    alert('assine nossos termos de uso')
}) */

window.addEventListener('beforeunload', function(e) {
    event.returnValue = null;
})