import MONTH from '../constants/Month.js';
import Holiday from '../constants/Holiday.js';

class Calendar {
  constructor(month, day) {
    this.month = month;
    this.days = [];
    this.calculateDays(month);
    this.calculateHoliday(day);
    this.makeSpecialHoliday(month);
  }

  calculateDays(month) {
    for (const key in MONTH) {
      if (key === month) {
        this.days = new Array(Number(MONTH[key])).fill(0);
        return this.days;
      }
    }
    return this.days;
  }

  calculateHoliday(day) {
    if (day === '월') {
      this.days.forEach((date, index) => {
        if (index % 7 === 5 || index % 7 === 6) {
          this.days[index] = 1;
        }
      });
    }
    if (day === '화') {
      this.days.forEach((date, index) => {
        if (index % 7 === 4 || index % 7 === 5) {
          this.days[index] = 1;
        }
      });
    }
    if (day === '수') {
      this.days.forEach((date, index) => {
        if (index % 7 === 3 || index % 7 === 4) {
          this.days[index] = 1;
        }
      });
    }
    if (day === '목') {
      this.days.forEach((date, index) => {
        if (index % 7 === 2 || index % 7 === 3) {
          this.days[index] = 1;
        }
      });
    }
    if (day === '금') {
      this.days.forEach((date, index) => {
        if (index % 7 === 1 || index % 7 === 2) {
          this.days[index] = 1;
        }
      });
    }
    if (day === '토') {
      this.days.forEach((date, index) => {
        if (index % 7 === 0 || index % 7 === 1) {
          this.days[index] = 1;
        }
      });
    }
    if (day === '일') {
      this.days.forEach((date, index) => {
        if (index % 7 === 0 || index % 7 === 6) {
          this.days[index] = 1;
        }
      });
    }
  }

  makeSpecialHoliday(month) {
    for (const key in Holiday) {
      if (month === key && this.days[Holiday[key] - 1] === 0) {
        this.days[Holiday[key] - 1] = 2;
      }
    }
    if (month === '10' && this.days[2] === 0) {
      this.days[2] = 2;
    }
    if (month === '10' && this.days[8] === 0) {
      this.days[8] = 2;
    }
  }
}

export default Calendar;
