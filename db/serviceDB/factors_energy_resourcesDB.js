const knex=require('knex');
const connectionConfig=require('../conectionConfig');
const query=knex(connectionConfig);

async function addFactory(req,res){

    const factory={
        kg_resource: req.query.kg_resource,
        id_owner: req.query.id_owner,
        id_line: req.query.id_line
    }

    query('factory').insert(factory).then(res.send("factory added")).catch((err)=>{
        console.log(err)
        res.send("factory add failed")
    })
}

