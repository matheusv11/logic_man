//---------------------------IMPORTS-------------------------------------------------
import React,{useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import api from '../../services/api';

//---------------------------CONSTANTES-------------------------------------------------

const Adm= ({contents})=>{

const history= useHistory();
const user_id= localStorage.getItem('user_id');
const [filtro, setFilter]=useState([]);

//---------------------------LOGOUT-------------------------------------------------

const logout= ()=>{
    localStorage.clear();
    history.push('/');
}

//---------------------------DELETE-------------------------------------------------

const deletar= async(id)=>{
    try{
        await api.delete(`content?id=${id}`,{
            headers:{
                Authorization: user_id
            }
        });
        setFilter(filtro.filter(conteudo=> conteudo.id !== id));
    }
    catch(error){
        alert('erro ao deletar');
    }
}
//---------------------------REACT-------------------------------------------------

return(
    
  
    <div>  

    <div className="features-boxed">
        <div className="container">
            <div className="intro">
                <h2 className="text-center">PERFIL</h2>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-primary" onClick={logout}>Logout</button>
                    </div>
                    <div className="col">
                        <Link to="/newcontent" className="btn btn-primary">Conteudo</Link>
                    </div>
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
                                <button type="button" className="btn btn-danger" 
                                onClick={e=> deletar(conteudo.id)}>Deletar</button>
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

export default Adm;