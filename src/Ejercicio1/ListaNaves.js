import React from "react";
function ListaNaves(props){
    return(
    <React.Fragment>
        <h2>Naves</h2>
        <ul id="listadoNaves" onClick={ (event) => {
            if(event.target.tagName=="LI"){
                props.funcion(event.target.id);
            }
        }}>
            {props.datos.legth!==0 ?
                props.datos.map((info, index) =>{
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