let colorSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorSlider = createSlider(0, 1, 1);
  colorSlider.position(20, 20);
}

function draw() {

  let hr = nf(hour().toString(10).toUpperCase(), 2, 0);
  let mn = nf(minute().toString(10).toUpperCase(), 2, 0);
  let sc = nf(second().toString(10).toUpperCase(), 2, 0);
  bg = color(int(hr), int(mn), int(sc));
  background(bg);

  fill(255);
  textSize(width / 10);
  textAlign(CENTER);

  bg_code = hr + mn + sc;
  text("#" + bg_code, width / 2, height / 2);

  textSize(20);
  if (colorSlider.value() === 1) {
    colorMode(HSB);
    text('colorMode: HSB', 230, 38);
  } else {
    colorMode(RGB);
    text('colorMode: RGB', 230, 38);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
