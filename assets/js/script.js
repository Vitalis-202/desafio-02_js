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
//Ejercicio #02
let input_1 = document.querySelector('#input_1')
let input_2 = document.querySelector('#input_2')
let input_3 = document.querySelector('#input_3')
const btn_ej2 = document.querySelector('#btn_ej2')
let resultado = document.querySelector('#resultado_ej2')
let suma = 0
btn_ej2.addEventListener('click',()=>{
    suma = Number(input_1.value) + Number(input_2.value) + Number(input_3.value)
    console.log(suma)
    if ( suma <= 10) {
        resultado.innerHTML = 'Llevas ' + suma + ' stickers.'  
    } else {
        resultado.innerHTML = 'Llevas demasiados stickers.'  
    }
    suma = 0
})
