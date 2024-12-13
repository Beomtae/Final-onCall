import MONTH from '../constants/Month.js';

class Calendar {
  constructor(month, day) {
    this.month = month;
    this.days = [];
    this.calculateDays(month);
  }

  calculateDays(month) {
    for (const mon in MONTH) {
      if (mon === month) {
        this.days = new Array(Number(MONTH[mon])).fill(0);
        return this.days;
      }
    }
    return this.days;
  }
}

export default Calendar;
