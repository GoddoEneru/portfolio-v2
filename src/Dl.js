import React, { Component } from 'react';
import './dl.css';
import imgdl from './img/row.svg';
import cv from './fichier/CV-QuentinChalopin.pdf';

export class Dl extends Component {
    render() {
        return <div className="dl">
            <p>Telecharger mon CV</p>
            <span></span>
            <a href={cv} download="CV-QuentinChalopin"><img src={imgdl} alt="télécharger"/></a>
        </div>;
    }
}