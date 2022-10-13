let x = 50;
function setup() {
  createCanvas(500, 500);
}

function draw() {

  background(1);
  noStroke();

  
  fill(255);

  
  ellipse(225, 200, 300, 200);

  
  rect(175, 250, 150, 100);
 

  
  fill(235,98,35);
  
 
  ellipse(175, 200, 50, 50);
  ellipse(325, 200, 50, 50);

  rect(200, 310, 10, x);
  
  rect(300, 310, 10, x);
 x= x + 1;
}
