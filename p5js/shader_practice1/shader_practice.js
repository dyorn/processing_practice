var WINDOW_HEIGHT = 512
var WINDOW_WIDTH  = 512

var H_MAX = 360
var S_MAX = 100
var V_MAX = 100

var DEFAULT_BACKGROUND = [0, 0, 100]

var ORIGINAL_GRID_SIZE_X = 16;
var ORIGINAL_GRID_SIZE_Y = 16;

var GRID_SIZE_X = 64;
var GRID_SIZE_Y = 64;

var CELL_SIZE_X = (WINDOW_WIDTH / GRID_SIZE_X); 
var CELL_SIZE_Y = (WINDOW_HEIGHT / GRID_SIZE_Y); 

var cellSizeNorm = CELL_SIZE_X / WINDOW_WIDTH;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

////////////////////////

// a shader variable
let theShader;

function preload(){
  // load the shader
  theShader = loadShader('shader_practice.vert', 'shader_practice.frag');
}

function setup()
{
  pixelDensity(1); // disable scaling for retina displays
  createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT, WEBGL);
  noStroke()

  for (var i = 0; i < GRID_SIZE_X; i++)
  {
    console.log(i, cellSizeNorm * i);
  }
}

function draw()
{
  // shader() sets the active shader with our shader
  shader(theShader);

  theShader.setUniform('resolution', [WINDOW_WIDTH, WINDOW_HEIGHT]);
  theShader.setUniform('mouse', [mouseX, mouseY]);
  theShader.setUniform('gridSize', [GRID_SIZE_X, GRID_SIZE_Y]);
  theShader.setUniform('cellSize', [CELL_SIZE_X, CELL_SIZE_Y]);
  theShader.setUniform('time', frameCount * 0.01);

  // rect gives us some geometry on the screen
  rect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
  
  // print out the framerate
  //  print(frameRate());
}

function mouseMoved()
{
  //var x = mouseX;
  //var y = mouseY;
  //var normX = x / WINDOW_WIDTH;
  //var normY = y / WINDOW_HEIGHT;
  //var cellSizeNormX = CELL_SIZE_X / WINDOW_WIDTH;
  //var cellSizeNormY = CELL_SIZE_Y / WINDOW_HEIGHT;
  ////console.log(x, y, normX, normY, Math.floor(normX / cellSizeNormX) / GRID_SIZE_X, Math.floor(normY / cellSizeNormY) / GRID_SIZE_Y);
  //var newGridSizeX = Math.floor(normX / cellSizeNormX);
  //var newGridSizeY = Math.floor(normY / cellSizeNormY);
  //GRID_SIZE_X = newGridSizeX;
  //GRID_SIZE_Y = newGridSizeY;
}

function mouseClicked()
{

}

function windowResized(){ // disable rescaling on window resizing
  resizeCanvas(WINDOW_WIDTH, WINDOW_HEIGHT);
}
