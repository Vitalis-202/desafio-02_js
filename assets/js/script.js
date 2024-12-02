// Ejercicio #01
let contador = 0
const img_ej1 = document.querySelector('.img_ej1')
const btn_ej1 = document.querySelector('#btn_ej1')
btn_ej1.addEventListener('click',()=>{

    if (contador == 0) {
        img_ej1.style.border = '2px solid red'
        contador++
    } else {
        img_ej1.style.border = 'none'
        contador--
    }
})