const game = document.getElementById("game");
const msg = document.getElementById("message");
const levelNum = document.getElementById("levelNum");

let currentLevel =
  parseInt(localStorage.getItem("arrowLevel")) || 0;

let board = [];

function loadLevel() {

  board = JSON.parse(
    JSON.stringify(LEVELS[currentLevel])
  );

  levelNum.textContent = currentLevel + 1;

  render();
}

function render() {

  game.innerHTML = "";

  const rows = board.length;
  const cols = board[0].length;

  game.style.gridTemplateColumns =
    `repeat(${cols}, 70px)`;

  board.forEach((row, r) => {
    row.forEach((cell, c) => {

      const div = document.createElement("div");

      if(cell === null){
        div.className = "cell empty";
      } else {

        div.className = "cell";

        const arrows = {
          U: "⬆",
          D: "⬇",
          L: "⬅",
          R: "➡"
        };

        div.textContent = arrows[cell];

        div.onclick = () => move(r,c);
      }

      game.appendChild(div);

    });
  });

  checkWin();
}

function move(r,c){

  const dir = board[r][c];

  if(!dir) return;

  let nr = r;
  let nc = c;

  if(dir === "U") nr--;
  if(dir === "D") nr++;
  if(dir === "L") nc--;
  if(dir === "R") nc++;

  while(
    nr >= 0 &&
    nc >= 0 &&
    nr < board.length &&
    nc < board[0].length
  ){

    if(board[nr][nc] !== null){
      return;
    }

    if(dir === "U") nr--;
    if(dir === "D") nr++;
    if(dir === "L") nc--;
    if(dir === "R") nc++;
  }

  board[r][c] = null;

  render();
}

function checkWin(){

  let left = 0;

  board.forEach(row=>{
    row.forEach(cell=>{
      if(cell !== null) left++;
    });
  });

  if(left === 0){

    msg.textContent = "Level Complete!";

    localStorage.setItem(
      "arrowLevel",
      currentLevel + 1
    );

  } else {
    msg.textContent = "";
  }
}

document
.getElementById("restartBtn")
.onclick = loadLevel;

document
.getElementById("nextBtn")
.onclick = () => {

  currentLevel++;

  if(currentLevel >= LEVELS.length){
    currentLevel = 0;
  }

  loadLevel();
};

loadLevel();