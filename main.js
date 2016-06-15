//////NOT IN USE BUT COULD BE RANDOM ENEMY GENERATOR IN THE FUTURE/////////
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
