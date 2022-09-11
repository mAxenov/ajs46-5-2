import Character from '../app';

test('неверный указано имя персонажа', () => {
  expect(() => {
    new Character('n', 'Daemon');
  }).toThrow('Неверное указано Имя');
});

test('неверный тип персонажа', () => {
  expect(() => {
    new Character('name', 'type');
  }).toThrow('Неверно указан тип персонажа');
});
