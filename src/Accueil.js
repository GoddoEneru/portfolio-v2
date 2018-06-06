import React, { Component } from 'react';
import './accueil.css';

import {Choix} from "./Choix";

export class Accueil extends Component{
    render() {
        return <div className="accueil">
            <Choix slider={false} clickedUp={this.props.clickedUp} clickedDown={this.props.clickedDown} projet={this.props.projet}/>
            <div className="titreb">
                <p>Developpeur</p>
            </div>
            <div className="titreh"><span></span><p>Quentin Chalopin</p><h1 style={{visibility : 'hidden'}}>Développeur</h1></div>
            <div className="slider">
                <p>Actuellement en 3ème année d'un bachelor web, je suis à la recherche d'une alternance pour poursuivre ma formation en <span className="glitch" data-text="mastère IOT et application mobile.">mastère IOT et application mobile.</span></p>
                <p>Je cherche une entreprise qui me permettera <span>d'améliorer mes compétences en React et me former sur d'autres framework JS.</span> Je suis très motivé pour mettre mes compétences acquises et à venir, au service de votre entreprise.</p>
            </div>
        </div>
    }
}