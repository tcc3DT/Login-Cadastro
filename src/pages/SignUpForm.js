import React, { Component } from "react";
// import SignInForm from "./pages/SignInForm";
import { Link } from "react-router-dom";

import { MdEmail, MdLock,  } from "react-icons/md";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }
  

  render() {
    return (
      <div className="formCenter">
        <form onSubmit={this.handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Full Name
            </label>
            <div>
            
            </div>
            <MdEmail className="senha" size={20} color="gray"/>

            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Nome de Usuário"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            
            <label className="formFieldLabel" htmlFor="password">
              Senha
            </label>
            <MdLock className="senha" size={20} color="gray"/>
            
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Senha"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              
              Senha
            </label>
           
            <MdLock className="senha" size={20} color="gray"/>

            <input
              type="password"
              id="password1"
              className="formFieldInput"
              placeholder="Confirme sua Senha"
              name="password1"
              value={this.state.password1}
              onChange={this.handleChange}
            />
          </div>

          <div className="topping">
            <div className="topping3">
            <input type="checkbox" id="topping" className="topping1" value="Teste" />Docente
          </div>

          <div className="topping3">
            <input type="checkbox" id="topping2" className="topping2" value="Teste" />Administrador
          </div>


          
          </div>
          
            <Link to="/sign-in" className="formFieldLink">
              <div className="formField">
                <button className="formFieldButton2">Cadastrar</button>{" "}
              </div>
            </Link>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
