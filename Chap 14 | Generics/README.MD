# Generics

## Introducing Generics

- Generics allow us to define reusable functions and classes that work with multiple types rather than a single type

  ```ts
  function doThing<T>(thing: T): T {
    return thing;
    //If we pass a string, TypeScript knows it returns a string
    doThing("hello"); // string
    
    //If we pass a number, TypeScript knows it returns a number.
    doThing(123); // number
  ```

## Writing Our First Generic

- A generic function lets one function work with different types while keeping the input and output type connected.

  ```ts
  function identity<T>(item: T): T {
    return item;
  }
  
  //`T` is a type placeholder.
  //T = whatever type is passed in
  
  identity<string>("hello"); // returns string
  identity<number>(7);       // returns number
  identity<boolean>(true);   // returns boolean
  
  interface Cat {
    name: string;
    breed: string;
  }
  
  const cat = identity<Cat>({
    name: "Blue",
    breed: "Siamese"
  });
  
  //Example 2 
  function getRandomElement<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
  }
  
  const color = getRandomElement<string>(["red", "blue", "green"]);
  const num = getRandomElement<number>([1, 2, 3]);
  
  interface Cat {
    name: string;
    breed: string;
  }
  
  const cat = getRandomElement<Cat>([
    { name: "Blue", breed: "Siamese" },
    { name: "Kitty", breed: "Persian" }
  ]);
  ```
  
  