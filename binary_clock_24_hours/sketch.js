function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	
	let hr = nf(hour().toString(2), 5, 0);
	let mn = nf(minute().toString(2), 6, 0);
	let sc = nf(second().toString(2), 6, 0);

	width = 50;
	margin = 10;
	
//	translate(((w/2) - (359/2)), ((h/2) - (170/2)));
//	translate(windowWidth / 2 - 0.5 * (4.5 * width + 5 * margin), windowHeight / 2 - 2 * (width + margin));
	
	fill(255, 255, 0)
	textSize(25);
	stroke(255, 255, 0);
	strokeWeight(1);

	text(hr + " : " + mn + " : " + sc, 50, 260);
	text("hr", 370, 85);
	text("mn", 370, 140);
	text("sc", 370, 200);
	

	for (let i = 0; i < 6; i++){
		text(pow(2, i), ((5 - i) * 50) + ((5 - i) * 10) + 30, 25);
	}
	
	for (let i = 0; i < 5; i++){
		if (hr.charAt(i) == "1"){
			fill(255, 255, 0);
		}
		else {
			noFill();
		}
		rect(70 + (i * 50) + (i * 10) , 50, 50, 50);
	}

	for (let i = 0; i < 6; i++){
		if (mn.charAt(i) == "1"){
			fill(255, 255, 0);
		}
		else {
			noFill();
		}
		rect(10 + (i * 50) + (i * 10) , 110, 50, 50);
	}
	
	for (let i = 0; i < 6; i++){
		if (sc.charAt(i) == "1"){
			fill(255, 255, 0);
		}
		else {
			noFill();
		}
		rect(10 + (i * 50) + (i * 10) , 170, 50, 50);
	}	
}
