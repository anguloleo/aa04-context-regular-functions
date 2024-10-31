function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
//eat(); // I think it will return undefined eats fish because it has no context or its global context with no assignemtn


/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // Nemo eats fish food


/********************************* Scenario 3 *********************************/
 //nemo.eat = eat;
 //eat(); // undefined eats fishfood


/********************************* Scenario 4 *********************************/
 //nemo.swim(); // nemo swimming in the water


/********************************* Scenario 5 *********************************/
 //const swim = nemo.swim;
 //swim(); // error because it was not binded
