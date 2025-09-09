// vocal, drum, bass, and other are volumes ranging from 0 to 100
let red = [235, 61, 68]
let yellow = [246, 245, 181]
let white = [255, 255, 255]  
let black = [0]
let recordSpin = 2;
let redSpin = 2;
let dotSpacing = 60;
let currentDotSize = 0;
let currentRecordSize = 300;
let currentYellowSpikeSize = 270;
let currentSquareSize = 150;
let currentSquareOpacity = 200;
let turn = 2;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(60);
  dots(drum);
  //squares(other);
  redSpikes();
  yellowSpikes(0, bass);
  yellowSpikes(45, bass);
  record(vocal);
  lyrics(words);
  console.log(counter);

  if (counter>500 && counter < 1000){

  }
}

function recordShine(angle,size) {
  fill(white)
  // in relation to angle
  arc(0, 0, size, size, angle+255, angle+265);
  arc(0, 0, size, size, angle-85, angle-75);
}
function record(vocal) {
  let targetSize = map(vocal, 20, 100, 250, 400);
  currentRecordSize = lerp(currentRecordSize, targetSize, 0.3)
  let recordStroke = map(currentRecordSize, 200, 380, 4, 16)
  push();
  translate(width/2, height/2);
  rotate(recordSpin);
  stroke(0, 0, 0, 50);
  strokeWeight(recordStroke*3+3);
  ellipse(0, 0, currentRecordSize); //main circle shadow
  fill(red)
  stroke(white);
  strokeWeight(recordStroke);
  ellipse(0, 0, currentRecordSize); //main circle
  noStroke();
  recordShine(300,currentRecordSize);
  recordShine(180,currentRecordSize);
  recordShine(60,currentRecordSize);
  stroke(red);
  strokeWeight(recordStroke+3);
  noFill();
  ellipse(0, 0, currentRecordSize-250)
  ellipse(0, 0, currentRecordSize-200);
  ellipse(0, 0, currentRecordSize-130);
  ellipse(0, 0, currentRecordSize-60);
  ellipse(0, 0, currentRecordSize-10)
  stroke(white);
  strokeWeight(recordStroke/3);
  //record rings
  ellipse(0, 0, currentRecordSize-200);
  ellipse(0, 0, currentRecordSize-130);
  ellipse(0, 0, currentRecordSize-60);
  strokeWeight(recordStroke)
  ellipse(0, 0, currentRecordSize); //main circle
  fill(0);
  stroke(white);
  strokeWeight(recordStroke);
  let innerCircleSize = max(currentRecordSize - 260, 10);
  ellipse(0, 0, innerCircleSize); // inner circle
  pop();
  recordSpin+=2;
}
function redSpikes() {
  stroke(0, 0, 0, 70);
  strokeWeight(20);
  fill(red);
  push();
  translate(width/2, height/2);
  rotate(45+redSpin);
  triangle(-75, -100, 75, -100, 0, -400);
  triangle(-100, -75, -100, 75, -400, 0);
  triangle(-75, 100, 75, 100, 0, 400);
  triangle(100, -75, 100, 75, 400, 0);
  noStroke();
  triangle(-75, -100, 75, -100, 0, -400);
  triangle(-100, -75, -100, 75, -400, 0);
  triangle(-75, 100, 75, 100, 0, 400);
  triangle(100, -75, 100, 75, 400, 0);
  pop();
  redSpin-=0.5

}
function yellowSpikes(angle, bass) {
  fill(yellow);
  let targetSize = map(bass, 0, 100, 0, 300);
  currentYellowSpikeSize = lerp(currentYellowSpikeSize, targetSize, 1)
  push();
  translate(width/2, height/2);
  rotate(angle);
  noStroke();
  triangle(-50, -100, 50, -100, 0, -currentYellowSpikeSize-100);
  triangle(-100, -50, -100, 50, -currentYellowSpikeSize-100, 0);
  triangle(-45, 100, 50, 100, 0, currentYellowSpikeSize+100);
  triangle(100, -45, 100, 50, currentYellowSpikeSize+100, 0);
  pop();
}
function lyrics(words){
  textStyle(BOLD);
  textAlign(CENTER);
  stroke(white)
  strokeWeight(10);
  fill(black);
  text(words.toUpperCase(), width/2, height/2+25);
}
function dots(drum) {
  fill(white); 
  let targetSize = map(drum, 0, 100, 0, 50);
  currentDotSize = lerp(currentDotSize, targetSize, 0.3);
  noStroke();
  for (let y = dotSpacing / 2; y < height; y += dotSpacing) {
    for (let x = dotSpacing / 2; x < width; x += dotSpacing) {
      circle(x, y, currentDotSize); 
    }
  }
}
function squares(other) {
  let targetSize = map(other, 0, 100, 0, 200);
  currentSquareSize = lerp(currentSquareSize, targetSize, 1)
  let opacity = map(other, 0, 100, 0, 255)
  currentSquareOpacity= lerp(currentSquareOpacity, opacity, 0.4)
  fill(247, 247, 218, opacity);
  rect(150, 150, currentSquareSize);
  rect(450, 150, currentSquareSize);
  rect(150, 450, currentSquareSize);
  rect(450, 450, currentSquareSize);
}
