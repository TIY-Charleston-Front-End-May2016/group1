class Character {
    constructor(opts) {
        this.name = opts.name || 'Dory';
        this.ability1 = opts.ability1;
        this.ability2 = opts.ability2;
        this.ability3 = opts.ability3;
    }
}


let Bruce = new Character({
    name: 'Bruce',
    ability1: 'Tail Whip',
    ability2: 'Barrel Roll',
    ability3: 'Swim Fast'
})
let Squirt = new Character({
    name: 'Squirt',
    ability1: 'Fin Chop',
    ability2: 'Turtle Spin',
    ability3: 'Shell Slide'
})
let Bloat = new Character({
    name: 'Bloat',
    ability1: 'Spike',
    ability2: 'De-Puff',
    ability3: 'Puff Up'
})


var CharacaterChoices = {
    Bruce: Bruce,
    Squirt: Squirt,
    Bloat: Bloat
}
