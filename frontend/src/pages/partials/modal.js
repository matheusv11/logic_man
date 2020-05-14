import React,{useState, useEffect} from 'react';
import api from '../../services/api';

const Modal= ({conteudo, id})=>{
    
    const user_id= localStorage.getItem('user_id');
    const[comments, setComments]= useState([]);
    const[comment, setComment]= useState('');
  
    useEffect(()=>{
      api.get(`comment?id=${id}`).then(comentarios=>{
          setComments(comentarios.data);
      })
  },[id]);

   
  const comentar= async (e)=>{
    e.preventDefault();
    try{
        await api.post(`comment?id=${id}`,{comment},{
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

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{conteudo.title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {conteudo.description}
      </div>
        
    <div class="modal-footer">
        
        <form onSubmit={comentar}>
            <input type="text" placeholder="Comente"
            value={comment}
            onChange={e=> setComment(e.target.value)}
            />
            <button type="button" onClick={comentar}>Comentar</button>
            </form>
          </div>
      <h2>Comentario: </h2>
        {comments.map(comentarios=>(
            <div>
                <h4>{comentarios.name}</h4>
                <strong>{comentarios.comment}</strong>
            </div>
        
        ))}
  

    </div>
    
  </div>
</div>
</div>
    );
}

export default Modal;