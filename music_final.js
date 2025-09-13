// preset colour palette
let red = [235, 61, 68]
let yellow = [246, 245, 181]
let white = [255, 255, 255]  
let black = [0]
// assigning colours to a changing varible
let colour1 = red;
let colour2 = yellow;
let colour3 = white;
let colour4 = black;
let recordSpin = 2;
let redSpin = 2;
let dotSpacing = 60;
let currentDotSize = 0;
let currentRecordSize = 300;
let currentYellowSpikeSize = 270;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(colour4)
  textFont('Verdana'); 
  if (counter >= 3315 && counter <= 3348 || // start
  counter >= 3417 && counter <= 3448 || 
  counter >= 3521 && counter <= 3552 || 
  counter >= 3625 && counter <= 3656 || 
  counter >= 3725 && counter <= 3762 || 
  counter >= 7961 && counter <= 8238 || // first middle
  counter >= 8493 && counter <= 8767 || 
  counter >= 12081 && counter <= 12355 || // second middle
  counter >= 12617 && counter <= 12878 || 
  counter >= 13183 && counter <= 13220 || // end
  counter >= 13287 && counter <= 13324 || 
  counter >= 13395 && counter <= 13434 || 
  counter >= 13503 && counter <= 13536) {
  colour1 = black;
  colour2 = white;
  colour3 = yellow;
  colour4 = red;
  }
  else if (counter >= 3349 && counter <= 3384 || // start
  counter >= 3449 && counter <= 3484 ||
  counter >= 3553 && counter <= 3588 || 
  counter >= 3657 && counter <= 3693 || 
  counter >= 3763 && counter <= 3796 || 
  counter >= 8239 && counter <= 8492 || // first middle
  counter >= 8768 && counter <= 9094 ||
  counter >= 12356 && counter <= 12616 || // second middle
  counter >= 12879 && counter <= 13194 ||
  counter >= 13221 && counter <= 13258 || // end
  counter >= 13325 && counter <= 13358 || 
  counter >= 13435 && counter <= 13464 || 
  counter >= 13537 && counter <= 13569) {
  colour1 = yellow;
  colour2 = red;
  colour3 = black;
  colour4 = white;
  } else {
    colour1 = red;
    colour2 = yellow;
    colour3 = white;
    colour4 = black;
  }
  dots(drum);
  redSpikes();
  yellowSpikes(0, bass);
  yellowSpikes(45, bass);
  record(vocal);
  console.log(counter);

  //text and TAKE ME OUT layout
  if (counter >= 5438 && counter <= 5526 || counter >= 5990 && counter <= 6086 || counter >= 7062 && counter <= 7167 || counter >= 7637 && counter <= 7729 || counter >= 10079 && counter <= 10159 || counter >= 10636 && counter <= 10715 || counter >= 11185 && counter <= 11293) {
  textSize(120);
  textAlign(CENTER);
  textStyle(BOLD);
  stroke(colour3);
  strokeWeight(10);
  fill(colour4);
  if (counter >= 5438 && counter <= 5526) {
    if (counter >= 5438) text("TAKE", width / 2, 200);
    if (counter >= 5476) text("ME", width / 2, 350);
    if (counter >= 5494) text("OUT", width / 2, 500);
  }
  else if (counter >= 5990 && counter <= 6086) {
    if (counter >= 5990) text("TAKE", width / 2, 200);
    if (counter >= 6027) text("ME", width / 2, 350);
    if (counter >= 6052) text("OUT", width / 2, 500);
  }
  else if (counter >= 7062 && counter <= 7167) {
    if (counter >= 7062) text("TAKE", width / 2, 200);
    if (counter >= 7122) text("ME", width / 2, 350);
    if (counter >= 7139) text("OUT", width / 2, 500);
  }
  else if (counter >= 7637 && counter <= 7729) {
    if (counter >= 7637) text("TAKE", width / 2, 200);
    if (counter >= 7670) text("ME", width / 2, 350);
    if (counter >= 7686) text("OUT", width / 2, 500);
  }
  else if (counter >= 10079 && counter <= 10159) {
    if (counter >= 10079) text("TAKE", width / 2, 200);
    if (counter >= 10116) text("ME", width / 2, 350);
    if (counter >= 10126) text("OUT", width / 2, 500);
  }
  else if (counter >= 10636 && counter <= 10715) {
    if (counter >= 10636) text("TAKE", width / 2, 200);
    if (counter >= 10666) text("ME", width / 2, 350);
    if (counter >= 10682) text("OUT", width / 2, 500);
  }
  else if (counter >= 11185 && counter <= 11293) {
    if (counter >= 11185) text("TAKE", width / 2, 200);
    if (counter >= 11221) text("ME", width / 2, 350);
    if (counter >= 11235) text("OUT", width / 2, 500);
  }
} else {
  // Regular lyrics
  textSize(60);
  lyrics(words);
  }
}

function recordShine(angle,size) {
  fill(colour3)
  // in relation to angle
  arc(0, 0, size, size, angle+255, angle+265);
  arc(0, 0, size, size, angle-85, angle-75);
}
function record(vocal) {
  let targetSize = map(vocal, 20, 100, 250, 400); 
  currentRecordSize = lerp(currentRecordSize, targetSize, 0.3) // controlling the smoothness of the transition
  let recordStroke = map(currentRecordSize, 200, 380, 4, 16) // making the records stroke change in relation to the records size
  push();
  translate(width/2, height/2);
  rotate(recordSpin);
  stroke(0, 0, 0, 50);
  strokeWeight(recordStroke*3+3);
  ellipse(0, 0, currentRecordSize); //main circle shadow
  fill(colour1)
  stroke(colour3);
  strokeWeight(recordStroke);
  ellipse(0, 0, currentRecordSize); //main circle
  noStroke();
  recordShine(300,currentRecordSize);
  recordShine(180,currentRecordSize);
  recordShine(60,currentRecordSize);
  stroke(colour1);
  strokeWeight(recordStroke+3);
  noFill();
  ellipse(0, 0, currentRecordSize-250)
  ellipse(0, 0, currentRecordSize-200);
  ellipse(0, 0, currentRecordSize-130);
  ellipse(0, 0, currentRecordSize-60);
  ellipse(0, 0, currentRecordSize-10)
  stroke(colour3);
  strokeWeight(recordStroke/3);
  //record rings
  ellipse(0, 0, currentRecordSize-200);
  ellipse(0, 0, currentRecordSize-130);
  ellipse(0, 0, currentRecordSize-60);
  strokeWeight(recordStroke)
  ellipse(0, 0, currentRecordSize); //main circle
  fill(colour4);
  stroke(colour3);
  strokeWeight(recordStroke);
  let innerCircleSize = max(currentRecordSize - 260, 10);
  ellipse(0, 0, innerCircleSize); // inner circle
  pop();
  recordSpin+=2;
}
function redSpikes() {
  stroke(0, 0, 0, 70);
  strokeWeight(20);
  fill(colour1);
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
  fill(colour2);
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
  stroke(colour3)
  strokeWeight(10);
  fill(colour4);
  text(words.toUpperCase(), width/2, height/2+25);
}
function dots(drum) {
  fill(colour3); 
  let targetSize = map(drum, 0, 100, 0, 50);
  currentDotSize = lerp(currentDotSize, targetSize, 0.3);
  noStroke();
  for (let y = dotSpacing / 2; y < height; y += dotSpacing) {
    for (let x = dotSpacing / 2; x < width; x += dotSpacing) {
      circle(x, y, currentDotSize); 
    }
  }
}
