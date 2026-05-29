# JS Classes

## The Class Keyword 

- Classes are templates for creating objects in Javascript 

  ```js
  class Person {
      constructor(name,age){
          this.name = name;
          this.age = age;
      }
      greet(){
          return `Hello ${this.name}!`
      }
  }
  
  //Using our blueprint to make a real person 
  const jimmy = new Person("Jimmy",25)
  
  //Using some methods that our new object has based on the blueprint
  jimmy.greet() // Hello Jimmy
  ```

## Class Fields 

- Class fields let us define default properties directly inside the class.

  ```js
  class Player {
    score = 0;
    numLives = 10;
  
    constructor(first, last) {
      this.first = first;
      this.last = last;
    }
  }
  ```

- Use class fields when every instance should start with the same default value.

- Every new player starts with: score: 0 and numLives:10

- Class Fields can still change later 

  - Class fields are only initial values.
  - They are not constants.

## Private Fields 

- JavaScript class fields are public by default.

- Old Convention: `_property`

  ```js
  class Player {
    _score = 0;
  }
  player._score = -100; // still allowed
  ```

  - `_score` means “please don’t touch this.”
  - But it is only a naming convention.
  - It does **not** actually prevent access.

- Real Private Fields With `#`

  ```js
  class Player {
    #score = 0;
  }
  player.#score; // error
  ```

  - Use `#` to create a real private field in JavaScript.
  - `#score` can only be used inside the class.

- Access Private Data Through Methods

  ```js
  class Player {
    #score = 0;
  
    getScore() {
      return this.#score;
    }
  
    updateScore(newScore) {
      this.#score = newScore;
    }
  }
  
  const player = new Player();
  
  player.getScore();      // ok
  player.updateScore(28); // ok
  player.#score;          // error
  ```

- Methods can also be private using `#`.

  ```js
  class Player {
    #secret() {
      console.log("SECRET");
    }
  
    run() {
      this.#secret(); // ok
    }
  }
  ```

## Getters 

-  A getter lets us access computed logic like a normal property.

- Getter looks like a method in the class.

- But we use it like a property.

  ```js
  class Player {
    constructor(first, last) {
      this.first = first;
      this.last = last;
    }
  
    get fullName() {
      return `${this.first} ${this.last}`;
    }
    
    const player1 = new Player("Blue", "Steele");
  
  player1.fullName; // "Blue Steele"
  ```

- Getter With Private Field 

  ```js
  class Player {
    #score = 0;
  
    get score() {
      return this.#score;
    }
  }
  
  const player1 = new Player();
  
  console.log(player1.score); // 0
  
  //A getter only allows reading.
  //It does not automatically allow updating.
  player1.score = 100; // ignored or error depending on setup
  ```

  - `#score` is private.
  - `get score()` exposes it safely as a readable property.