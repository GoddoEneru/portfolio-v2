import React, { Component } from 'react';
import './projets.css';

import {Choix} from "./Choix";
import Data from './Data';

export class Projets extends Component{
    render() {
        const dataProjet = Data.map( (d, index) => {
            return(
                <div key={index} style={{background: d.image + " center/cover", transform: 'translateY(-' + (100 * (this.props.projet - 1)) + '%)'}} ><div><p>{d.description}</p><a href={d.lien} className="lienSite" target="_blank">Voir le site</a></div></div>
            )
        });

        return <div className="projets">
            <Choix slider={true} clickedUp={this.props.clickedUp} clickedDown={this.props.clickedDown} projet={this.props.projet}/>
            <div className="titreb">
                <p className="text-titreb" data-text={this.props.texte}>{this.props.texte}</p>
            </div>
            <div className="titreh"><span></span><p className="glitch" data-text="Projets">Projets</p><h1 style={{visibility : 'hidden'}}>Projets</h1></div>
            <div className="slider">
                {dataProjet}
            </div>
        </div>
    }
}