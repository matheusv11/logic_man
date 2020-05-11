const connection= require('../database/connection');

module.exports= {
    async create(req,res){
        const {email,password}= req.body;
        
        const data= await connection('users')
        .where('email', email)
        .andWhere('password', password)
        .select('id', 'name')
        .first();

        if(!data){
            return res.status(400).json({error: 'No user found '});//Caso ele nao retorne dados esperado na data ele retorna user not found
        }
        return res.json(data);
    }
}