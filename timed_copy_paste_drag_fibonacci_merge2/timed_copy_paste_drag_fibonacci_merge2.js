let sx, sy, sw, sh, dx, dy, dw, dh, fibonS;
let timer = 0;
let timer2 = 0;
let posX = 0;
let posY = 0;
let xoff = 0.8;
var diffX = 0;
var diffY = 0;
let chooseArray = 0;
let sourceMaterial = [];
let selectNu, selectNu2;

//fibonacci
var n = 0; // position in the sequence
var c = 4; // scaling - distance between points
let posiX, posiY; // was posX , posY

function preload() {
  sourceMaterial[0] = loadImage('data/facee1.png');
  sourceMaterial[1] = loadImage('data/facee2.png');
  sourceMaterial[2] = loadImage('data/facee3.png');
  sourceMaterial[3] = loadImage('data/facee4.png');
  sourceMaterial[4] = loadImage('data/facee6.png');
  
  sourceMaterial[5] = loadImage('data/abstractBlue.png');
  sourceMaterial[6] = loadImage('data/abstractGreen1.png');
  sourceMaterial[7] = loadImage('data/abstractGreen2.png');
  sourceMaterial[8] = loadImage('data/abstractPearl1.png');
  sourceMaterial[9] = loadImage('data/abstractPearl2.png');
  sourceMaterial[10] = loadImage('data/abstractPearlPearl.png');
  
  sourceMaterial[11] = loadImage('data/door1.png');
  sourceMaterial[12] = loadImage('data/land1.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,94,235); //green: 55, 255, 0
  
  image(sourceMaterial[12], 0, (windowHeight/2), windowWidth, (windowHeight/2));
  
  //fibonacci addition
   angleMode(DEGREES);
 frameRate(5);
  posiX = (windowWidth/2);
  posiY = (windowHeight/2);
}


//PASTING COPY COMAND
function copyCat() {
  copy(sx, sy, sw, sh, dx, dy, dw, dh);
}

//PASTING NORMAL IMAGE COMMAND
function imgNow() {
  image((sourceMaterial[selectNu2]), sx, sy, dw, dh);
}

function keyPressed() {
  //if the key is a s
  if (key == 's') {
    //save out to a file
    save('generative-test-path1.png');
  }
}

function draw() {
  noCursor();
  //SETTING RANDOM CUT AND PASTE AREAS ON THE SCREEN
  sx = int(random(0, width));
  sy = int(random(0, height));
  sw = int(random(50, 600));
  sh = int(random(30, 400));
  dx = int(random(-50, (width-50)));
  dy = int(random(-50, (height-50)));
  dw = int(random(20, 200));
  dh = int(random(10, 180));
  
  // fibonacci image size
  fibonS = int(random(18, 40));


  selectNu = (int(random(0, 4)));
  selectNu2 = (int(random(0, 12)));

  if (key == 'q') {
    selectNu = (int(random(0, 10)));
  }
  if (key == 'w') {
    selectNu = 12;
  }
  //CONTROLLING TIME INTERVALS BETWEEN GENERATIVE PASTING
  if (millis() >= (1001+timer)) {
    copyCat();
    timer = millis();
  }
/*
  if (millis() >= (2300+timer2)) {
    imgNow();
    print('hello');
    timer2 = millis();
  } */
  
  
  //fibonacci addition
  var a = n * 137.5;
  var r = c * sqrt(n);
  
  var x = r * cos(a) + posiX; // + .... moves the position of the start to the center
  var y = r * sin(a) + posiY; // + .... moves the position of the start to the center
 
  image((sourceMaterial[selectNu]), x, y, fibonS, fibonS);
  
//  noStroke();
//  fill(colVal, (colVal/2), colVal);
//ellipse(x, y, 4, 4);

  n++;
  
  if (n == 40) {
    n=0;
  //  colVal = int(random(255));
//    posX = (random(-(windowWidth/2), (windowWidth/2)));
 //   posY = (random(-(windowHeight/2), (windowHeight/2)));
    posiX = (random(0, windowWidth));
    posiY = (random((windowHeight/3), windowHeight));
    
    c = int(random(4, 40));
  }
  
}


function mousePressed() {
  //SELECTS IMAGE FROM THE ARRAY
  chooseArray = sourceMaterial[selectNu2];

  //IMAGES PASTED IN MOUSE LOCATION
  posX = mouseX;
  posY = mouseY;
}


function mouseDragged() {
  diffX = mouseX - posX;
  diffY = mouseY - posY;

  //CREATING THE IMAGE TO ABOVE SPECIFICATIONS
  image(chooseArray, posX, posY, diffX, diffY);
}
