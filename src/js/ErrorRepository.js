export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(100, 'Имя должно быть строкой!');
    this.errors.set(101, 'Длина имени не должна быть менее 2 и более 10 символов!');
    this.errors.set(102, 'Тип персонажа должен быть строкой!');
    this.errors.set(103, 'Неверный тип персонажа!');
    this.errors.set(104, 'Нельзя повысить уровень умершего персонажа!');
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
