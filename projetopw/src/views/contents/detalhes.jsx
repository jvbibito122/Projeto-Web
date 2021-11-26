import './detalhes.css'
import React from "react"

const Detalhes = props => (
    <div>
        <div className="titulo">
            <h1>Opções</h1>
        </div>

        <div className="conteudo">
        <h2>Cardápio</h2>
        </div>
        <div className="conteudo">
        <div class="item">
            <img src="https://d4t7t8y8xqo0t.cloudfront.net/resized/1080X/restaurant%2F623082%2Fmenu%2F623082_1.jpg"/>
            <span class="caption">Hamachi</span>
        </div>
        <div class="item">
            <img src="https://cdn.awsli.com.br/800x800/93/93931/produto/2929225/2c3710f293.jpg"/>
            <span class="caption">Nigiri 2 Pieces</span>
        </div>
        <div class="item">
            <img src=""/>
            <span class="caption">An even longer text below the image which should take up multiple lines.</span>
        </div>
        <div class="item">
            <img src=""/>
            <span class="caption">Text below the image</span>
        </div>
        <div class="item">
            <img src=""/>
            <span class="caption">Text below the image</span>
        </div>
        <div class="item">
            <img src=""/>
            <span class="caption">An even longer text below the image which should take up multiple lines.</span>
    </div>
        </div>
        </div>
)

export default Detalhes
