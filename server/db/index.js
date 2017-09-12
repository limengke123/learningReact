'use strict';

const mongoose = require("mongoose");

const connectDatebase = async function ( url ){
    return new Promise((resolve,reject)=>{
        mongoose.connection
            .on('error',error=>reject(error))
            .on('close',()=>global.console.log(1))
            .once('open',()=>resolve(mongoose.connections[0]));

        mongoose.connect(url,{useMongoClient: true})
    })
};

module.exports = connectDatebase;