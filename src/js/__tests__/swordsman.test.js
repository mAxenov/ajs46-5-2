import Swordsman from '../swordsman';

test('Создание нового персонажа Swordsman', () => {
  const received = new Swordsman('Maxim', 'Swordsman');
  const expected = {
    name: 'Maxim',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
