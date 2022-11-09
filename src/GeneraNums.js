import React, { useState } from "react";
import './GenerarNums.css';

function GeneraNums() {
    
    const datosInicales =[];

    const [nums, setNums] = useState(datosInicales);

    const generarNum =() => { //Función que genera un número aleatorio del 1 al 100, comprueba que no esta en el array, después lo guarda y actualiza el estado.
        let nuevoNum = 0;
        if(nums.length<=99){
            do{
                nuevoNum = Math.floor(Math.random() * (100))+1;
             }while (nums.indexOf(nuevoNum)!==-1);   
             setNums([...nums,nuevoNum]);
        }
    };
    const borrarNums = () => {//Función que borra todos los números guardados.
        setNums(datosInicales);
    };
    const borrarNum = (nuevoNum) => { //Función que borra del estado el número que se pase como parametro.
        const nuevosNums = nums.filter((num) => {
            return num !== nuevoNum;
        });
        setNums(nuevosNums);
    };

    return(
        <React.Fragment>
            <p>
                <ul>
                    {nums.map((num) => {
                        return <li key={num} onClick={() => {
                            borrarNum(num);
                        }}>{num}</li>
                    })   
                    }
                </ul>
            </p>
            <div id="botones">
                <button onClick={generarNum}>Generar</button>
                <button onClick={borrarNums}>Eliminar</button>
            </div>
        </React.Fragment>
    )

}

export default GeneraNums;