///////// 1. Object Creation Basics with
///////// 2. Methods and Functionality

function superhero(name, secretIdentity, weakness) {
    this.name = name;
    this.secretIdentity = secretIdentity;
    this.powers = ['Flight', 'Super Strength', 'Invisibility', 'Super speed'];
    this.weakness = weakness;
    this.category = '';
    this.usePower = function (powerNum) {
        console.log(`${this.name} is using super-power: ${this.powers[powerNum]}`);
    };
    this.revealIdentity = function () {
        console.log(`I am... ${this.name}`);
    };
    this.getCategory = function (category) {
        this.category = category;
        console.log(`I am a ${this.category}`);
    }
}


////////// 3. Object Contstructors
const superman = new superhero('Superman', 'Clark Kent', 'Kryptonite');
const flash = new superhero('The Flash', 'Barry Allen', 'High metabolism');

console.log(superman)
superman.usePower(1);
superman.revealIdentity();
superman.getCategory('hero');
console.log(superman);

console.log(flash);
flash.usePower(3);
flash.revealIdentity();
flash.getCategory('hero');
console.log(flash);


////////// 4. Prototypal Inheritance
superhero.prototype.age = '';
// console.log(superman);


////////// 5. Object Iteration and Transformation
const superheroList = [
    {name:'Batman', secretIdentity:'Bruce Banner', weakness:'family'},
    {name:'Robin', secretIdentity:'Bruce Banner', weakness:'family'},
    {name:'Cat woman', secretIdentity:'Bruce Banner', weakness:'family'},
    {name:'Bane', secretIdentity:'DC', weakness:'none'},
    {name:'Joker', secretIdentity:'DC', weakness:'none'},
    {name:'Riddler', secretIdentity:'DC', weakness:'none'},
];


// forEach()
superheroList.forEach(item => {
    if(item.weakness === 'none'){
        item.category = 'super villian';
    }
    else{
        item.category = 'hero';
    }
})

// console.log(superheroList);


// map()
superheroList.map(item => {
    if(item.weakness === 'family') {
        let weak = item;
        console.log(weak);
    }
});

// filter()
const badguys = superheroList.filter(item => {
    console.log(item.weakness === 'none');
})