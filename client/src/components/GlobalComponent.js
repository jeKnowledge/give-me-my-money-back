import React, {useReducer, useEffect,createContext} from 'react';
import axios from "axios";

//* um context e um componente que tem componentes filhos
//* pode nao ser um context pode ser apenas um componente global

//TODO tirar a porta do front end
//TODO e defenir a porta como o base url aqui
let AuthContext  = createContext();


//O context só dá render da App quando tiver guardado o token no State
const AuthReducer = (state, action) => {
    const token = localStorage.getItem("Authorization");
    switch(action.type) {
        case "LOGIN":
            return {
                ...state,
                status: "LOGIN",
                userToken: token,
            };
        case "CHECKAUTHSTATE":
            if (token) {
                axios.defaults.headers.common["Authorization"] = token;
            }
            return {
                ...state,
                userToken: token
            };
        case "LOGOUT":
            localStorage.clear();
            return{
                ...state,
                status:"LOGOUT",
                userToken: null,
                
            }
        default:
            return{
                ...state,
                status:"defaulting...",
                userToken: token,
            }

    }   
}

const AuthContextProvider = (props) => {
    const[state,dispatch] = useReducer(AuthReducer, {
    //* Initialstate: 
        status: "idle",
        userToken: null,

    });
    let value = {state,dispatch};
    useEffect(() => {
        dispatch({type: "CHECKAUTHSTATE"});
    }, [state.token]);

    return (
        <AuthContext.Provider value= {value}>
            {!state.loading && props.children}
        </AuthContext.Provider>
    )
};

export {AuthContextProvider , AuthContext };