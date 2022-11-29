import React, { useState, useEffect } from "react";

function Colorines(){
    const valorInicial="#FFFFFF";
    const [color,setColor] = useState(valorInicial);

    function cambiarColorRandom() {
        var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
        let color = "#";
        for (let index = 0; index < 6; index++) {
            color+= letras[Math.floor(Math.random()*letras.length)];
        }
        setColor(color);
    }

    useEffect(() => { //Este useEffect le da un evento a la ventana cuando la clickas.
        window.addEventListener("click", cambiarColorRandom);
        return () => {
            window.removeEventListener("click", cambiarColorRandom);
        }
    },[])

    useEffect(() => {
        document.body.style.backgroundColor=color;
    },[color])

    return(
        <React.Fragment>
        </React.Fragment>
    )

}
export default Colorines;