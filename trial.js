// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);






  
  let bar_spacing = height / 10;
  let bar_height = width / 12;
  let bar_pos_x = width / 2;

  fill(200, 0, 0);
  rect(bar_pos_x, height / 2 + 1 * bar_spacing + 8, 4 * vocal, 8);
  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  // drum bar is green
  fill(0, 200, 0);
  rect(bar_pos_x, height / 2 + 2 * bar_spacing + 8, 4 * drum, 8);
  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  // bass bar is blue
  fill(50, 50, 240);
  rect(bar_pos_x, height / 2 + 3 * bar_spacing + 8, 4 * bass, 8);
  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  // other bar is white
  fill(200, 200, 200);
  rect(bar_pos_x, height / 2 + 4 * bar_spacing + 8, 4 * other, 8);
  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   

  // display "words"
  noStroke();
  fill(255, 255, 0);
  textAlign(CENTER);
  textSize(vocal);
  text(words, width/2, height/3);

  col = map(drum, 0, 100, 0, 255);
  fill(col);
  rect(0, 800, 1800, drum*4)
}