//---------------------------IMPORTS-------------------------------------------------

import React,{useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import api from  '../../services/api';
import Adm from '../partials/adm';
import View from '../partials/view';
//styles
import '../../assets/css/global.css';
import '../../assets/fonts/ionicons.min.css';
import '../../assets/bootstrap/css/bootstrap.min.css';
import './styles.css';


//---------------------------CONSTANTES-------------------------------------------------

const Profile= ()=>{

const user_id= localStorage.getItem('user_id');
const [contents, setContents]=useState([]);

const query = new URLSearchParams(useLocation().search);
const query_id= query.get("id");//Melhorar esses imports

//---------------------------PERFIL-------------------------------------------------
useEffect(()=>{
    api.get('profile', {
        headers:{
            Authorization: query_id
        }
    }).then(response=>{
       setContents(response.data);
    })
}, [query_id]);

//---------------------------REACT-------------------------------------------------

return(
    
    <div>  
        {user_id ? 
        (<Adm contents={contents}/>)       
         : 
         (<View contents={contents}/>)}
    
    </div>

        
    );
}

export default Profile;