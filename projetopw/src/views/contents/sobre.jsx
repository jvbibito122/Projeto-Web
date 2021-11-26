import './sobre.css'
import React from "react"

const Sobre = props => (
    <div>
        <div className="titulo">
            <h1>Sobre</h1>
        </div>

        <div className="conteudo">
            <h2>Sobre Nós</h2>
            <br/>
            <h4>Este site foi criado com o intuito de divulgar sobre o restaurante Zeta Restaurant Lounge e seu cardápio</h4>
            <br/><br/>
            <h3>Localização</h3>
            <br/>
            <div className="loc">
                <img src="https://cdn.discordapp.com/attachments/721839281513037832/913936313361764383/mMTXIfP8pyQAAAAASUVORK5CYII.png" height="" width="720px"/>
            </div>
            <br/><br/><br/><br/>
            <div className="footer">
                <center><h5>Todos os direitos reservados © João Victor Ferreira da Silva 2º DSA</h5></center>
            </div>
        </div>
    </div>
)

export default Sobre
