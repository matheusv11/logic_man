//---------------------------IMPORTS-------------------------------------------------
import React from 'react';
import {Link} from 'react-router-dom';


//---------------------------CONSTANTES-------------------------------------------------

const View= ({contents})=>{


//---------------------------REACT-------------------------------------------------

return(
    <div>  

    <div className="features-boxed">
        <div className="container">
            <div className="intro">
                <h2 className="text-center">PERFIL NAO LOGADO</h2>
                <div className="row">  
                    <div className="col">
                       
                        <Link to="/" className="btn btn-primary">Home</Link>
                    </div>
         
                </div>
            
            <div className="row row-cols-2">
                {contents.map(conteudo=>(
                     <div className="col">
                        <div className="card mt-4" style={{width: 18 + 'rem'}}>
                            <div className="card-body">
                                <h5 className="card-title">{conteudo.title}</h5>
                                <p className="card-text">{conteudo.description}</p>
                                <h3>Valor: {conteudo.value}R$</h3>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            </div>

        </div>

        </div>
    
    </div>


        
    );
}

export default View;