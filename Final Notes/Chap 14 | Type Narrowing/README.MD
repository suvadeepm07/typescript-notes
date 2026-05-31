# Type Narrowing 

## typeof Type Guards 

- typeof Type Guards involve simply doing a type check before working with a value .Since unions allow multiple types for a value, we can first  check what came through before working with it

  ```ts
  const isTeentager =(age:number | string)=>{
      if(typeof age ==="string"){
          console.log(age.charAt(0)==="1");
          
      }
  
      if(typeof age ==="number"){
          console.log(age > 12 && age <30);
          
      }
  }
  
  isTeentager("20"); //false
  isTeentager(13) // true 
  ```

## Truthiness Guards 

- Truthiness Type Guards involve checking a value for being truth or falsy before working with it .This is helpful in avoiding errors when values  might be null or undefined

  ```ts
  const printLetters = (word: string | null) => {
    if (!word) {
      console.log("No word was provided");
    } else {
      for (let letter of word) {
        console.log(letter);
      }
    }
  };
  
  printLetters("hello");
  printLetters(null);
  ```

## Equality Narrowing 

- equality Type Guards involve comparing types to each other before doing certain operations with values

- By checking two values against one another , we can be sure they're both the same before working with them in a type-specific way

  ```ts
  const someFunc =(x:string | boolean,y:string | number)=> {
      if(x === y ){
          // x and y are strings in this case
          x.toUpperCase()
          y.toUpperCase()
      }
      else {
          console.log(x);
          console.log(y);
          
          
      }
  }
  ```

## in Operator Narrowing 

- Javascript's in operator helps check if a certain property exists in an  object .This means we can use it to check if a value exists in an object , according to its type alias or aliases , before working with it

  ```ts
  type Cat = { meow: () => void };
  type Dog = { bark: () => void };
  
  const talk = (creature: Cat | Dog) => {
    if ("meow" in creature) {
      console.log(creature.meow());
    } else {
      console.log(creature.bark());
    }
  };
  
  const kitty: Cat = {
    meow: () => "MEOWWW"
  };
  
  talk(kitty); // MEOWWW
  ```

## instanceof Narrowing 

- `instanceof` is a Javascript operator that allows us to check if one thing is an instance of another .This can help us narrow types  when working with things like classes

  ```ts
  const printFullDate  = (date:Date| string)=>{
      if(date instanceof Date){
          return date.toUTCString()
      }
      else{
          return new Date(date).toUTCString()
      }
  }
  ```

## Type Assertions 

- Type assertions tell TypeScript: “Treat this value as a specific type.”

- Syntax: `value as Type`

- Example:

  ```ts 
  interface Cat {
    name: string;
    numLives: number;
  }
  
  interface Dog {
    name: string;
    breed: string;
  }
  
  function isCat(animal: Cat | Dog): boolean {
    return (animal as Cat).numLives !== undefined;
  }
  ```

- Here `animal as Cat` means  “TypeScript, treat `animal` as a `Cat` here.” so TypeScript allows this: `(animal as Cat).numLives`

- Without the assertion , TypeScript gives an error: `(animal as Cat).numLives` because `animal` could be a `Dog`, and `Dog` does not have `numLives`

## Type Predicates 

- A type predicate is a custom function that tells TypeScript what type something is.

  ```ts
  interface Cat {
    name: string;
    numLives: number;
  }
  
  interface Dog {
    name: string;
    breed: string;
  }
  
  // A normal boolean function does not narrow the type for TypeScript.
  
  function isCat(animal: Cat | Dog): boolean {
    return (animal as Cat).numLives !== undefined;
  }
  
  if (isCat(animal)) {
    animal; // still Cat | Dog
  }
  
  
  ```

- Type Predicate Syntax

  ```
  parameterName is Type
  ```

- Example:

  ```ts
  function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined;
  }
  function makeNoise(animal: Cat | Dog): string {
    if (isCat(animal)) {
      return "Meow";
    } else {
      return "Woof";
    }
  }
  
  // Inside `if`, TypeScript knows `animal` is `Cat`.
  
  //Inside `else`, TypeScript knows `animal` is `Dog`.
  ```

  - `animal is Cat` tells TypeScript: If this function returns true, animal is Cat.

## discriminated unions

- A common pattern in Typescript involves creating a literal property that is common across multiple types .

- We can then narrow the type using the literal property

  ```ts
  interface Rooster {
    kind: "rooster";
    name: string;
    weight: number;
    age: number;
  }
  
  interface Cow {
    kind: "cow";
    name: string;
    weight: number;
    age: number;
  }
  
  interface Pig {
    kind: "pig";
    name: string;
    weight: number;
    age: number;
  }
  
  type FarmAnimal = Rooster | Cow | Pig;
  
  //`FarmAnimal` can be a `Rooster`, `Cow`, or `Pig`.
  
  //Narrow Using the Shared Property
  function getFarmAnimalSound(animal: FarmAnimal): string {
    switch (animal.kind) {
      case "pig":
        return "Oink";
  
      case "cow":
        return "Moo";
  
      case "rooster":
        return "Cock-a-doodle-doo";
    }
  }
  
  //TypeScript uses `animal.kind` to know the exact type. 
  //kind: "pig"     → Pig
  //kind: "cow"     → Cow
  //kind: "rooster" → Rooster
  
  
  const stevie: Rooster = {
    kind: "rooster",
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5
  };
  
  getFarmAnimalSound(stevie); // "Cock-a-doodle-doo"
  ```

## Exhaustiveness Checks With Never

- Exhaustiveness checking makes sure every possible union case is handled.

  ```ts
  type FarmAnimal = Pig | Cow | Rooster;
  
  function getFarmAnimalSound(animal: FarmAnimal): string {
    switch (animal.kind) {
      case "pig":
        return "Oink";
  
      case "cow":
        return "Moo";
  
      case "rooster":
        return "Cock-a-doodle-doo";
  
      default:
        const exhaustiveCheck: never = animal;
        return exhaustiveCheck;
    }
  }
  ```

- Why Use `never`?

  - `never` means this code should never be reached.

    ```ts
    const exhaustiveCheck: never = animal;
    ```

  - If every case is handled, TypeScript is happy.

  - If we add a new type but forget to handle it, TypeScript gives an error.

    ```ts
    interface Sheep {
      kind: "sheep";
      name: string;
      weight: number;
      age: number;
    }
    
    type FarmAnimal = Pig | Cow | Rooster | Sheep;
    ```

  - Now TypeScript complains because `"sheep"` is not handled in the switch.

  - Fix:

    ```ts
    case "sheep":
      return "Baaa";
    ```

  