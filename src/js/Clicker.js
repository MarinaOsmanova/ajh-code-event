export default class Clicker {
  constructor() {
    this.missingClickCount = 0;
    this.successClickCount = 0;
    this.maxMissingCount = 5;
    this.successCounter = document.querySelector('.success_click span');
    this.missingCounter = document.querySelector('.missing_click span');
  }

  successClick() {
    this.successClickCount += 1;
    this.successCounter.innerHTML = this.successClickCount;
  }

  missingClick() {
    this.missingClickCount += 1;
    this.missingCounter.innerHTML = this.missingClickCount;
  }

  gameIsOver() {
    return this.missingClickCount >= this.maxMissingCount;
  }
}
