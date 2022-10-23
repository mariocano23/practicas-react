"use strict"

import { borrarPantalla } from "./bibliotecaPantalla";

function porciento(pantalla) {
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
    if(num2==0){//Comprobación de división entre cero.
        return "ERROR";
    }
    return num1/num2;
}
function operacion(pantalla) { //Función que recoje el contenido de la pantalla y hace la operación que se pide.
    let operacion = pantalla.current.innerHTML;
    let resultado=pantalla.current.innerHTML;
    for (let index = 0; index < operacion.length; index++) {
        if(isNaN(operacion[index])&&operacion[index]!="."){
            if(index==operacion.length-1){ //Comprobación de si el signo es el último elemento del string.
             resultado=operacion.slice(0,index);
            }else{
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
    }
    if (resultado=="ERROR") {//Comprobación de error.
        pantalla.current.innerHTML=resultado;
        setTimeout(borrarPantalla,500,pantalla);
    }else{
        pantalla.current.innerHTML=resultado;
    }
}


export {porciento, operacion};