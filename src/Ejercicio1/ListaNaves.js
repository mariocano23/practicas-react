import React, { useContext } from "react";
import { datosContexto } from "./DatosContexto";


function ListaNaves(){

    const contexto = useContext(datosContexto);

    return(
    <React.Fragment>
        <h2>Naves</h2>
        <ul id="listadoNaves" onClick={ (event) => {
            if(event.target.tagName=="LI"){
                contexto.obtenNave(event.target.id);
            }
        }}>
            {contexto.naves.legth!==0 ?
                contexto.naves.map((info, index) =>{
                    return(
                        <li key={index} className="nave" id={info.value.url}>
                            {info.value.name}
                        </li>
                    )
                }): ""
            }
        </ul>
    </React.Fragment>
    );
}

export default ListaNaves;