const knex=require('knex');
const connectionConfig=require('../conectionConfig');
const query=knex(connectionConfig);



async function addModule(req,res){

const module= {
    name: req.query.name,
    id_owner: req.query.id_owner,
    power: req.query.power,
    vegetable_id: req.query.vegetable_id,
    resource_id: req.query.resource_id,
    selection_id: req.query.selection_id,
    
}
    query('Module').insert(module).
    then(res.send("Module added")
    ).
    catch((err)=>{console.log(err);res.send("add failed")})


}

async function deleteModule(req,res){

   if(await query("Module").del().where("id",req.query.id)){
       res.send("module delete")
   }
   else{
       res.send("cannot delete module")
   }
}

async function showByIdOwner(req,res){
    query('Module').select('Module.id','Module.name','Module.power','Module.id_owner',
        "resources.resource_name_pl",'gus_categories.name_pl','selection.selection_name_pl').
    where("id_owner",req.query.id_owner).
    innerJoin('User',"Module.id_owner","User.id").
    innerJoin('gus_categories','Module.resource_id','gus_categories.gus_category_id').
    innerJoin('resources','Module.vegetable_id','resources.resource_id').
    innerJoin('selection','Module.selection_id','selection.selection_id')
        .then((result=>{
        res.send(result)
    })).catch((err)=>{
        console.log(err)
        res.send("Cannot get module for this id")
    })
}



module.exports={addModule,deleteModule,showByIdOwner}