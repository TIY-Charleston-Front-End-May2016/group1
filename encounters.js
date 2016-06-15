class Encounters {
   constructor(opts) {
   this.name = opts.name || 'Encounter';
   this.solution = opts.solution;
 }
}


let treasureChest = new Encounters ({name: 'Open the Treasure Chest',solution: 'ability1'});
let seaweedTangle = new Encounters ({name: 'Tangled in Seaweed',solution: 'ability2'});
let swiftCurrent = new Encounters ({name: 'Swim through the Swift Current',solution: 'ability3'});
