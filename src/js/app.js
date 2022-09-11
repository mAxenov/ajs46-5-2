export class Character {
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

    if (type === 'Bowman') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Swordsman') {
      this.attack = 40;
      this.defence = 10;
    } else if (type === 'Magician') {
      this.attack = 10;
      this.defence = 40;
    } else if (type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    } else if (type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    }
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
