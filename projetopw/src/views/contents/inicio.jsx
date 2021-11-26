import './inicio.css'
import React from "react"

const Inicio = props => (
    <div>
        <div className="titulo">
            <h1>Inicio</h1>
        </div>

        <div className="conteudo">
            <h2>Zeta Restaurant Lounge</h2>
            <br/> <br/>
            <div className="img">
                <img src="https://resizer.otstatic.com/v2/photos/wide-huge/1/25952425.jpg" width="679.33px" height="382px"/>
            </div>
        </div>
        <div className="footer">
            <center><h5>Todos os direitos reservados © João Victor Ferreira da Silva 2º DSA</h5></center>
            <br/><br/>
        </div>
    </div>
)

export default Inicio
