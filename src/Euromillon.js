import React, { useState } from "react";
import './Euromillon.css';

function Euromillon() {
    
    const ganador =[5, 45, 21, 34, 27, 6, 12];
    const datosInicales =[];

    const [euromillon, setEuromillon] = useState(datosInicales);

    const generarBoleto =() => {//Función que genera un boleto.
        let nuevoBoleto = [];
        do{
            let boletaGenerado = [Math.floor(Math.random() * (50))+1,Math.floor(Math.random() * (50))+1,Math.floor(Math.random() * (50))+1,Math.floor(Math.random() * (50))+1,Math.floor(Math.random() * (50))+1,Math.floor(Math.random() * (12))+1,Math.floor(Math.random() * (12))+1];
            nuevoBoleto = { boleto:boletaGenerado, acertado:evaluarBoleto(boletaGenerado,ganador)};
        }while (euromillon.indexOf(nuevoBoleto)!==-1);   
        setEuromillon([...euromillon, nuevoBoleto]);
    };

    const imprimirBoleto =(boleto) =>{//Función que imprime un boleto bien formateado.
        return boleto[0]+"-"+boleto[1]+"-"+boleto[2]+"-"+boleto[3]+"-"+boleto[4]+"-"+boleto[5]+"*-"+boleto[6]+"*";
    }

    const evaluarBoleto =(boleto,ganador) =>{//Función que evalua si un boleto es ganador o no.
        let aciertos =0;
        let aciertosEstrellas =0;

        for (let index = 0; index < 5; index++) {
            for (let subIndex = 0; subIndex < 5; subIndex++) {
                if (boleto[index]===ganador[subIndex]) {
                    aciertos++
                }
            }
        }
        for (let index = 5; index < 7; index++) {
            for (let subIndex = 5; subIndex < 7; subIndex++) {
                if (boleto[index]===ganador[subIndex]) {
                    aciertosEstrellas++
                }
            }
        }
        if (aciertos>=2&&aciertosEstrellas>=1) {
            return "acierto";
        }else{
            return "fallo";
        }
    }

    return(
        <React.Fragment>
            <p>
                <ul>
                    {euromillon.map((boleto) => {
                        return <li className={boleto.acertado} key={imprimirBoleto(boleto.boleto)} >{imprimirBoleto(boleto.boleto)}</li>})   
                    }
                </ul>
            </p>
            <div id="botones">
                <button onClick={generarBoleto}>Generar</button>
            </div>
        </React.Fragment>
    )

}



export default Euromillon;