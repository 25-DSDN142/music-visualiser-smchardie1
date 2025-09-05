// vocal, drum, bass, and other are volumes ranging from 0 to 100
let red = [235, 61, 68]
let yellow = [246, 245, 181]
let white = [255]  
let black = [0]
let recordSpin = 2;
let yellowSpin = 2;
let dotSpacing = 60;
let currentDotSize = 0;
let currentRecordSize = 300;
let currentRedSpikeSize = 270;
let currentSquareSize = 150;
let turn = 2;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(60);
  dots(drum);
  squares(other);
  yellowSpikes();
  redSpikes(0, bass);
  redSpikes(45, bass);
  record(vocal);
  lyrics(words);
}

function recordShine(angle,size) {
  fill(white)
  // in rekation to angle
  arc(0, 0, size, size, angle+255, angle+265);
  arc(0, 0, size, size, angle-85, angle-75);
}
function record(vocal) {
  let targetSize = map(vocal, 0, 100, 200, 380);
  currentRecordSize = lerp(currentRecordSize, targetSize, 0.3)
  let recordStroke = map(currentRecordSize, 200, 380, 4, 16)
  push();
  translate(width/2, height/2);
  rotate(recordSpin);
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
function yellowSpikes() {
  noStroke();
  fill(yellow);
  push();
  translate(width/2, height/2);
  rotate(45+yellowSpin);
  triangle(-75, -100, 75, -100, 0, -400);
  triangle(-100, -75, -100, 75, -400, 0);
  triangle(-75, 100, 75, 100, 0, 400);
  triangle(100, -75, 100, 75, 400, 0);
  pop();
  yellowSpin-=1

}
function redSpikes(angle, bass) {
  fill(red);
  let targetSize = map(bass, 0, 100, 0, 270);
  currentRedSpikeSize = lerp(currentRedSpikeSize, targetSize, 0.6)
  push();
  translate(width/2, height/2);
  rotate(angle);
  triangle(-50, -100, 50, -100, 0, -currentRedSpikeSize-100);
  triangle(-100, -50, -100, 50, -currentRedSpikeSize-100, 0);
  triangle(-45, 100, 50, 100, 0, currentRedSpikeSize+100);
  triangle(100, -45, 100, 50, currentRedSpikeSize+100, 0);
  pop();
}
function lyrics(words){
  noStroke();
  textStyle(BOLD);
  textAlign(CENTER);
  stroke(0)
  strokeWeight(10);
  fill(white);
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
  let targetSize = map(other, 0, 100, 100, 200);
  currentSquareSize = lerp(currentSquareSize, targetSize, 0.6)
  fill(white);
  rect(150, 150, currentSquareSize);
  rect(450, 150, currentSquareSize);
  rect(150, 450, currentSquareSize);
  rect(450, 450, currentSquareSize);
}
