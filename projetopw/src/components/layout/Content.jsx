import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'
import Inicio from '../../views/contents/inicio'
import Sobre from '../../views/contents/sobre'
import Detalhes from '../../views/contents/detalhes'
import NaoEncontrado from '../../views/contents//NaoEncontrado'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Inicio />
            </Route>
            <Route path="/sobre">
                <Sobre />
            </Route>
            <Route path="/detalhes">
                <Detalhes />
            </Route>
            <Route path="*">
                <NaoEncontrado />
            </Route>
        </Switch>
    </main>
)
export default Content