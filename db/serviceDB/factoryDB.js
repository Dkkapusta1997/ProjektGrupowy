const knex=require('knex');
const connectionConfig=require('../conectionConfig');
const query=knex(connectionConfig);


async function addFactory(req,res){

    let mojresult= await query('factory').max('id_factory as factory_id').first()

   console.log(mojresult.factory_id)

    const factory={
        kg_resource: req.query.kg_resource,
        id_owner: req.query.id_owner,
        id_line: req.query.id_line

    }

    const obiekt={
        factory_id:mojresult.factory_id+1
    }
     await query('factory').insert(factory)
        .then(res.send(obiekt))
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


async function calc(req,res){

    


}

module.exports={addFactory,addStageTime,calc}