import React, { useState, useEffect } from "react";

function Localizador(){
const valorInicial = 0;
const [coordenadaX,setCoordenadaX] = useState(valorInicial);
const [coordenadaY,setCoordenadaY] = useState(valorInicial);

const ratonEnPantalla = (evento) => { //Esta función cambia el estado de coordenadaX y coordenadaY al valor de las coordenadas del cursor.
    setCoordenadaX(evento.screenX);
    setCoordenadaY(evento.screenY);
}

useEffect(() => { //Este useEffect le da un evento a la ventana cuando se mueve el ratón.
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