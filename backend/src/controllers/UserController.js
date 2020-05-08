const connection= require('../database/connection');
const crypto= require('crypto');

module.exports= {

    async index(req,res){
        const data= await connection('users').select('*')
        res.json(data);
    },

    async create(req,res){
        const {name,email, password, phone}= req.body;
        const id= crypto.randomBytes(4).toString('HEX');

        const response= await connection('users').where('email', email).first();
        
        try{
            if(response.email==email){
                return res.status(401).json({error: 'Operation not permitted.'});
            }
       
        }
        catch{
            const data= await connection('users').insert({
                id,
                name,
                email,
                password,
                phone
            });

            return res.json({id});
        }
        
  
     
    },

    async delete(req,res){
        const {id}= req.query;
        const user_id= req.headers.authorization;

        const del= await connection('users').where('id', user_id).select('id').first();

        try{
            if( id!=user_id || del.id!=user_id ){
                return res.status(401).json({error: 'Operation not permitted.'});
            }
            else{
                await connection('users').where('id', id).delete();
                return res.status(204).send();
            }
        }
        catch{  
          return res.status(401).json({error: "Erro"});
        }

    }

}