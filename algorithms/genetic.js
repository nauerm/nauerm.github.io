
let obj_str = "The quick brown fox jumps over the lazy dog"
let gen_str = [];
document.getElementById("obj_str").innerHTML = obj_str;
const population = 1;
document.getElementById("pop_size").innerHTML = population;


var obj_len = obj_str.length; // get the objective string length

function gen_alg()
{
    var match_str=[];
    var match_pop=[];
    document.getElementById("obj_len").innerHTML = obj_len; // write length
    var gen_len = []; 
    // @note Create random strings
    for (i = 0; i < population; i++)
    {   
        for(var a = ''; a.length < obj_len;) a += " 0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"[(Math.random() * 60) | 0];
        gen_str[i] = a;
    }

    // @todo Compare, assign a fitness value, reproduce 
    document.getElementById("gen_str").innerHTML = gen_str // write strings
    
}

gen_alg();

var gen_char = gen_str[0].split('');
var obj_char = obj_str.split('');
var right_char = [];
var right_pos_aux = [];

var fitness=0;

for (k=0; k<obj_len; k++)
{
    if(obj_char[k] == gen_char[k])
    {
        right_char += obj_char[k];
        right_pos_aux[k] = k;
        fitness++;
    }
}

var right_pos = right_pos_aux.filter(value => JSON.stringify(value) !== '{}');

document.getElementById("1st_str").innerHTML = gen_char;
document.getElementById("obj").innerHTML = obj_char;
document.getElementById("test").innerHTML = fitness;
document.getElementById("right_char").innerHTML = right_char;
document.getElementById("right_pos").innerHTML = right_pos;