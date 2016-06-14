



///// Character constructor//////

////Clicking on character name
$('a').on('click', function(){
  event.preventDefault();
  console.log("i clicked");
})

////Random Selection of Enemy
// var enemies = ['shark','jellyfish','human'];
//
// function randomEnemy (anyListOfEnemies) {
//   var randomNum= Math.random();
//   var lengthOfEnemyList = anyListOfEnemies.length;
//   var lastIndexOfEnemies = lengthOfEnemyList - 1;
//   var guessEnemy = Math.floor(randomNum * lengthOfEnemyList);
//   return anyListOfEnemies[guessEnemy];
// }
// randomEnemy(enemies);



function Good(opts) {
  this.name = opts && opts.name ? opts.name : 'Dori';
  this.color = opts && opts.color ? opts.color : 'neon';
  this.speed = opts && opts.speed ? opts.speed : 5;
  this.health = opts && opts.health ? opts.health : 100;
  this.attack = function(obstical) {
    // alert(`Yeah! ${this.name} hit ${obstical.name} with ${this.weapon.name}`)
    console.log(`Yeah! ${this.name} hit ${obstical.name} with ${this.weapon.name}`)
    obstical.health -= this.weapon.damage;
    if(obstical.health <= 0) {
      // alert(`${obstical.name} swam away!`);
      console.error(`${obstical.name} swam away!`);
      obstical = null;
    } else {
      // alert('Health is at: ', obstical.health)
      console.log('Health is at: ', obstical.health)
    }
  }
  this.weapon = opts && opts.weapon ? opts.weapon : 'bubbles';
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
    // alert(`Lookout! ${this.name} beat ${goodguy.name} with ${this.weapon.name}`)
    console.log(`Lookout! ${this.name} beat ${goodguy.name} with ${this.weapon.name}`)
    goodguy.health -= this.weapon.damage;
    if(goodguy.health <= 0) {
      // alert(`Oh No! ${goodguy.name} has died.`);
      console.error(`Oh No! ${goodguy.name} has died.`);
      obstical = null;
    } else {
      // alert("Current Health: ", goodguy.health)
      console.log("Current Health: ", goodguy.health)
    }
    this.weapon = opts && opts.weapon ? opts.weapon : 'sting';
}
}

function randomEnemy (anyListOfEnemies) {
  var randomNum= Math.random();
  var lengthOfEnemyList = anyListOfEnemies.length;
  var lastIndexOfEnemies = lengthOfEnemyList - 1;
  var guessEnemy = Math.floor(randomNum * lengthOfEnemyList);
  return anyListOfEnemies[guessEnemy];
}
randomEnemy(enemies);

var enemies =
{
  shark: {
  name: 'shark',
  color: 'red',
  speed: 9.3,
  health: 100,
},
  jellyfish: {
  name: 'jellyfish',
  color: 'purple',
  speed: 5.2,
  health: 100,
},
  human: {
  name: 'human',
  color: 'grey',
  speed: 8.7,
  health: 100,
},
}

var shark = new Bad(shark);
var jellyfish = new Bad(jellyfish);
var human = new Bad(human);

function Weapon(opts) {
  this.name = opts ? opts.name : 'Sting';
  this.damage = opts ? opts.damage : Math.floor(Math.random() * 20);
}

var sting = new Weapon({name: "Sting", damage: 15});
var bubbles = new Weapon({name: "Bubbles", damage: 30 });
var bite = new Weapon({name: "Bite", damage: 20});
var grab = new Weapon({name:"Grab", damage:40})
