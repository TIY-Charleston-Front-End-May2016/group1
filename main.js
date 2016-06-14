///// Character constructor//////


function Good(opts) {
  this.name = opts && opts.name ? opts.name : 'Dori';
  this.color = opts && opts.color ? opts.color : 'neon';
  this.speed = opts && opts.speed ? opts.speed : 5;
  this.health = opts && opts.health ? opts.health : 100;
}


var winston = {
  name: 'winston',
  color: 'yellow',
  speed: 8.3,
  health: 100,
}
var riggan = {
  name: 'riggan',
  color: 'blue',
  speed: 3.2,
  health: 100,
}
var gabe = {
  name: 'gabe',
  color: 'pink',
  speed: 1.7,
  health: 100,
}

var winston = new Good(winston);
var riggan = new Good(riggan);
var gabe = new Good(gabe);




function Bad(opts) {
  this.name = opts && opts.name ? opts.name : 'Evil Dori';
  this.color = opts && opts.color ? opts.color : 'black';
  this.speed = opts && opts.speed ? opts.speed : 5;
  this.health = opts && opts.health ? opts.health : 100;
  this.attack = function(goodguy) {
    console.log(`Lookout! ${this.name} beat ${goodguy.name} with ${this.weapon.name}`)
    goodguy.health -= this.weapon.damage;
    if(goodguy.health <= 0) {
      console.error(`Oh No! ${goodguy.name} has died.`);
      obstical = null;
    } else {
      console.log("Current Health: ", goodguy.health)
    }
    this.weapon = opts && opts.weapon ? opts.weapon : 'sting';
}
}

var shark = {
  name: 'shark',
  color: 'red',
  speed: 9.3,
  health: 100,
}
var jellyfish = {
  name: 'jellyfish',
  color: 'purple',
  speed: 5.2,
  health: 100,
}
var human = {
  name: 'human',
  color: 'grey',
  speed: 8.7,
  health: 100,
}

var shark = new Bad(shark);
var jellyfish = new Bad(jellyfish);
var human = new Bad(human);
