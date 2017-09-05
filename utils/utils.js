const utils = {
 getRandom:(start=0,end=1)=>{
     if(start>=end){
         throw "start must less than end!";
     }
     return Math.random()*(end-start)+start;
 }
}

module.exports=utils;