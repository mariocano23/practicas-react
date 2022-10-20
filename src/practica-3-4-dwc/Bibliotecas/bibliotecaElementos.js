"use strict";

function mostrar(referencia) {
    console.log(referencia.current);
    referencia.current.classList.toggle("mostrado");
}

export {mostrar};