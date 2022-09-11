import Zombie from '../zombie';

test('Создание нового персонажа Zombie', () => {
  const received = new Zombie('Maxim', 'Zombie');
  const expected = {
    name: 'Maxim',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
