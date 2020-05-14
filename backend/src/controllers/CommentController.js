const connection= require('../database/connection');

module.exports={
    async index(req,res){
        const {id}= req.query;

        const response= await connection('comments')
        .join('users', 'users.id', '=', 'comments.user_id')
        .where('content_id', id).select(['comments.*', 'users.name']);

        return res.json(response);
    },

    async create(req,res){
        const {comment}= req.body;
        const user_id= req.headers.authorization;
        const {id}= req.query;
        //const content_id= req.headers.content;//Se colocar nulo e passar nada da erro
        //Se ele passar em forma de objeto nao insere,
        //Porem quando passa objeto e coloca entre chaves a constante ele remove
        const response= await connection('comments').insert({
            comment,
            user_id,
            content_id: id//Tem que o nome do mesmo campo da table  
        });
        
        return res.json(response);
    },

    async delete(req,res){
        const {id}= req.query;
        const user_id= req.headers.authorization;

        const response= await connection('comments')
        .where('user_id', user_id)
        .andWhere('content_id', id)
        .select('user_id')
        .first();

        await connection('comments').where('content_id', id).delete();

        return res.status(204).send();
    }
}