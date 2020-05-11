const connection= require('../database/connection');

module.exports={
    async index(req,res){
        const {page=1}= req.query;

        const response= await connection('contents')
        .join('users','users.id','=','contents.user_id')
        .limit(5)
        .offset((page-1)*5)
        .select(['contents.*']);

        return res.json(response);
    },

    async create(req,res){
        const {title,description, value}= req.body;
        const user_id= req.headers.authorization;

        if(!user_id){
            return res.status(401).json({error: 'Operation not permitted.'});
        }

        const [id]= await connection('contents').insert({
            title,
            description,
            value,
            user_id
        });

        return res.json({id})
    },
    async delete(req,res){
        const {id}= req.query;
        const user_id= req.headers.authorization;

        const del= await connection('contents')
        .where('user_id', user_id)
        .select('user_id')
        .first();

        try{
            if(del.user_id!=user_id ){
                return res.status(401).json({error: 'Operation not permitted.'});
            }
            else{
                await connection('contents').where('id', id).delete();
                return res.status(204).send();
            }
        }
        catch{  
          return res.status(401).json({error: "Erro"});
        }

        await connection('contents').where('id', id).delete();
        return res.status(204).send();
    }
}