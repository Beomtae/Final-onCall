import { Console } from '@woowacourse/mission-utils';

class InputView {
  static readMonthAndDay() {
    return Console.readLineAsync(`비상 근무를 배정할 월과 시작 요일을 입력하세요> `);
  }
}
export default InputView;
