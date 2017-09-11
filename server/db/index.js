'use strict';

const mongoose = require("mongoose");

export default function connectDatebase( url ){
    return new Promise((resolve,reject)=>{
        mongoose.connection
            .on('error',error=>reject(error))
            .on('close',()=>console.log())
            .once('open',()=>resolve(mongoose.connections[0]))

        mongoose.connect(url)
    })
}