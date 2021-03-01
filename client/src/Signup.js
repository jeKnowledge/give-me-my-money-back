import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import './style/css/Signup.css'
import axios from 'axios';
import LabelsInputs from "./components/LabelsInputs";
import SelectDepartments from "./components/Selects";
import Buttons from "./components/Buttons";
import { useHistory } from "react-router-dom";

 const initialState = {
    name:"",
    lastname:"",
    email:"",
    password:"",
    password2:"",
    department:""
};

const reducer = (user,action) => {

  switch(action.type){
    case "change":
      const {name,value} =action;
      return {...user, [name]:value};

    default:
      return {...user};
  }
}


const Signup = () => {
  const history = useHistory();
  const [user,dispatch] = useReducer(reducer,initialState);
  

    const handleInputChange = e => {
      const {name,value} = e.target;
      dispatch({type:"change",name,value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(user);
        //! substituir o console log por depois returns diferentes.
        if (!user.name || !user.lastname || !user.email || !user.password || !user.password2 || !user.department) {
          console.log("Preencha todos os campos.");
          return;
        }
        else if (user.password !== user.password2) {
          console.log("Passwords não coincidem.");
          return;
        }
        else if (user.password < 6) {
          console.log('A Password Tem de ter pelo menos 6 caracteres.');
          return;
        }
        axios.post("http://localhost:8000/users/signup", { user })
          .then(() => {
            console.log('User Created')
            //redirect to login

            history.push("/users/login");
          })
          .catch(err => {
            //algo correu mal
            console.error(err);
          });
      };

    return (
    <form onSubmit={handleSubmit}>
          <div className="signuppage">
        {/* <div className="jekash-logo">
          <img  className="img-logo" alt="logo"></img>
        </div> */}
        <div className="signupside">
          <h2 className="titlesg">Bem vindo/a ao jeKash!</h2>
          <h1 className="titlesg2">Efetua o teu Registo</h1>
          <div className="inputs-signup">
            <div className="name-lastname">
              <div className="name-lastname-name">
                  <label>Nome</label>
                  <input
                      name="name"
                      type = "text"
                      required
                      placeholder = "Nome"
                      onChange = {handleInputChange} 
                      value = {user.name}
                  />
              </div>
              <div className="name-lastname-lastname">
                <label>Apelido</label>
                <input
                    name="lastname"
                    type = "text" 
                    required
                    placeholder = "Apelido" 
                    onChange = {handleInputChange} 
                    value = {user.lastname}
                />
              </div>
            </div>
            <div className="email">
              <LabelsInputs
                title="Email" 
                name="email"
                type = "text" 
                placeholder="exemplo@jeknowledge.pt" 
                onChange={handleInputChange} 
                value={user.email}
              />
            </div>
            <div className="password1">
              <LabelsInputs
                title="Password" 
                name="password"
                type="password"
                placeholder="Password" 
                onChange={handleInputChange} 
                value={user.password}
              />
            </div>
            <div className="password2">
              <LabelsInputs
                title="Confirma a Password" 
                name="password2"
                type="password"
                placeholder="Password" 
                onChange={handleInputChange} 
                value={user.password2}
              />
            </div>
            <div className="department">
             <SelectDepartments 
              title="Departamento"
              name = "department"
              placeholder = "Escolhe o teu departamento"
              onChange={handleInputChange}
              value={user.department}
              option1="Departamento de Interno"
              option2="Departamento de Inovação"
              option3="Departamento de Tecnologia"
             />        
            </div>
          </div>

          <div className="button-login">
            <Buttons 
              name="Registar"
              type="submit"
              title="button"
            />
          </div>

          <div className="link2signup">
            <p>Já tens conta? Faz login <Link className="link" to="/users/login">aqui</Link>.</p>
          </div>
          </div>

        </div> 
    </form>
      );
}
 
export default Signup;