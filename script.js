
var stock = 
[
  [ 0, 50 ],
  [ 1, 52 ],
  [ 2, 51 ],
  [ 3, 54 ],
  [ 4, 53 ],
  [ 5, 55 ],
];

const N = 301;
const MAX = 1;
var S_t = [];
var std = 5;
var mean = -0.5;
var rng = Array.from({length: N}, () => (mean + Math.random())*std);

// const average = rng.reduce((a, b) => a + b, 0) / rng.length;

var S = [];
S[0] = 50;

for (var i = 0; i< N; i++)
{
  S[i+1] = S[i]+rng[i+1];
}

for (var i = 0; i<= N; i++) { S_t[i] = [i, S[i]]; }

Flotr.draw(
    document.getElementById("chart"),
    [
      { 
        data: S_t, 
        lines: {show:true, lineWidth: 2},
        shadowSize: 0, 
        color: "#00AA00" 
      }
    ],
    {
      title:"Stock Price Simulation",
      // grid: {horizontalLines:false, verticalLines: false}    
      yaxis:
      {
        min: 0, max:100,
        tickFormatter:function(val){return val+" $";},
        tickDecimals: 0
      },
      xaxis:
      {
        max:N-1
      }
    }
)