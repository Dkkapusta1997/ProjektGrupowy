const knex=require('knex');
const connectionConfig=require('../conectionConfig');
const query=knex(connectionConfig);
var calcFactory=require('../../controllers/factoryController')

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



   let resultDB;

   await query('factory').select('gus_categories.name_pl','selection.selection_name_pl','Module.power',
        'kg_resource','id_Line','Stage_Line.stage_id','Stage_time.workHour','Stage_time.workMinute',"Module.name").
    where('factory.id_factory',req.query.id).
    innerJoin('Stage_Line','factory.id_line','Stage_Line.line_id').
    innerJoin("Stage_time",'Stage_Line.stage_id','Stage_time.id_stage').
    innerJoin('Module_Stage','Stage_time.id_stage','Module_Stage.stage_id').
    innerJoin('Module','Module_Stage.module_id',"Module.id").
    innerJoin('gus_categories','Module.resource_id','gus_categories.gus_category_id').
    innerJoin('selection','Module.selection_id','selection.selection_id').then(result=>{
        resultDB=result;
   })

    let resourceKG=resultDB[0].kg_resource;

    let finallyC02=0;
   resultDB.forEach(modul=>{

       let workTime=(modul.workHour*60)+modul.workMinute;


       switch(modul.name_pl){

           case 'Energia Elektryczna z Polski':
                finallyC02+=workTime*1;
               break;


           case 'Ciepło pary wodnej':
               finallyC02+=workTime*2;
                break;


           case 'Gaz skroplony LPG':
               finallyC02+=workTime*3;
               break;

           case 'Oleje Napedowe (Diesel)':
               finallyC02+=workTime*4;
               break;

           case 'Benzyna Silnikowa':
               finallyC02+=workTime*5;
               break;

           case 'Węgiel Kammieny':
               finallyC02+=workTime*6;
               break;


           case   'Energia Elektyczna':
               finallyC02+=workTime*7;
                break;


       }

       switch(modul.selection_name_pl) {

           case 'odpad':
               resourceKG*=0.85;
               break;

           case 'woda':
               resourceKG*=1.15;
               break;

       }

    console.log(resourceKG)

   })

    console.log(finallyC02+"___"+resourceKG)







}

module.exports={addFactory,addStageTime,calc}