//---------------------------IMPORTS-------------------------------------------------

import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';//Podemos exportar em outro arquivo
import api from '../../services/api';

//Styles
import '../../assets/css/global.css';
import '../../assets/fonts/ionicons.min.css';
import '../../assets/bootstrap/css/bootstrap.min.css';
import './styles.css';

//---------------------------CONSTANTES-------------------------------------------------

const NewContent= ()=>{

    const[title, setTitle]= useState('');
    const[description, setDescription]= useState('');
    const[value, setValue]= useState('');

    const user_id= localStorage.getItem('user_id');
    const history= useHistory();
//---------------------------CONTENT-------------------------------------------------

const criar = (e)=>{
  e.preventDefault();
  const data={title,description,value}

  try{
    api.post('content', data,{
        headers:{
            Authorization: user_id
        }
    });
    history.push('/perfil');
  }
  catch{
    alert('erro ao criar conteudo');
  }
}
//---------------------------REACT-------------------------------------------------

    return(
        <div className="login-clean">
        
        <form onSubmit={criar}>
    
            <div className="illustration">
                <i className="icon ion-ios-navigate"></i>
            </div>
           
            <div className="form-group">
                <input className="form-control" type="text" name="title" placeholder="Titulo"
                value={title}
                onChange={e=> setTitle(e.target.value)}
                />

            </div>

            <div className="form-group">
                <textarea className="form-control" name="description" placeholder="Descricao"
                value={description}
                onChange={e=> setDescription(e.target.value)}
                />

            </div>
            
            <div className="form-group">
                <input className="form-control" type="number" name="value" placeholder="Valor"
                value={value}
                onChange={e=> setValue(e.target.value)}
                />

            </div>

            <div className="form-group">
            
                <button className="btn btn-primary btn-block" type="submit" onClick={criar}>Criar</button>
            
            </div>
        
        </form>    

    </div>
    );
}

export default NewContent;