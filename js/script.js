var graph_is_drawn = false;

const N = 253;
const MAX = 1;
var S_t = [];
var std = 5;
var mean = -0.5;

// Initialize stock price
var S = [];
S[0] = 50;

if(!graph_is_drawn)
{
  draw_graph();
}

function draw_graph () 
{
  // Wiener process
  var rng = Array.from({length: N}, () => (mean + Math.random())*std);
  
  // const average = rng.reduce((a, b) => a + b, 0) / rng.length;

  
  // Stock price dynamic: previous value + Wiener process
  for (var i = 0; i< N; i++)
  {
    S[i+1] = S[i]+rng[i+1];
  }
  
  // Assemble the series for the graph
  for (var i = 0; i<= N; i++) { S_t[i] = [i, S[i]]; }

  // Calculate maximum and minimum values of the stock
  let Smax = S[0];
  let Smin = S[0];
  for (let i = 1; i < N+1; ++i) {
    if (S[i] > Smax) {
      Smax = S[i];
    }
    if (S[i] < Smin) {
      Smin = S[i];
    }
  }
  
  // To prevent the stock to assume negative values
  while (Smin<=0)
  {
    rng = Array.from({length: N}, () => (mean + Math.random())*std);
    for (var i = 0; i< N; i++)
    {
      S[i+1] = S[i]+rng[i+1];
    }
    
    for (var i = 0; i<= N; i++) { S_t[i] = [i, S[i]]; }
    
    Smax = S[0];
    Smin = S[0];
    for (let i = 1; i < N+1; ++i) {
      if (S[i] > Smax) {
        Smax = S[i];
      }
      if (S[i] < Smin) {
        Smin = S[i];
      }
    }
  }

  // Regulate the yaxis maximum value
  var graph_max = 100;
  if (graph_max < Smax)
  {
    graph_max = Smax + 10;
  }

  // Draw the graph
  Flotr.draw(
    document.getElementById("chart"),
    [
      { 
        data: S_t, 
        lines: {show:true, lineWidth: 2},
        shadowSize: 0, 
        color: "#04AA6D"
      }
    ],
    {
      title:"Stock Price",
      HtmlText: false,
      fontSize: 12,
      // grid: {horizontalLines:false, verticalLines: false}    
      yaxis:
      {
        min: 0, max:graph_max,
        tickFormatter:function(val){return val+" $";},
        tickDecimals: 0,
        title:"Value",
        titleAngle: 90
      },
      xaxis:
      {
        max:N-1,
        title:"Days",
      }
    }
  )
}


var S0_slider = document.getElementById("S0_range");
var S0_output = document.getElementById("S0_text");
S0_output.innerHTML = S0_slider.value;

var std_slider = document.getElementById("std_range");
var std_output = document.getElementById("std_text");
std_output.innerHTML = std_slider.value;

S0_slider.oninput = function() {
  S0_output.innerHTML = S0_slider.value;
  std_output.innerHTML = std_slider.value;
  S = [];
  S[0] = Math.floor(S0_slider.value);
  std = std_slider.value;
  draw_graph();
}

std_slider.oninput = function() {
  S0_output.innerHTML = S0_slider.value;
  std_output.innerHTML = std_slider.value;
  S = [];
  S[0] = Math.floor(S0_slider.value);
  std = std_slider.value;
  draw_graph();
}