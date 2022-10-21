"use strict"

function porciento(pantalla) {
    console.log(pantalla.current.innerHTML);
    if(!isNaN(pantalla.current.innerHTML/100)){
        pantalla.current.innerHTML=pantalla.current.innerHTML/100;
    } 
}
function sumar(num1,num2) {
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    return num1+num2;
}
function restar(num1,num2) {
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    return num1-num2;
}
function multiplicar(num1,num2) {
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    return num1*num2;
}
function dividir(num1,num2) {
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    return num1/num2;
}
function operacion(pantalla) {
    let operacion = pantalla.current.innerHTML;
    let resultado=pantalla.current.innerHTML;
    for (let index = 0; index < operacion.length; index++) {
        if(isNaN(operacion[index])&&operacion[index]!="."){
            switch(operacion[index]){
                case "+":
                    resultado=sumar(operacion.slice(0,index),operacion.slice(index+1,operacion.length));
                    break;
                case "X":
                    resultado=multiplicar(operacion.slice(0,index),operacion.slice(index+1,operacion.length));
                    break;
                case "/":
                    resultado=dividir(operacion.slice(0,index),operacion.slice(index+1,operacion.length));
                    break;
                case "-":
                    resultado=restar(operacion.slice(0,index),operacion.slice(index+1,operacion.length));
                    break;
            }
        }
    }
    pantalla.current.innerHTML=resultado;
}


export {porciento, operacion};