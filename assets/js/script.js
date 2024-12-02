//Declaración de variables
const precio = 2000000
let contador = 0
let total = 0
//Captura de variables
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio
cantidadSpan = document.querySelector(".cantidad");
totalSpan = document.querySelector('.valor-total')
// cantidadSpan.innerHTML = 0

//BTN - Eventos
const btn_plus = document.querySelector('#btn_plus')
const btn_minus = document.querySelector('#btn_minus')
//add event listener, primer parametro que hace el usurio y segundo funcion
btn_plus.addEventListener('click',()=>{
    if (contador >= 0) {
        contador = contador + 1
    } else {
        contador = 0
    }
    cantidadSpan.innerHTML = contador
    total = Number(precio) * Number(contador)
    totalSpan.innerHTML = total
})
btn_minus.addEventListener('click',()=>{
    if (contador > 0) {
        contador = contador - 1
    } else {
        contador = 0
    }
    cantidadSpan.innerHTML = contador
    total = Number(precio) * Number(contador)
    totalSpan.innerHTML = total
})