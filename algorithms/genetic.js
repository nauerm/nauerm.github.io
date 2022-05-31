
let obj_str = "The quick brown fox jumps over the lazy dog"
let gen_sen = [];
document.getElementById("obj_str").innerHTML = obj_str;
const population = 10;
document.getElementById("pop_size").innerHTML = population;


function gen_alg()
{
    var obj_len = obj_str.length; // get the objective string length
    document.getElementById("obj_len").innerHTML = obj_len; // write length
    var gen_len = []; 
    // @note Create random strings
    for (i = 0; i< population; i++)
    {   
        
        for(var a = ''; a.length < obj_len;) a += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"[(Math.random() * 60) | 0];
        gen_sen[i] = "<br>"+a;
    }

    // @todo Compare, assign a fitness value, reproduce 
    document.getElementById("gen_sen").innerHTML = gen_sen // write strings
   
}

gen_alg();