const knex=require('knex');
const connectionConfig=require('../conectionConfig');
const query=knex(connectionConfig);


async function addFactory(req,res){
    const factory={
        kg_resource: req.query.kg_resource,
        id_owner: req.query.id_owner,
        id_line: req.query.id_line

    }

     query('factory').insert(factory)
        .then(await query('factory').max('id_factory as factory_id').first().then((result)=>{
            res.send(result);
        }))
        .catch((err)=>console.log(err))

}

async function  addStageTime(req,res){

    const Stage_time={
        id_stage: req.query.id_stage,
        id_factory: req.query.id_factory,
        workHour: req.query.workHour,
        workMinute: req.query.workMinute
    }

    query('Stage_time').insert(Stage_time).then(res.send("Stage_time Added"))
}

module.exports={addFactory,addStageTime}