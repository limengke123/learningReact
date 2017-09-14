/**
 * Created by li on 2017/9/14.
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CounterSchema = Schema({
    tableName:{
        type:String,
        required:true
    },
    seq:{
        type:Number,
        default:1
    }
});

const Counter = mongoose.model('counters',CounterSchema);

const getIncrementId = async (tableName)=>{
    try{
        const counter = await Counter.findOneAndUpdate({tableName:tableName},{$inc:{seq:1}});
        if(counter){
            return counter && counter.seq;
        }
    } catch (err){
        throw err;
    }
};

module.exports = getIncrementId;