import { Character } from '../app';

test.each([
  ['Maxim', 'Bowman', {
    name: 'Maxim',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }],
  ['Maxim', 'Swordsman', {
    name: 'Maxim',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }],
  ['Maxim', 'Magician', {
    name: 'Maxim',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }],
  ['Maxim', 'Undead', {
    name: 'Maxim',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }],
  ['Maxim', 'Zombie', {
    name: 'Maxim',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }],
  ['Maxim', 'Daemon', {
    name: 'Maxim',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }],
])(
  ('Character'),
  (name, type, expected) => {
    expect(new Character(name, type)).toEqual(expected);
  },
);

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

test('уровень + 1', () => {
  const char = new Character('Maxim', 'Daemon');
  char.levelUp();
  expect(char).toEqual({
    name: 'Maxim',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});


test('урон по персонажу', () => {
  const char = new Character('Maxim', 'Daemon');
  char.damage(50);
  expect(char).toEqual({
    name: 'Maxim',
    type: 'Daemon',
    health: 70,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
