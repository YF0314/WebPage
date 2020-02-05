let radius;
let x = [];
let y = [];
let xoff;
let ball_counts = 3;
let wave_counts = 2;


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  radius = width / 10;
  colorMode(HSB, 360, 100, 100);
  noStroke();
  ellipseMode(RADIUS); //ellipseを半径で指定
  frameRate(5);
  for (let i = 0; i < ball_counts + 1; i++) { //初期位置設定
    x[i] = random(0, width);
    y[i] = random(0, height);
  }
}
function draw() {
  background(0);
  for (let index = 0; index < ball_counts + 1; index++) {
    drawGradient(index);
  } // 個数繰り返す。
  // drawGradient(1);
  // drawWave(1);
}

function drawGradient(index) {
  let h = random(0, 360);
  noStroke();
  for (let i = 0; i < ball_counts + 1; i++) { //玉の位置ノイズ
    x[i] = x[i] + (noise(0.001) * 10 * random(-4,4));
    y[i] = y[i] + (noise(0.001) * 10 * random(-4,4));
  }
  for (let r = radius; r > 0; --r) {
    xoff = xoff + 0.01;
    let nx = noise(0.02 * width);
    let ny = noise(0.02 * height);
    fill(h, 90, 90);
    ellipse((x[index] + random(-20, 20)) % width, (y[index] + random(-20, 20)) % height, r+(width / 8), r+(width / 8));//r+(width / 8)
    h = (h + 1) % 360;
  }
}
  // function drawWave(index) {
  //   let h = random(0, 360);
  //   noFill();
  //   rotate(-0.3);
  //   for (var posx=-500; posx<=window.innerWidth; posx+=100){
  //     push();
  //     translate(posx,0);
  //     beginShape();
  //     for (var y=0; y<=window.innerHeight+500; y+=6) {
  //       let nx = noise(0.02* width);
  //       var angle=map(y, 0, 300, 0, 360*wave_counts);
  //       var x=sin(radians(angle))*70;
  //       vertex(x*nx, y);
  //       stroke(120,90,90);
  //       h = (h + 1) % 360;
  //     }
  //     strokeWeight(30);
  //     endShape();
  //     pop();
  //   }
  // }
