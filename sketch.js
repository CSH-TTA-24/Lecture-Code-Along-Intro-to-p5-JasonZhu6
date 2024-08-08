function setup() {
  createCanvas(500, 500);
  background(220, 220, 220);

  stroke(255, 0, 255)
  strokeWeight(10)
  //point(x, y)
  point(20, 20)

  //line(start x, start y, end x, end y)
  line(100, 100, 400, 400)

  fill(0, 255, 0)
  //rect(topleft x, topLeft y, width, height)
  rect(200, 200, 120, 190)

  fill(255, 0, 0)
  //ellipse(center x, center y, width, height)
  ellipse(180, 200, 200, 100)
}
