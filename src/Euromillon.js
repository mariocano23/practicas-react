import React, { useState } from "react";
import './Euromillon.css';

function Euromillon() {
    
    const datosInicales ={
        ganador:[5, 45, 21, 34, 27, 6, 12],
        boletos: [],
    };

    const [euromillon, setEuromillon] = useState(datosInicales);

    const generarBoleto =() => {
        let nuevoBoleto = [];
        do{
            nuevoBoleto =[Math.floor(Math.random() * (50))+1,Math.floor(Math.random() * (50))+1,Math.floor(Math.random() * (50))+1,Math.floor(Math.random() * (50))+1,Math.floor(Math.random() * (50))+1,Math.floor(Math.random() * (12))+1,Math.floor(Math.random() * (12))+1];
        }while (euromillon.boletos.indexOf(nuevoBoleto)!==-1);   
        setEuromillon({...euromillon, boletos:[...euromillon.boletos,nuevoBoleto]});
    };

    const imprimirBoleto =(boleto) =>{
        return boleto[0]+"-"+boleto[1]+"-"+boleto[2]+"-"+boleto[3]+"-"+boleto[4]+"-"+boleto[5]+"*-"+boleto[6]+"*";
    }

    const evaluarBoleto =(boleto) =>{
        let aciertos =0;
        let aciertosEstrellas =0;

        for (let index = 0; index < 5; index++) {
            for (let subIndex = 0; subIndex < 5; subIndex++) {
                if (boleto[index]===euromillon.ganador[subIndex]) {
                    aciertos++
                }
            }
        }
        for (let index = 5; index < 7; index++) {
            for (let subIndex = 5; subIndex < 7; subIndex++) {
                if (boleto[index]===euromillon.ganador[subIndex]) {
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
                    {euromillon.boletos.map((boleto) => {
                        return <li className={evaluarBoleto(boleto)} key={imprimirBoleto(boleto)} >{imprimirBoleto(boleto)}</li>})   
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