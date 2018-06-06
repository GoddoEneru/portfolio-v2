import React, { Component } from 'react';
import './menu.css';
import  {NavLink} from 'react-router-dom';
import image from './img/croix.svg';

export class Menu extends Component{

    closeMenu = () => {
        let titre = document.querySelector(".menu");
        titre.classList.remove("open");
    }

    openMenu = () => {
        let titre = document.querySelector(".menu");
        titre.classList.add("open");
    }

    render() {
        return<div className="allMenu">
            <div className="openMenu" onClick={this.openMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className="menu">
                <img className="closeMenu" src={image} alt="fermer menu" onClick={this.closeMenu}/>
                <div><NavLink exact to="/" className="lienMenu glitchn" activeClassName="active" data-text="Accueil" onClick={this.closeMenu}>Accueil</NavLink></div>
                <div><NavLink to="/Projets" className="lienMenu glitchn" activeClassName="active" data-text="Projets" onClick={this.closeMenu}>Projets</NavLink></div>
                <div><NavLink to="/Contact" className="lienMenu glitchn" activeClassName="active" data-text="Contact" onClick={this.closeMenu}>Contact</NavLink></div>
            </nav>
        </div>;
    }
}