"use strict";

function mostrar(referencia) { //Función que pone o quita la clase mostrado a un elemento.
    referencia.current.classList.toggle("mostrado");
}

export {mostrar};