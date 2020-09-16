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


module.exports={showStageByIdOwner,addStage,deleteStage}