import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';//Podemos exportar em outro arquivo
import api from '../../services/api';

//Styles
import '../../assets/css/global.css';
import '../../assets/fonts/ionicons.min.css';
import '../../assets/bootstrap/css/bootstrap.min.css';
import './styles.css';

const Home= ()=>{

    const history= useHistory();

    const[email, setEmail]= useState('');
    const[password, setPassword]= useState('');

    const login= (e)=>{
        e.preventDefault();
    
    }

    return(
        <div className="login-clean">
        
        <form onSubmit={login}>
    
            <h2 className="sr-only">Login Form</h2>
            <div className="illustration">
                <i className="icon ion-ios-navigate"></i>
            </div>
           
            <div className="form-group">
                <input className="form-control" type="email" name="email" placeholder="Email"
                value={email}
                onChange={e=> setEmail(e.target.value)}
                />

            </div>


                
            <div className="form-group">
                <input className="form-control" type="password" name="password" placeholder="Senha"
                value={password}
                onChange={e=> setPassword(e.target.value)}
                />

            </div>
            
            <div className="form-group">
            
                <button className="btn btn-primary btn-block" type="submit" onClick={login}>Logar</button>
            
            </div>
            
            <a className="forgot" href="/">Forgot your email or password? Usar link</a>
        
        </form>    

    </div>
    );
}

export default Home;