function setup() {
    createCanvas(600, 600);
     background("black")
  }
  
  function draw() {
    
    stroke("#082C29")
    fill("rgb(0,255,255)")
    
    //console.log(mouseIsPressed)
    
    if (mouseIsPressed) {
     rect(mouseX, mouseY, 20, 35);
    }
  }