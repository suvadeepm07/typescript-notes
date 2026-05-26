# TS Classes 

## Annotating Classes in TypeScript

- In TypeScript classes, constructor parameters need types.

  ```ts
  class Player {
    first: string;
    last: string;
  
    constructor(first: string, last: string) {
      this.first = first;
      this.last = last;
    }
  }
  
  const elton = new Player("Elton","Steele")
  ```

- Class properties must be declared before using them in the constructor.

  ```ts
  first: string;
  last: string;
  ```

- Without declaring properties, TypeScript gives an error:

- Type annotations are removed in compiled JavaScript

## Class Fields In TypeScript

- In JavaScript, we can create class fields directly outside the constructor.

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

- Here we are declaring the properties score and numLives to 0 and 10 respectively , they are declared outside the constructor .Javascript allows this but javascript does not care about types 

  ```js
  const player = new Player("Elton", "Steele");
  
  player.score = "hello"; // allowed in JavaScript
  player.numLives = false; // allowed in JavaScript
  ```

- In TypeScript, class fields can also be declared outside the constructor.

  ```ts
  class Player {
    first: string;
    last: string;
    score = 0;
    numLives = 10;
  
    constructor(first: string, last: string) {
      this.first = first;
      this.last = last;
    }
  }
  ```

- Here, TypeScript understands: `score = 0 //number` and `numLives = 1- //number` 

- so this is allowed `player.score = 100;`  but this is not allowed `player.score = "hello"; // error`

- Type Inference With Class Fields 

  - TypeScript can infer the type from the starting value. `score =0` .TypeScript understands this as `score: number = 0;` . Both are valid `score = 0` and also `score:number = 0`

- When To Use Class Fields

  - Use class fields when every object should start with the same default value.

    ```ts
    class Player {
      score = 0;
      numLives = 10;
    }
    ```

  - Every new player starts with `score = 0` and `numLives = 10`

- When to use Constructor 

  - Use the constructor when the value is different for each object.

    ```ts
    class Player {
      first: string;
      last: string;
    
      constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
      }
    }
    ```

  - Each player gets their own name:

    ```ts
    const p1 = new Player("Elton", "Steele");
    const p2 = new Player("Tony", "Stark");
    ```

## Readonly Class Properties

- `readonly` class properties means a class property can be assigned once, but cannot be changed later.

  ```ts
  class Player {
    readonly first: string;
    readonly last: string;
    score = 0;
  
    constructor(first: string, last: string) {
      this.first = first;
      this.last = last;
    }
  }
  
  const elton = new Player("Elton", "Steele");
  //TypeScript blocks this because `first` is //`readonly`.
  elton.first = "elton"; // error
  ```

  

## The public Modifier 

- `public` means a property or method can be accessed from outside the class.

  ```ts
  class Player {
    public first: string;
    public last: string;
    public score = 0;
  
    constructor(first: string, last: string) {
      this.first = first;
      this.last = last;
    }
  }
  
  const elton = new Player("Elton", "Steele");
  
  console.log(elton.first); // ok
  console.log(elton.score); // ok
  ```

- Class properties and methods are **public by default**.

  ```ts
  class Player {
    first: string;
    last: string;
    score = 0;
  }
  
  //The above is the same as below
  class Player {
    public first: string;
    public last: string;
    public score = 0;
  }
  ```

- `public` vs `readonly`

  - `public` controls **access**.

  - `readonly` controls **reassignment**.

    ```ts
    class Player {
      public readonly first: string;
    
      constructor(first: string) {
        this.first = first;
      }
    }
    
    console.log(player.first); // ok
    player.first = "Tony";     // error
    ```

  - So : public   = can access from outside and readonly = cannot change after creation
  
- 