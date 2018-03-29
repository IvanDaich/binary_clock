function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  textAlign(CENTER);
}

function draw() {

  background(0);
  
  let wid = width / 15;
  let mar = width / 50;

  let hr = nf(hour().toString(2), 5, 0);
  let mn = nf(minute().toString(2), 6, 0);
  let sc = nf(second().toString(2), 6, 0);
  
  translate(windowWidth / 2 - 0.5 * (6 * wid +  4 * mar), windowHeight / 2 - 2 * (wid + mar));

  fill(255, 255, 0);
  noStroke();
  textSize(width / 20);
  
  text(hr + " : " + mn + " : " + sc, (wid + mar) * 2.5, (wid + mar) * 4);
  
  for (let i = 0; i < 6; i++) {
    text(pow(2, i), ((5 - i) * (wid + mar)), mar * 2);
  }

  stroke(255, 255, 0);
  strokeWeight(1);

  for (let i = 0; i < 5; i++) {
    if (hr.charAt(i) == "1") {
      fill(255, 255, 0);
    } else {
      noFill();
    }
    rect(((i + 1) * (wid + mar)), (wid + mar), wid, wid);
  }

  for (let i = 0; i < 6; i++) {
    if (mn.charAt(i) == "1") {
      fill(255, 255, 0);
    } else {
      noFill();
    }
    rect(i * (wid + mar), (wid + mar) * 2,  wid, wid);

    if (sc.charAt(i) == "1") {
      fill(255, 255, 0);
    } else {
      noFill();
    }
    rect(i * (wid + mar), (wid + mar) * 3,  wid, wid);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
