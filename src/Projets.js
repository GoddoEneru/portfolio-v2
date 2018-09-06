import React, { Component } from 'react';
import './projets.css';

import {Choix} from "./Choix";
import Data from './Data';

export class Projets extends Component{
    render() {
        const dataProjet = Data.map( (d, index) => {
            return(
                <a key={index} style={{background: d.image + " center/cover", transform: 'translateY(-' + (100 * (this.props.projet - 1)) + '%)'}} href={d.lien} target="_blank"><div><p>{d.description}</p></div></a>
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