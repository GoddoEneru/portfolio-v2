import React, { Component } from 'react';
import debounce from 'debounce';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import { Dl } from './Dl';
import { Accueil} from "./Accueil";
import { Projets } from "./Projets";
import { Contact } from "./Contact";
import {Menu} from "./Menu";

import Data from './Data';

class App extends Component {
    state = {projet: 1, texte: Data[0].nom};

    handleUp = () => {
        let text = "";
        let arrowUp = document.querySelector(".up");
        let arrowDown = document.querySelector(".down");
        let titre = document.querySelector(".text-titreb");
        titre.classList.add("active");
        for (let i = 2; i <= Data.length; i++ ){
            if (this.state.projet === i){
                text = Data[this.state.projet - 2].nom;
                arrowDown.classList.remove("hide");
            }
        }
        if (this.state.projet === 1){
            text = Data[this.state.projet - 1].nom;
        }
        if (this.state.projet === 2){
            arrowUp.classList.add("hide");
        }
        this.setState((prevState) => {
            return{
                projet: (prevState.projet > 1) ? prevState.projet - 1 : prevState.projet,
            };
        });
        setTimeout(() => {
            this.setState((prevState) => {
                return{
                    texte: text
                };
            });
        }, 400);
        setTimeout(function(){
            titre.classList.remove("active");
        }, 800);
    };

    handleDown = () => {
        let text = "";
        let arrowUp = document.querySelector(".up");
        let arrowDown = document.querySelector(".down");
        let titre = document.querySelector(".text-titreb");
        titre.classList.add("active");
        for (let i = 1; i < Data.length; i++ ){
            if (this.state.projet === i){
                text = Data[this.state.projet].nom;
                arrowUp.classList.remove("hide");
            }
        }
        if (this.state.projet === Data.length){
            text = Data[this.state.projet - 1].nom;
        }
        if (this.state.projet === Data.length - 1){
            arrowDown.classList.add("hide");
        }
        this.setState((prevState) => {
            return{
                projet: (prevState.projet < Data.length) ? prevState.projet + 1 : prevState.projet,
            };
        });
        setTimeout(() => {
            this.setState((prevState) => {
                return{
                    texte:text
                };
            });
        }, 400);
        setTimeout(function(){
            titre.classList.remove("active");
        }, 800);
    };

    componentDidMount() {

        document.addEventListener("wheel", debounce((e) => {

            // to make it work on IE or Chrome
            var variation = e.deltaY;
            console.log(variation)

            if ( variation > 0){
                this.handleUp()
            }

            if ( variation < 0){
                this.handleDown()
            }

            return false

        },20),true);

    };

  render() {

      let heightP = window.innerHeight;
      let widthP = window.innerWidth;
      let style = {
          height: "auto",
      };
      if (widthP < 600){
          style = {
              height: heightP + "px",
          }
      }

      return (
        <BrowserRouter>
                <div className="App" style={style}>
                    <Dl/>
                    <Menu/>
                    <Route exact path="/" component={Accueil} />
                    <Route exact path="/Projets" render={props => {
                        return(
                            <Projets texte={this.state.texte} clickedUp={this.handleUp} clickedDown={this.handleDown} projet={this.state.projet}/>
                        )
                    }}/>
                    <Route exact path="/Contact" component={Contact} />
                </div>
        </BrowserRouter>
    );
  }
}

export default App;
