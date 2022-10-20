import React, { useRef } from "react";
import {mostrar} from './Bibliotecas/bibliotecaElementos.js'
import './CSS/InfoExtra.css';



function InfoExtra(props) {
    const elenco = useRef(null);
    const extra = useRef(null);
    return(
        <React.Fragment>
            <div className='InfoExtra'>
                <div className='botonesExtra'>
                    <button onClick={()=>{
                        mostrar(elenco);
                    }}>Elenco</button>
                    <button onClick={()=>{
                        mostrar(extra);
                    }}>Extra</button>
                </div>
                <div className="elenco" ref={elenco}>
                    {props.elenco}
                </div>
                <div className="extra" ref={extra}>
                    {props.extra}
                </div>
            </div>
        </React.Fragment>
    )
}

export default InfoExtra;