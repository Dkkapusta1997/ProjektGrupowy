const knex=require('knex');
const connectionConfig=require('../conectionConfig');
const query=knex(connectionConfig);

async function showAllCategories(res){
    await query('categories').select('*').then(result=>{
        res.send(result);

    })
}

module.exports=showAllCategories