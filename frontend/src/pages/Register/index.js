//---------------------------IMPORTS-------------------------------------------------

import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import api from '../../services/api';

//Styles
import '../../assets/css/global.css';
import '../../assets/fonts/ionicons.min.css';
import '../../assets/bootstrap/css/bootstrap.min.css';
import './styles.css';

//---------------------------CONSTANTES-------------------------------------------------

const Register= ()=>{

    const history= useHistory();

    const[name, setName]= useState('');
    const[email, setEmail]=useState('');
    const[phone,setPhone]=useState('');
    const[password, setPassword]=useState('');

////-------------------------CADASTRAR-------------------------------------------------

    const cadastrar= async (e)=>{
        e.preventDefault();
        const data={name,email,phone,password}

        try{
            const response= await api.post('users', data);
            alert(`Seu id é: ${response.data.id}`);
            history.push('/login');
        }
        catch(error){
            alert('Erro');
        }
    }
//----------------------------REACT-----------------------------------------------
    return(

        <div className="login-clean">
        
            <form onSubmit={cadastrar}>
        
                <h2 className="sr-only">Login Form</h2>
                <div className="illustration">
                    <i className="icon ion-ios-navigate"></i>
                </div>
                
                <div className="form-group">
                    <input className="form-control" type="text" name="name" placeholder="Nome"
                    value={name}
                    onChange={e=> setName(e.target.value)}
                    />

                </div>
                
                <div className="form-group">
                    <input className="form-control" type="email" name="email" placeholder="Email"
                    value={email}
                    onChange={e=> setEmail(e.target.value)}
                    />

                </div>

                    
                <div className="form-group">
                    <input className="form-control" type="number" name="number" placeholder="Celular"
                    value={phone}
                    onChange={e=> setPhone(e.target.value)}
                    />

                </div>

                    
                <div className="form-group">
                    <input className="form-control" type="password" name="password" placeholder="Senha"
                    value={password}
                    onChange={e=> setPassword(e.target.value)}
                    />

                </div>
                
                <div className="form-group">
                
                    <button className="btn btn-primary btn-block" type="submit" onClick={cadastrar}>Cadastrar</button>
                
                </div>
                
                <a className="forgot" href="/">Forgot your email or password? Usar link</a>
            
            </form>    

        </div>
    );
}

export default Register;