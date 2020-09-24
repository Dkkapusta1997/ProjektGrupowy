const knex=require('knex');
const connectionConfig=require('../conectionConfig');
const query=knex(connectionConfig);

async function  existUser(res,email,password){
    await query('User').select('*').where('email',email).where('password',password).then(result=>{
        res.send(result);
    })
}

async function registUser(res,req){
    const obiekt= {
        id: req.query.id,
        firstname: req.query.firstName,
        lastname: req.query.lastname,
        email: req.query.email,
        password: req.query.password,
        firm: req.query.firm,
        boss_id: req.query.boss_id
    }
//console.log(obiekt)

    await query('User').insert(obiekt).then(res.send("User Registed")).catch((err)=>{console.log(err)})
}
module.exports={existUser,registUser}