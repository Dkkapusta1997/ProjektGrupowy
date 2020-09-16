const knex=require('knex');
const connectionConfig=require('../conectionConfig');
const query=knex(connectionConfig);

async function showStageByIdOwner(req,res){

    query('Stage').select('Stage.name','Stage.id').where("id_owner",req.query.id_owner).
        then(result=>{
            res.send(result)
    }).catch((err)=>{
        console.log(err);
        res.send("Cannot Find Stage For This Id_owner")
    })

}

async function addStage(req,res){

    const Stage={
        name: req.query.name,
        id_owner: req.query.id_owner,
        vegetable_id: req.query.vegetable_id
    }
    query('Stage').insert(Stage).then(res.send("Added Stage")).catch((err)=>{
        console.log(err);
        res.send("Cannot Add Stage")
    })
}


async function deleteStage(req,res) {
    var flag=0;

  await query("Stage_Line").select('*').where('stage_id',req.query.id).then((result)=>{
      flag=result.length;
  })
console.log(flag);
    if(!flag){

        if (await query('Stage').select('*').where("id", req.query.id)) {

            if (await query('Stage').del().where("id", req.query.id)) {
                res.send("Delete Stage")
            } else {
                res.send("Cannot Delete Stage")
            }
        } else {
            res.send("Stage didn't exist")
        }
    }
    else{
        res.send("Stage is in line");
    }


}

async function addModuleToStage(req,res){

    const Module_Stage={
        stage_id: req.query.stage_id,
        module_id: req.query.module_id
    }

    await query('Module_Stage').insert(Module_Stage).then((result)=>{
        res.send("Added Module to Stage").catch((err)=>{
            console.log(err)
            res.send("Cannot add Module to Stage")
        })
    })
}

async function deleteModuleInStage(req,res){
    if(await query('Module_Stage').del().where('stage_id',req.query.stage_id).andWhere('module_id',req.query.module_id)){
        res.send("Module delete in Stage")
    }
    else{
        res.send("Canno delete stage in module")
    }
}
async function showModuleInStageByIdModule(req,res){
    query('Module_Stage').select('*').where('stage_id',req.query.stage_id).
    innerJoin('Module','Module.id','Module_Stage.module_id').
   innerJoin('resources','Module.vegetable_id','resources.resource_id').
    then((result)=>{
        res.send(result)
    })
}


module.exports={showStageByIdOwner,addStage,deleteStage,addModuleToStage,deleteModuleInStage,showModuleInStageByIdModule}