import Calendar from '../models/Calendar.js';
import Parser from '../utils/Parser.js';
import InputView from '../views/InputView.js';

class Controller {
  static async run() {
    const monthAndDay = await InputView.readMonthAndDay();
    const [month, day] = Parser(monthAndDay);
    const calendar = new Calendar(month, day);
    console.log(calendar);
  }
}

export default Controller;
