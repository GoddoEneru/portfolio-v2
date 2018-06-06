import React, { Component } from 'react';
import './contact.css';

export class Contact extends Component{
    render() {
        return <div className="contact">
            <div className="titreh"><span></span><p>Contact</p><h1 style={{visibility : 'hidden'}}>Contact</h1></div>
            <div className="slider">
                <p>Vous avez un projet, une idée ou juste une envie de discuter ? Alors n'hésitez pas à m'envoyer un message, je vous recontacterai dans les meilleurs délais !</p>
                    <p>Paris, France<br/><br/>
                        <a className="glitch" data-text="q.chalopin@gmail.com" href="mailto:q.chalopin@gmail.com" title="mail to" >q.chalopin@gmail.com</a><br/><br/>
                    06 13 54 47 31</p>
            </div>
        </div>
    }
}