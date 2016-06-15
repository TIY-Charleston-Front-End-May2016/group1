///// Character constructor//////

////Clicking on character name
// $('a').on('click', function() {
//    event.preventDefault();
//    console.log("i clicked");
// })
//
// ////Random Selection of Enemy
// var  = ['shark', 'jellyfish', 'human'];
//
// function randomEnemy(enemyObject) {
//    var randomNum = Math.random();
//    var anyListOfEnemies = Object.keys(enemyObject)
//    var lengthOfEnemyList = anyListOfEnemies.length;
//    var lastIndexOfEnemies = lengthOfEnemyList - 1;
//    var guessEnemy = Math.floor(randomNum * lengthOfEnemyList);
//    var enemyString = anyListOfEnemies[guessEnemy];
//    return enemyObject[enemyString];
// }
//
// var objectOfMyEnemies = {
//    shark: {
//        name: 'shark',
//        color: 'red',
//        speed: 9.3,
//        health: 100,
//    },
//    jellyfish: {
//        name: 'jellyfish',
//        color: 'purple',
//        speed: 5.2,
//        health: 100,
//    },
//    human: {
//        name: 'human',
//        color: 'grey',
//        speed: 8.7,
//        health: 100,
//    }
// }
// console.log(randomEnemy(objectOfMyEnemies));
//


// class Character {
//    constructor(opts) {
//    this.name = opts.name || 'Dory';
//    this.ability1 = opts.ability1;
//    this.ability2 = opts.ability2;
//    this.ability2 = opts.ability3;
// }
// }
//
//
// let Bruce = new Character({name: 'Bruce',ability1: 'Tail Whip',ability2: 'Barrel Roll',ability3: 'Swim Fast'});
// let Squirt = new Character({name: 'Squirt',ability1: 'Fin Chop',ability2: 'Turtle Spin',ability3: 'Shell Slide'});
// let Bloat = new Character({name: 'Bloat',ability1: 'Spike',ability2: 'De-Puff',ability3: 'Puff Up'});
// $('a').on('click', function() {
//    event.preventDefault();
//    console.log("i clicked");
// })

////Random Selection of Enemy

function randomEnemy(enemyObject) {
   var randomNum = Math.random();
   var anyListOfEnemies = Object.keys(enemyObject)
   var lengthOfEnemyList = anyListOfEnemies.length;
   var lastIndexOfEnemies = lengthOfEnemyList - 1;
   var guessEnemy = Math.floor(randomNum * lengthOfEnemyList);
   var enemyString = anyListOfEnemies[guessEnemy];
   return enemyObject[enemyString];
}

var objectOfMyEnemies = {
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
   }
}
// console.log(randomEnemy(objectOfMyEnemies));
