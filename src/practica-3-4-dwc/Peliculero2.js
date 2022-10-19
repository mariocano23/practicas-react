import React from "react";
import './CSS/Peliculero.css'

function Peliculero2(props) {
    return(
        <React.Fragment>
            <article className='Pelicula'>
                <h1>
                    <strong>{props.titulo}</strong> {/*He usado strong para resaltar el título.*/}
                </h1>
                <figure>
                    <img src={props.cartel}></img>
                </figure>
                <p>
                    {props.children}
                </p>
                <button onClick={()=>{
                    mostrar("elenco");
                }}>Elenco</button>
                <button onClick={()=>{
                    mostrar("extra");
                }}>Extra</button>
            </article>
        </React.Fragment>
    );
}

export default Peliculero2;