import React, { useState } from "react";



function GeneraNums() {
    
    const datosInicales =[1,2,3];

    const [nums, setNums] = useState(datosInicales);

    const generarNum =() => {
        let nuevoNum = 0;
        do{
           nuevoNum = Math.floor(Math.random() * (100-1))+1;
        }while (nums.indexOf(nuevoNum)!=-1);   
        setNums({...nums,nuevoNum});
    }
    const borrarNums = () => {
        setNums(datosInicales);
    }
    const borrarNum = (nuevoNum) => {
        const nuevosNums = nums.map((num) => {
            return num !== nuevoNum;
        });

        setNums(nuevosNums);
    }

    return(

        <React.Fragment>
            <div>
                <ul>
                    {    
                    nums.map((num) => {
                        return <li onClick={() => {
                            borrarNum(num);
                        }}>num</li>
                    })   
                    }
                </ul>
            </div>
            <button onClick={generarNum}>Generar</button>
        </React.Fragment>
    )

}

export default GeneraNums;