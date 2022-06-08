import img from '../img/goblin.png';

export default class Board {
  constructor(boardSize, clicker) {
    this.clicker = clicker;
    this.boardSize = boardSize;
    this.boardEl = document.getElementById('game-board');
    this.currentPosition = null;
  }

  init() {
    this.createBoard();
    this.createCharacter();
    this.setInterval();
  }

  setInterval() {
    this.intervalId = setInterval(() => { this.showCharacter(); }, 1000);
  }

  createBoard() {
    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell');
      cellEl.addEventListener('click', (event) => this.onCellClick(event));
      this.boardEl.appendChild(cellEl);
      this.cells = Array.from(this.boardEl.children);
    }
  }

  createCharacter() {
    this.character = document.createElement('img');
    this.character.src = img;
  }

  showCharacter() {
    const newPosition = this.getRandomPosition();
    const cell = this.boardEl.children[newPosition];
    cell.appendChild(this.character);
    this.currentPosition = newPosition;
  }

  hideCharacter() {
    const cell = this.boardEl.children[this.currentPosition];
    cell.innerHTML = '';
  }

  getRandomPosition() {
    const limit = (this.boardSize ** 2) - (this.currentPosition === null ? 0 : 1);
    let randomIndex = Math.floor(Math.random() * limit);
    if (randomIndex === this.newPosition) {
      randomIndex = (this.boardSize ** 2) - 1;
    }
    return randomIndex;
  }

  stopGame() {
    clearInterval(this.intervalId);
    document.querySelector('h1').innerHTML = "Game Over";
  }

  onCharacterClick(event) {
    if (this.clicker.gameIsOver()) {
      return;
    }
    this.clicker.successClick();
    this.hideCharacter();
  }

  onCellClick(event) {
    if (this.clicker.gameIsOver()) {
      return;
    }

    const index = this.cells.indexOf(event.currentTarget);
    if (index == this.currentPosition) {
      this.clicker.successClick();
      this.hideCharacter();
    } else {
      this.clicker.missingClick();
      if (this.clicker.gameIsOver()) {
        this.stopGame();
      }
    }
  }
}

//const cursor = document.querySelector(".cursor");

//const mouseMove = function (e) {
  //let x = e.clientX;
  //let y = e.clientY;
  //cursor.style.left = x + "px";
  //cursor.style.top = y + "px";
//};

//document.addEventListener("mousemove", mouseMove);
