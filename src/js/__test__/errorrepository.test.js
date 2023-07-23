import ErrorRepository from '../ErrorRepository';

test('translate method must return error description', () => {
  const result = (function testTranslate() {
    const errorRepository = new ErrorRepository();
    return errorRepository.translate(100);
  }());

  expect(result).toBe('Имя должно быть строкой!');
});

test('translate method must return Unknown error f there is no error code', () => {
  const result = (function testTranslate() {
    const errorRepository = new ErrorRepository();
    return errorRepository.translate(1);
  }());

  expect(result).toBe('Unknown error');
});
