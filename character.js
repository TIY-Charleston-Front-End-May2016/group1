class Character {
    constructor(opts)
    this.name = opts.name || 'Dory';
    this.ability1 = opts.ability1;
    this.ability2 = opts.ability2;
    this.ability2 = opts.ability3;
        // alert(`Yeah! ${this.name} hit ${obstical.name} with ${this.weapon.name}`)
        console.log(`Yeah! ${this.name} hit ${obstical.name} with ${this.weapon.name}`)
        obstical.health -= this.weapon.damage;
        if (obstical.health <= 0) {
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


let Bruce = new Character(name: 'Bruce',ability1: 'Tail Whip',ability2: 'Barrel Roll',ability3: 'Swim Fast');
let Squirt = new Character(name: 'Squirt',ability1: 'Fin Chop',ability2: 'Turtle Spin',ability3: 'Shell Slide');
let Bloat = new Character(name: 'Bloat',ability1: 'Spike',ability2: 'De-Puff',ability3: 'Puff Up');
