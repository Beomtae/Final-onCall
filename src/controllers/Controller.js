import InputView from '../views/InputView.js';

class Controller {
  static async run() {
    const monthAndDay = await InputView.readMonthAndDay();
    const parsedMonthAndDay = monthAndDay.split(',');
  }
}

export default Controller;
