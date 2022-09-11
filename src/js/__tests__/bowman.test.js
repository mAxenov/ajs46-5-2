import Bowman from '../bowman';

const received = new Bowman('Maxim', 'Bowman');
test('Создание нового персонажа Bowman', () => {
  const expected = {
    name: 'Maxim',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Повышения уровня персонажа Bowman', () => {
  received.levelUp();
  const expected = {
    name: 'Maxim',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(received).toEqual(expected);
});

test('Урон по персонажу Bowman', () => {
  received.damage(50);
  const expected = {
    name: 'Maxim',
    type: 'Bowman',
    health: 65,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(received).toEqual(expected);
});

test('Урон по персонажу Bowman', () => {
  received.health = 0;
  received.damage(50);
  const expected = {
    name: 'Maxim',
    type: 'Bowman',
    health: 0,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(received).toEqual(expected);
});
