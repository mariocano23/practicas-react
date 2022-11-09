import React, { useState } from "react";
import './GenerarNums.css';

function GeneraNums() {
    
    const datosInicales =[];

    const [nums, setNums] = useState(datosInicales);

    const generarNum =() => {
        let nuevoNum = 0;
        do{
           nuevoNum = Math.floor(Math.random() * (100))+1;
        }while (nums.indexOf(nuevoNum)!==-1||nums.length>99);   
        setNums([...nums,nuevoNum]);
    };
    const borrarNums = () => {
        setNums(datosInicales);
    };
    const borrarNum = (nuevoNum) => {
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