import React, { useRef } from "react";
import { operacion, porciento } from "./Bibliotecas/bibliotecaCalculos";
import { borrarPantalla, numeraAPantalla, operandoAPantalla } from "./Bibliotecas/bibliotecaPantalla";
import './calculadora.css';

function Calculadora(props) {
    const uno =useRef(null);
    const dos =useRef(null);
    const tres =useRef(null);
    const cuatro =useRef(null);
    const cinco =useRef(null);
    const seis =useRef(null);
    const siete =useRef(null);
    const ocho =useRef(null);
    const nueve =useRef(null);
    const cero =useRef(null);
    const mas =useRef(null);
    const menos =useRef(null);
    const entre =useRef(null);
    const por =useRef(null);
    const igual =useRef(null);
    const C =useRef(null);
    const porcentaje =useRef(null);
    const pantalla =useRef(null);
    const decimal =useRef(null);
    return(
        <React.Fragment>
            <div className="Calculadora">
            <div className="Pantalla">
                <p ref={pantalla}>0</p>
            </div>
            <div className="Fila">
            <button className="Boton2" ref={C} onClick={()=>{
                        borrarPantalla(pantalla);
                    }}>C</button>
            <button className="Boton1" ref={porcentaje} onClick={()=>{
                        porciento(pantalla);
                    }}>%</button>
            <button className="Boton1" ref={entre} onClick={()=>{
                        operandoAPantalla(entre, pantalla);
                    }}>/</button>
            </div>
            <div className="Fila">
            <button className="Boton1" ref={siete} onClick={()=>{
                        numeraAPantalla(siete, pantalla);
                    }}>7</button>
            <button className="Boton1" ref={ocho} onClick={()=>{
                        numeraAPantalla(ocho, pantalla);
                    }}
            >8</button>
            <button className="Boton1" ref={nueve} onClick={()=>{
                        numeraAPantalla(nueve, pantalla);
                    }}>9</button>
            <button className="Boton1" ref={por} onClick={()=>{
                        operandoAPantalla(por, pantalla);
            }}>X</button>
            </div>
            
            <div className="Fila">
            <button className="Boton1" ref={cuatro} onClick={()=>{
                        numeraAPantalla(cuatro, pantalla);
                    }}>4</button>
            <button className="Boton1" ref={cinco} onClick={()=>{
                        numeraAPantalla(cinco, pantalla);
                    }}>5</button>
            <button className="Boton1" ref={seis} onClick={()=>{
                        numeraAPantalla(seis, pantalla);
                    }}>6</button>
            <button className="Boton1" ref={menos} onClick={()=>{
                        operandoAPantalla(menos, pantalla);
            }}>-</button>
            </div>
            <div className="Fila">
            <button className="Boton1" ref={uno} onClick={()=>{
                        numeraAPantalla(uno, pantalla);
                    }}>1</button>
            <button className="Boton1" ref={dos} onClick={()=>{
                        numeraAPantalla(dos, pantalla);
                    }}>2</button>
            <button className="Boton1" ref={tres} onClick={()=>{
                        numeraAPantalla(tres, pantalla);
                    }}>3</button>
            <button className="Boton1" ref={mas} onClick={()=>{
                        operandoAPantalla(mas, pantalla);
            }}>+</button>
            </div>
            <div className="Fila">
            <button className="Boton2" ref={cero} onClick={()=>{
                        numeraAPantalla(cero, pantalla);
            }}>0</button>
            <button className="Boton1" ref={decimal} onClick={()=>{
                        numeraAPantalla(decimal, pantalla);
                    }}>.</button>
            <button className="Boton1" ref={igual} onClick={()=>{
                        operacion(pantalla);
                    }}>=</button>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Calculadora;