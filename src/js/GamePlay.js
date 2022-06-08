import Board from '../js/Board.js';
import Clicker from '../js/Clicker.js';

export default class GamePlay {
  constructor() {
    this.boardSize = 4;
  }

  init() {
    const clicker = new Clicker();
    const board = new Board(this.boardSize, clicker);
    board.init();
  }
}
