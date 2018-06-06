import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './choix.css';
import arrowUp from './img/arrow.svg';
import arrowDown from './img/arrow2.svg';

//let i = 1;

export class Choix extends Component {

    render() {
        const pourcentage = {
            transform: 'translateY(-' + (100 * (this.props.projet - 1)) + '%)'
        }

        let arrowU = '';
        let arrowD = '';

        if(this.props.projet === 1){
            arrowU = 'up hide';
        }else{
            arrowU = 'up';
        }

        if(this.props.projet === 3){
            arrowD = 'down hide';
        }else{
            arrowD = 'down';
        }

        const Slider = this.props.slider;
        if (Slider) {
            return <div className="Choix">
                <div className="nbSlide">
                    <img src={arrowUp} className={arrowU} alt="projet précédent" onClick={this.props.clickedUp}/>
                    <div>
                        <p className="zero">0</p><p style={pourcentage}><span style={{visibility: "hidden"}}>0</span>1</p>
                        <p style={pourcentage}>2</p>
                        <p style={pourcentage}>3</p>
                    </div>
                    <img src={arrowDown} className={arrowD} alt="projet suivant" onClick={this.props.clickedDown}/>
                </div>
                <span className="barre"/>
            </div>;
        }
        return <div className="lienProjet">
            <NavLink to="/Projets" activeClassName="active" className="glitchb" data-text="Projets">Projets</NavLink>
            <span className="barre"/>
        </div>;
    }
}