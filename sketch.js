//creates the vars for bullet, wall, speed, and weight
var thickness, wall;
var bullet, speed, weight;

function setup() {
  //gives dimensions to the canvas
  createCanvas(1600,400);

  //gives values of the speed and weight
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  //creates the required sprites
  bullet = createSprite(50, 200, 50, 25);
  wall = createSprite(1200, 200, thickness, height/2);

  //gives intial color to the bullet and wall
  bullet.shapeColor = "white";
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);  

  //sets bullet's velocity on the x-axis
  bullet.velocityX = speed;

  //tells computer what should happen after collision
  if (hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * speed * speed/(thickness * thickness);

    if (damage > 10) {
      wall.shapeColor = color(255,0,0);
    }

    if (damage < 10) {
      wall.shapeColor = color(0,255,0);
    }
  }

  //displays all sprites
  drawSprites();
}