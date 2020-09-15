const knex=require('knex');
const connectionConfig=require('../conectionConfig');
const query=knex(connectionConfig);

async function showAllCategories(res){

    await query('categories').select('*').then(result=>{
        res.send(result);

    })
}

async function addCategories(req,res){

    const categories={
        cat_name_pl: req.query.cat_name_pl,
        cat_name_eng: req.query.cat_name_eng,
        cat_description_pl: req.query.cat_description_pl,
        cat_description_eng: req.query.cat_description_eng
    }

    await query('categories').insert(categories).
    then(res.send("Categories Added")).catch(res.send("Categories add failed"))


}

module.exports={showAllCategories,addCategories}