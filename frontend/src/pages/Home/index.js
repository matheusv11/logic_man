import React,{useEffect, useState} from 'react';
//import {Link} from 'react-router-dom';
import api from '../../services/api';
import Modal from '../partials/modal';
//Styles
import './styles.css';
import '../../assets/fonts/ionicons.min.css';
import '../../assets/bootstrap/css/bootstrap.min.css';
import '../../assets/css/global.css';


const Home= ()=>{  
    const [modal, setModal]= useState(false);
    const [contents, setContent]= useState([]);
    const [conteudo, setConteudo]= useState({conteudo: {}, id: {}});
    useEffect(()=>{
        api.get('content').then(response=>{
            setContent(response.data);
        })
    },[]);

    return(
        <div>

           <div className="features-boxed">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">HOME </h2>
                        <h2 className="text-center">Falta responsividade do Modal</h2>
                    </div>
                <div className="row justify-content-center features">
                    {contents.map(conteudo=>(
                              <div className="col-sm-6 col-md-5 col-lg-4 item" key={conteudo.id}>
                              <div className="box"><i className="fa fa-map-marker icon"></i>
                                  <h3 className="name">{conteudo.title}</h3>
                                  <p className="description">{conteudo.description}</p>
                                  <h5>{conteudo.value}</h5>
                                  <button type="button" class="btn btn-primary"
                                   data-toggle="modal" 
                                   data-target="#exampleModal"
                                   
                                   onClick={e=> {setModal(true); setConteudo({conteudo: conteudo, id: conteudo.id})} }
                                   >Comentar</button>
                              </div>
                          </div>
                    ))}
                {modal ? (<Modal conteudo={conteudo.conteudo} id={conteudo.id}> </Modal>): (<h2>Oi</h2>)}

              
                </div>
        </div>
    </div>
          
        </div>
        
    );
}

export default Home;