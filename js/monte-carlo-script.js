function estimatePi(numPoints) {
    let pointsInsideCircle = 0;
  
    for (let i = 0; i < numPoints; i++) {
      const x = Math.random(); // Generate random x-coordinate between 0 and 1
      const y = Math.random(); // Generate random y-coordinate between 0 and 1
  
      // Check if the point (x, y) falls within the unit circle
      if (x * x + y * y <= 1) {
        pointsInsideCircle++;
      }
    }
  
    // Estimate the value of π based on the ratio of points inside the circle to the total points
    const piEstimation = (4 * pointsInsideCircle) / numPoints;
  
    return piEstimation;
  }
  
  const canvas = document.getElementById("canvas-monte-carlo");
  const ctx = canvas.getContext("2d");
  
  function drawPoint(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 2, 2);
  }
  
  function drawCircle() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2;
  
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
  
  function simulateMonteCarlo(numPoints) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();
  
    let pointsInsideCircle = 0;
  
    for (let i = 0; i < numPoints; i++) {
      const x = Math.random();
      const y = Math.random();
  
      const xPos = x * canvas.width;
      const yPos = y * canvas.height;
  
      const distance = Math.sqrt((x - 0.5) ** 2 + (y - 0.5) ** 2);
      const color = distance <= 0.5 ? "blue" : "red";
  
      drawPoint(xPos, yPos, color);
  
      if (x * x + y * y <= 1) {
        pointsInsideCircle++;
      }
    }
  
    const piEstimation = (4 * pointsInsideCircle) / numPoints;
    const piDisplay = isNaN(piEstimation) ? "0" : Number(piEstimation.toFixed(5));
    document.getElementById('pi-value').innerHTML = piDisplay;
  }
  
  const slider = document.getElementById("slider");
  const sliderValue = document.getElementById("sliderValue");
  
  slider.addEventListener("input", function () {
    const numPoints = parseInt(this.value);
    sliderValue.textContent = numPoints;
    simulateMonteCarlo(numPoints);
  });
  
  var numPoints = document.getElementById('slider').value;
  document.getElementById('sliderValue').innerHTML = numPoints;
  simulateMonteCarlo(numPoints);
  