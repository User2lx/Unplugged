<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sand Tetris</title>
<style>
  body { 
    background: #111; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 100vh; 
    margin: 0; 
  }
  canvas { 
    border: 2px solid #fff; 
    background: #000; 
  }
</style>
</head>
<body>
<canvas id="canvas" width="300" height="600"></canvas>
<script>
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cols = 15;
const rows = 30;
const size = 20;

// Sand grid
let grid = [];
for(let y=0; y<rows; y++){
  grid[y] = new Array(cols).fill(null);
}

// Sand colors
const sandColors = ["#FFD700","#FFA500","#FFB347","#FFC300"];

// Tetris pieces
const pieces = {
  I: [[1,1,1,1]],
  O: [[1,1],[1,1]],
  T: [[0,1,0],[1,1,1]],
  S: [[0,1,1],[1,1,0]],
  Z: [[1,1,0],[0,1,1]],
  J: [[1,0,0],[1,1,1]],
  L: [[0,0,1],[1,1,1]]
};

// Current falling piece
let player = { x: 5, y: 0, shape: null };

// Create a random piece
function newPiece(){
  const keys = Object.keys(pieces);
  const type = keys[Math.floor(Math.random()*keys.length)];
  player.shape = pieces[type].map(row => [...row]);
  player.x = Math.floor((cols - player.shape[0].length)/2);
  player.y = 0;
}

// Draw grid and falling piece
function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  // Draw sand
  for(let y=0; y<rows; y++){
    for(let x=0; x<cols; x++){
      if(grid[y][x]){
        ctx.fillStyle = grid[y][x];
        ctx.fillRect(x*size, y*size, size, size);
      }
    }
  }
  // Draw falling piece
  if(player.shape){
    for(let y=0; y<player.shape.length; y++){
      for(let x=0; x<player.shape[y].length; x++){
        if(player.shape[y][x]){
          ctx.fillStyle = "#fff";
          ctx.fillRect((player.x+x)*size, (player.y+y)*size, size, size);
        }
      }
    }
  }
}

// Check collision
function collide(shape, posX, posY){
  for(let y=0; y<shape.length; y++){
    for(let x=0; x<shape[y].length; x++){
      if(shape[y][x]){
        const gx = posX+x;
        const gy = posY+y;
        if(gx<0 || gx>=cols || gy>=rows) return true;
        if(grid[gy][gx]) return true;
      }
    }
  }
  return false;
}

// Place piece as sand
function placePiece(){
  for(let y=0; y<player.shape.length; y++){
    for(let x=0; x<player.shape[y].length; x++){
      if(player.shape[y][x]){
        const gx = player.x+x;
        const gy = player.y+y;
        if(gy>=0 && gy<rows && gx>=0 && gx<cols){
          grid[gy][gx] = sandColors[Math.floor(Math.random()*sandColors.length)];
        }
      }
    }
  }
  newPiece();
}

// Sand physics
function updateSand(){
  for(let y=rows-2; y>=0; y--){
    for(let x=0; x<cols; x++){
      if(grid[y][x] && !grid[y+1][x]){
        grid[y+1][x] = grid[y][x];
        grid[y][x] = null;
      } else if(grid[y][x]){
        if(x>0 && !grid[y+1][x-1] && Math.random()<0.5){
          grid[y+1][x-1] = grid[y][x];
          grid[y][x] = null;
        } else if(x<cols-1 && !grid[y+1][x+1] && Math.random()<0.5){
          grid[y+1][x+1] = grid[y][x];
          grid[y][x] = null;
        }
      }
    }
  }
}

// Game loop
let dropCounter = 0;
let dropInterval = 500;
let lastTime = 0;

function update(time=0){
  const deltaTime = time - lastTime;
  lastTime = time;
  dropCounter += deltaTime;
  if(dropCounter > dropInterval){
    player.y++;
    if(collide(player.shape, player.x, player.y)){
      player.y--;
      placePiece();
    }
    dropCounter = 0;
  }
  updateSand();
  draw();
  requestAnimationFrame(update);
}

document.addEventListener('keydown', e=>{
  if(e.key==="ArrowLeft"){
    if(!collide(player.shape, player.x-1, player.y)) player.x--;
  } else if(e.key==="ArrowRight"){
    if(!collide(player.shape, player.x+1, player.y)) player.x++;
  } else if(e.key==="ArrowDown"){
    player.y++;
    if(collide(player.shape, player.x, player.y)){
      player.y--;
      placePiece();
      dropCounter = 0;
    }
  } else if(e.key==="q"){
    rotate(player.shape, -1);
    if(collide(player.shape, player.x, player.y)) rotate(player.shape, 1);
  } else if(e.key==="w"){
    rotate(player.shape, 1);
    if(collide(player.shape, player.x, player.y)) rotate(player.shape, -1);
  }
});

// Rotate shape
function rotate(matrix, dir){
  for(let y=0; y<matrix.length; y++){
    for(let x=0; x<y; x++){
      [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
    }
  }
  if(dir>0) matrix.forEach(row=>row.reverse());
  else matrix.reverse();
}

newPiece();
update();
</script>
</body>
</html>
