import React from 'react';
import DividasComponent from './components/DividasShowComponent';
import TopBar from './components/TopBar'


const DividasShowDevo = () => {
    return ( 
        <div id="bg">
            <TopBar
                color ="normalTopBarCOLOR"
                height = "11vh" //parece ser 18 na sidebar (13% é o normal)
                linkto="/home"
                logo = "normal"
            />
            

            <div className="criar-divida-titulo">
                <h1>O que eu devo</h1>
            </div>
            <DividasComponent
                param = "user"
                color = "#F08A6E"
            />
            {/* Usar o dividas Component para mudar a estetica de como as dividas aparecem
            Por outras palavras, não mexer neste HTML para mudar algo nesta pagina. Mexer no componente.
            */}
        </div>
     );
}

 
export default DividasShowDevo;