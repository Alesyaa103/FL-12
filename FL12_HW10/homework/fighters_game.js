const Fighter = function (obj) {
  let user = obj;
  let wins = 0;
  let losses = 0;
  return {
    getName: function () {
      return user.name
    },
    getDamage: function () {
      return user.damage
    },
    getHp: function () {
      return user.hp
    },
    getStrength: function () {
      return user.strength
    },
    getAgility: function () {
      return user.agility
    },
    logCombatHistory: function () {
      return `name: ${user.name} wins: ${wins} losses: ${losses}`
    },
    decreaseHp: function (val) {
      user.hp -= val;
      return user.hp;
    },
    attack: function (Fighter) {
      console.log(user.hp, Fighter.getHp())
      if (100 - Fighter.getAgility() - Fighter.getStrength() >= Math.floor(Math.random() * 100)) {
        Fighter.decreaseHp(user.damage);
        console.log(`${user.name} makes ${Fighter.getDamage()} damage to ${Fighter.getName()}`);
      } else {
        console.log(`${user.name} attack missed`);
      }
    },
    heal: function (val) {
      user.hp + val <= 100 ? user.hp = user.hp + val : user.hp = 100;
    },
    dealDamage: function (val) {
      user.hp - val > 0 ? user.hp = user.hp - val : user.hp = 0;
    },
    addWin: function () {
      wins++;
    },
    addLoss: function () {
      losses++;
    }
  }
}

function battle(fighter1, fighter2) {
  if (fighter1.getHp() > 0 && fighter2.getHp() > 0) {
    while (fighter1.getHp() > 0 && fighter2.getHp() > 0) {
      fighter1.attack(fighter2);
      fighter2.attack(fighter1);
    }
    if (fighter1.getHp() > fighter2.getHp()) {
      console.log(`${fighter1.getName()} is the winner!`);
      fighter1.addWin();
      fighter2.addLoss();
    } else {
      console.log(`${fighter2.getName()} is the winner!`);
      fighter1.addWin();
      fighter2.addLoss();
    }
    console.log(fighter1.logCombatHistory(), fighter2.logCombatHistory());
  } else {
    console.log('One of fighters is dead(')
  }
}

const myFighter = new Fighter({
  name: 'Maximus',
  damage: 25,
  hp: 100,
  strength: 30,
  agility: 25
});

const myFighter2 = new Fighter({
  name: 'Ahill',
  damage: 15,
  hp: 100,
  strength: 25,
  agility: 30
});