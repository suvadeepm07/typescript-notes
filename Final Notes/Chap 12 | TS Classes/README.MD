# Chap 12 | TS Classes

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

- Without declaring properties, TypeScript gives an error

- Type annotations are removed in compiled JavaScript

## Class Fields in TypeScript 

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

- Here we are declaring the properties score and numLives to 0 and 10  respectively , they are declared outside the constructor .Javascript  allows this but javascript does not care about types

  ```js
  const player = new Player("Elton", "Steele");
  
  player.score = "hello"; // allowed in JavaScript
  player.numLives = false; // allowed in JavaScript
  ```

- In TypeScript, class fields can also be declared outside the constructor

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

- Here, TypeScript understands: `score = 0 //number` and `numLives = 10 //number`

- so this is allowed `player.score = 100;`  but this is not allowed `player.score = "hello"; // error`

- Type Inference With Class Fields

  - TypeScript can infer the type from the starting value. `score =0` .TypeScript understands this as `score: number = 0;` . Both are valid `score = 0` and also `score:number = 0`

- When To Use Class Fields

  - Use class fields when every object should start with the same default value.

    ```js
    class Player {
      score = 0;
      numLives = 10;
    }
    ```

  - Every new player starts with `score = 0` and `numLives = 10`

- When to use Constructor

  - Use the constructor when the value is different for each object.

    ```js
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

    ```js
    const p1 = new Player("Elton", "Steele");
    const p2 = new Player("Tony", "Stark");
    ```

## Readonly Class Properties 

- `readonly` class properties means a class property can be assigned once, but cannot be changed later.

  ```js
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

  ```js
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

  ```js
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

## public vs readonly 

-  `public` controls **access**.

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

- public   = can access from outside and readonly = cannot change after creation

## Private Modifier 

- `private` means a property or method can only be accessed **inside the class**.

  ```js
  class Player {
    private score = 0;
  
    addPoint(): void {
      this.score++;
    }
  }
  
  const player = new Player();
  
  player.score; // error
  ```

## TypeScript private vs JavaScript #private 

- TypeScript `private` is removed after compilation.

- JavaScript `#private` stays in JavaScript and protects at runtime.

- `#private` needs `target: "ES2015"` or higher.

- We cannot combine both

  ```js
  private score = 0; // TypeScript-only protection
  #score = 0; // real JavaScript runtime privacy
  ```

## Parameter Properties Shorthand

- Parameter properties are a TypeScript shortcut for creating and initializing class properties directly in the constructor.

- Normal Version

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

  - This is repetitive because we write `first` and `last` multiple times

- Shortcut Version 

  ```ts
  class Player {
    constructor(
      public first: string,
      public last: string
    ) {}
  }
  ```

  - This automatically:

    - creates `first` and `last` properties
    - assigns constructor values to them

  - Works with Modifiers 

    ```ts
    class Player {
      constructor(
        public first: string,
        public last: string,
        private score: number
      ) {}
    }
    ```

    - `public` means accessible outside the class.
    - `private` means only usable inside the class.

## Getters and Setters in TypeScript 

- Getters and setters work like JavaScript, but TypeScript adds type checking.

- Getter

  - A getter creates a computed property.

  - Use getter like a property, not a method.

    ```js
    class Player {
      constructor(
        public first: string,
        public last: string
      ) {}
    
      get fullName(): string {
        return `${this.first} ${this.last}`;
      }
    }
    const elton = new Player("Elton", "Steele");
    console.log(elton.fullName); // ok -> Elton Steele
    ```

- If a property only has a getter, TypeScript treats it as readonly.

- Getter + Setter Around Private Data

  ```ts
  class Player {
    private _score = 0;
  
    get score(): number {
      return this._score;
    }
  
    set score(newScore: number) {
      if (newScore < 0) {
        throw new Error("Score cannot be negative");
      }
  
      this._score = newScore;
    }
  }
  
  const elton = new Player();
  
  elton.score;      // getter
  elton.score = 99; // setter
  ```

## Protected in TypeScript Classes 

- `protected` means a property or method can be accessed:

  - inside the class where it is defined

  - inside child classes that extend it

    ```ts
    class Player {
      protected _score = 0;
    }
    
    class SuperPlayer extends Player {
      maxScore(): void {
        this._score = 999999; // ok
      }
    }
    ```

## private vs protected 

- `private` only works inside the exact class.

- Child classes cannot access `private` properties.

  ```ts
  class Player {
    private _score = 0;
  }
  
  class SuperPlayer extends Player {
    maxScore(): void {
      this._score = 999999; // error
    }
  }
  ```

## Interface with classes 

- A class can follow an interface using `implements`.

- `implements` means the class must satisfy the interface rules.

- Multiple classes can implement same interface

- A class that `implements` an interface **can have extra properties and methods** (The interface only says: This class must have at least these required members . t does **not** say: This class can only have these members)

- Interfaces Can Require Methods Too

  ```ts
  interface Colorful {
    color: string;
  }
  class Bike implements Colorful {
    constructor(public color: string) {}
  }
  class Scooty implements colorful{
    //error: missing color
  }
  
  class Jacket implements Colorful {
    constructor(
      public brand: string,
      public color: string
    ) {}
  }
  
  interface Printable {
    print(): void;
  }
  
  
  class Jacket implements Colorful, Printable {
    constructor(
      public brand: string,
      public color: string
    ) {}
  
    print(): void {
      console.log(`${this.color} ${this.brand}`);
    }
  }
  ```

## Abstract Classes 

- `abstract` classes cannot be instantiated directly.

  ```js
  abstract class Employee {
    constructor(
      public first: string,
      public last: string
    ) {}
  }
  
  const emp = new Employee("John", "Doe"); // error
  ```

- Abstract methods are methods that child classes **must implement**

- Every class extending `Employee` must define `getPay()`.

  ```ts
  abstract class Employee {
    constructor(
      public first: string,
      public last: string
    ) {}
  
    abstract getPay(): number;
  }
  
  class FullTimeEmployee extends Employee {
    constructor(
      first: string,
      last: string,
      private salary: number
    ) {
      super(first, last);
    }
  
    getPay(): number {
      return this.salary;
    }
  }
  
  class PartTimeEmployee extends Employee {
    constructor(
      first: string,
      last: string,
      private hourlyRate: number,
      private hoursWorked: number
    ) {
      super(first, last);
    }
  
    getPay(): number {
      return this.hourlyRate * this.hoursWorked;
    }
  }
  ```

- Abstract Class vs Interface

  - interface  = only describes required shape
  - abstract class  = shared code + required methods