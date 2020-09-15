const knex=require('knex');
const connectionConfig=require('../conectionConfig');
const query=knex(connectionConfig);


async function showAll(res){
    await query('energy_resources').select('*').
    innerJoin("gus_categories","energy_resources.gus_category_id","gus_categories.gus_category_id").
        innerJoin("energy_resources_category","energy_resources.resource_id","energy_resources_category.resource_id").
        innerJoin("categories","energy_resources_category.cat_id","categories.cat_id").
        then(result=>{res.send(result)})
        .catch((err)=>{
            console.log(err);
            res.send("energy_resources show failed ")
        })


}

module.exports={showAll}

