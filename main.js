///////// Object Creation Basics with
///////// Methods and Functionality

function superhero(name, secretIdentity, weakness) {
    this.name = name;
    this.secretIdentity = secretIdentity;
    this.powers = ['Flight', 'Super Strength', 'Invisibility', 'Super speed'];
    this.weakness = weakness;
    this.usePower = function (powerNum) {
        console.log(`Using super-power: ${this.powers[powerNum]}`);
    };
    this.revealIdentity = function () {
        console.log(`I am... ${this.name}`);
    };
}


////////// Object Contstructors
const superman = new superhero('Superman', 'Clark Kent', 'Kryptonite');
const flash = new superhero('The Flash', 'Barry Allen', 'High metabolism');

console.log(superman);
console.log(superman.usePower(3));
