export default class Character {
  constructor(name, type) {
    if ((name.length > 10) || (name.length < 2)) {
      throw new Error('Неверное указано Имя');
    }
    if (type !== 'Bowman' & type !== 'Swordsman' & type !== 'Magician' & type !== 'Undead' & type !== 'Zombie' & type !== 'Daemon') {
      throw new Error('Неверно указан тип персонажа');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    this.level++;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
