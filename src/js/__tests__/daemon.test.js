import Daemon from '../daemon';

test('Создание нового персонажа Daemon', () => {
  const received = new Daemon('Maxim', 'Daemon');
  const expected = {
    name: 'Maxim',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
