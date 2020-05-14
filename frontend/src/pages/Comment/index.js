import React, {useEffect, useState} from 'react';
import api from '../../services/api';

import './styles.css'


const Comment= ({id})=>{
    const user_id= localStorage.getItem('user_id');
    const[comments, setComments]= useState([]);
    const[comment, setComment]= useState('');

    useEffect(()=>{
        api.get(`comment?id=29`).then(comentarios=>{
            setComments(comentarios.data);
        })
    },[]);
    
    const comentar= async (e)=>{
        e.preventDefault();
        try{
            await api.post(`comment?id=29`,{comment},{
                headers:{
                    Authorization: user_id
                }
            })
            setComments([...comments, {comment}]);
            setComment('');
        }
        catch{
            alert('Erro ao comentar');
        }
    }

    return(
        <div>
        <h2>Comentario: </h2>
        {comments.map(comentarios=>(
            <div>
                <h4>{comentarios.name}</h4>
                <strong>{comentarios.comment}</strong>
            </div>
        
        ))}
       
        <form onSubmit={comentar}>
        <input type="text" placeholder="Comente"
        onChange={e=> setComment(e.target.value)}
        />
        <button type="button" onClick={comentar}>Comentar</button>
        </form>
        
        </div>
        );
        
        
}

export default Comment;