const knex=require('knex');
const connectionConfig=require('../conectionConfig');
const query=knex(connectionConfig);

async function addLine(req,res){

    const Line={
        name: req.query.name,
        id_owner: req.query.id_owner,
        vegetable_id: req.query.vegetable_id
    }

    query('Line').insert(Line).then(res.send('Line added')).catch(res.send("Cannot add line"))
}

async function deleteLine(req,res){

        if (await query('Line').select('*').where("id", req.query.id)) {

            if (await query('Line').del().where("id", req.query.id)) {
                res.send("Delete Line")
            } else {
                res.send("Cannot Delete Line")
            }
        } else {
            res.send("Line didn't exist")
        }


}
async function showLineByIdOwner(req,res){
query('Line').select('*').where('id_owner',req.query.id_owner).
innerJoin('resources','Line.vegetable_id','resources.resource_id').
    then((result)=>{
        res.send(result)
})
}
async function showStageInLineByIdLine(req,res){
    query('Stage_Line').select('*').where('line_id',req.query.id).
    innerJoin('Stage','Stage.id','Stage_Line.stage_id').
    innerJoin('resources','Stage.vegetable_id','resources.resource_id').
    then((result)=>{
        res.send(result)
    })
}
async function addStageToLine(req,res){

    const Stage_Line={
        line_id: req.query.line_id,
        stage_id: req.query.stage_id
    }

    await query('Stage_Line').insert(Stage_Line).then((result)=>{
        res.send("Stage_Line Added")
    }).catch(res.send("Stage_Line Added"))
}

async function deleteStageInLine(req,res){

    if(await query('Stage_Line').del().where('line_id',req.query.line_id).andWhere('stage_id',req.query.stage_id)){
        res.send("Stage in Line Delete")
    }
    else{
        res.send("Cannot delete stage in Line")
    }
}



module.exports={
    addLine,
    deleteLine,
    showLineByIdOwner,
    showStageInLineByIdLine,
    addStageToLine,
    deleteStageInLine}