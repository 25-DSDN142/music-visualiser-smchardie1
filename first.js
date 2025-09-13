// vocal, drum, bass, and other are volumes ranging from 0 to 100
let red = [235, 61, 68]
let yellow = [246, 245, 181]
let white = [255]  
let black = [0]

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(60);
  yellowSpikes();
  redSpikes();
  record();
  lyrics(words);
}

function recordShine(angle) {
  fill(white)
  // in relation to angle
  arc(300, 300, 300, 300, angle+255, angle+265);
  arc(300, 300, 300, 300, angle-85, angle-75);
}
function record() {
  fill(red)
  stroke(white);
  strokeWeight(12);
  ellipse(300, 300, 300); //main circle
  noStroke();
  recordShine(300,300);
  recordShine(180,300);
  recordShine(60,300);
  stroke(red);
  strokeWeight(15);
  noFill();
  ellipse(300, 300, 50)
  ellipse(300, 300, 100);
  ellipse(300, 300, 170);
  ellipse(300, 300, 240);
  ellipse(300, 300, 290)
  stroke(white);
  strokeWeight(8);
  //record rings
  ellipse(300, 300, 100);
  ellipse(300, 300, 170);
  ellipse(300, 300, 240);
  strokeWeight(12)
  ellipse(300, 300, 300); //main circle
  fill(0);
  stroke(white);
  strokeWeight(12);
  ellipse(300, 300, 40); // inner circle
}
function yellowSpikes() {
  noStroke();
  fill(yellow);
  triangle(225, 200, 375, 200, 300, -100);
  triangle(200, 225, 200, 375, -100, 300);
  triangle(225, 400, 375, 400, 300, 700);
  triangle(400, 225, 400, 375, 700, 300);


}
function redSpikes(angle, bass) {
  fill(red);
  triangle(250, 200, 350, 200, 300, 30);
  triangle(200, 250, 200, 350, 30, 300);
  triangle(255, 400, 350, 400, 300, 570);
  triangle(400, 255, 400, 350, 570, 300);
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

