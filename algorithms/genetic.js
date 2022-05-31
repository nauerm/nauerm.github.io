
let obj_str = "The quick brown fox jumps over the lazy dog"
document.getElementById("obj_str").innerHTML = obj_str;


function gen_alg()
{
    var obj_len = obj_str.length; // get the objective string length
    document.getElementById("obj_len").innerHTML = obj_len; // write length
    gen_sen = Math.random().toString(36).slice(2, 43); // generate string
    document.getElementById("gen_sen").innerHTML = gen_sen; // writes string
    var gen_len = gen_sen.length; // get generated string length 
    document.getElementById("gen_len").innerHTML = gen_len; // write length
   
}

gen_alg();