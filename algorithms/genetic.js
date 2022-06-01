const time_to_wait = 1000; // milliseconds
let obj_str = "The quick brown fox jumps over the lazy dog"
let gen_str = [];
document.getElementById("obj_str").innerHTML = obj_str;
const population = 5;
const generations = 2;
document.getElementById("pop_size").innerHTML = population;



function draw()
{
    
    var obj_len = obj_str.length; // get the objective string length
    var obj_char = obj_str.split(''); // break the objective string into chars
    var gen_char = [];
    var right_char = new Array(population).fill("");
    var right_pos_aux = [];
    var right_pos = [];
    var fitness= new Array(population).fill(0);

    function gen_alg()
    {
        for (n = 0; n < 1; n++)
        {
        
            
            var match_str=[];
            var match_pop=[];
            document.getElementById("obj_len").innerHTML = obj_len; // write length
            var gen_len = []; 
            // @note Create random strings
            for (i = 0; i < population; i++)
            {   
                for(var a = ''; a.length < obj_len;) a += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"[(Math.random() * 60) | 0];
                gen_str[i] = a;
                gen_char[i] = gen_str[i].split('');
                
                for (k=0; k<obj_len; k++)
                {            
                    if(obj_char[k] == gen_char[i][k])
                    {
                        right_char[i] += obj_char[k];
                        right_pos_aux.push(k);
                        fitness[i]++;
                    }
                }
                right_pos[i] = right_pos_aux;
                right_pos_aux = [];
                // right_pos = right_pos_aux.filter(value => JSON.stringify(value) !== '{}');
            }
            // @todo Compare, assign a fitness value, reproduce 



            // for(i = 0; i < population; i++)
            // {
            //     if (fitness[i]>2)
            //     {
            //         gen_char[i]

            //     }
            // }
        }

    }

    gen_alg();

    // Write on screen
    for (i=0;i<population;i++)
    {
        document.getElementById("gen_str"+i).innerHTML = gen_str[i];
        document.getElementById("fitness"+i).innerHTML = fitness[i];
        document.getElementById("right_char"+i).innerHTML = right_char[i];
        document.getElementById("right_pos"+i).innerHTML = right_pos[i];
    }
    document.getElementById("obj2").innerHTML = obj_str;
    console.log(gen_str[0]);

    // setTimeout(() => {requestAnimationFrame(draw);}, time_to_wait);
}

draw();