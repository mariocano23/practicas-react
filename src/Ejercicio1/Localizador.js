import React, { useState, useEffect } from "react";

function Localizador(){
const valorInicial = 0;
const [coordenadaX,setCoordenadaX] = useState(valorInicial);
const [coordenadaY,setCoordenadaY] = useState(valorInicial);

const ratonEnPantalla = (evento) => {
    setCoordenadaX(evento.screenX);
    setCoordenadaY(evento.screenY);
}

useEffect(() => {
    window.addEventListener("mousemove", ratonEnPantalla);
    return () => {
        window.removeEventListener("mousemove", ratonEnPantalla);
    }
},[])

return(
    <React.Fragment>
        <p>Coordenadas: X {coordenadaX} - Y {coordenadaY}</p>
    </React.Fragment>
)


}
export default Localizador;