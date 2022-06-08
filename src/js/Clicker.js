export default class Clicker {
  constructor() {
    this.missingClickCount = 0;
    this.successClickCount = 0;
    this.maxMissingCount = 5;
    this.successCounter = document.querySelector('.success_click span');
    this.missingCounter = document.querySelector('.missing_click span');
  }

  successClick() {
    this.successClickCount++;
    this.successCounter.innerHTML = this.successClickCount;
  }

  missingClick() {
    this.missingClickCount++;
    this.missingCounter.innerHTML = this.missingClickCount;
  }

  gameIsOver() {
    return this.missingClickCount >= this.maxMissingCount;
  }
}
