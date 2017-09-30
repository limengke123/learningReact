/**
 * Created by li on 2017/9/29.
 */
let a ,b;
process.stdout.write('输入a');
process.stdin.on('data',(chunk)=>{
    if(!a){
        a = Number(chunk);
        process.stdout.write('输入b')
    } else {
        b = Number(chunk);
        process.stdout.write(`a为${a}b为${b}`)
    }
})