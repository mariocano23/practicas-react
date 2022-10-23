"use strict"

import { operacion } from "./bibliotecaCalculos";

function numeraAPantalla(ref, pantalla) { //Función para escribir un número por pantalla.
    if(pantalla.current.innerHTML=="0"&&ref.current.innerHTML!="."){
        pantalla.current.innerHTML=null;
    }
    pantalla.current.innerHTML+=ref.current.innerHTML;
}

function operandoAPantalla(ref, pantalla) { //Función para escribir un signo de operación por pantalla y hacer la operación de la pantalla si ya hay un signo.
        if(isNaN(pantalla.current.innerHTML)){
            operacion(pantalla);
        }
            pantalla.current.innerHTML+=ref.current.innerHTML;

    
}

function borrarPantalla(pantalla) {
    pantalla.current.innerHTML=0;
}

export {numeraAPantalla, borrarPantalla, operandoAPantalla};