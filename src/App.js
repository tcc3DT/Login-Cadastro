import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import imagem1 from "./assets/imagemlogin.png";
import logo from "./assets/logosenai.png";
import logo2 from "./assets/logosenai2.png";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="appAside">
            <img className="logosenai" src={logo}/>
            <img className="imagemteste" src={imagem1}/>
          </div>
          

          <div className="appForm">
          <img className="logosenai2" src={logo2}/>
            <div className="pageSwitcher">
            
            

              GERENCIAMENTO DE PATRIMÔNIO 
             
            </div>
            

            <div className="formTitle">
              <NavLink
                to="/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Entrar
              </NavLink>{" "}
              ou{" "}
              <NavLink
                exact
                to="/"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Cadastrar
              </NavLink>
            </div>

            <Route exact path="/" component={SignUpForm} />
            <Route path="/sign-in" component={SignInForm} />
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
