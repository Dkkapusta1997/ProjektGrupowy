const knex=require('knex');
const connectionConfig=require('../conectionConfig');
const query=knex(connectionConfig);

async function addStatistic(statistic){

    await query('statistics').insert(statistic)
}

async function showStatisticsByIdOwner(req,res){
    query('statistics').select('statistics.CO2','resource','Line.name').where('statistics.id_owner',req.query.id).
    innerJoin('factory','statistics.id_fabric','factory.id_factory').
    innerJoin('Line','factory.id_line','Line.id').then((result)=>{
        res.send(result);
    })
}

module.exports={addStatistic,showStatisticsByIdOwner}