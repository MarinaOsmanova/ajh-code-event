import Board from './Board';
import Clicker from './Clicker';

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
