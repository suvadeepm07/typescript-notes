# Chap 13 | Generics

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

## Some Examples of Generics 

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

## Inferred Generic Type Parameters

- TypeScript can often infer the generic type automatically.

  ```js
  function getRandomElement<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
  }
  
  const color = getRandomElement(["red", "blue", "green"]);
  // TypeScript infers string
  
  const num = getRandomElement([1, 2, 3]);
  // TypeScript infers number
  ```

## Generic Functions with Multiple Types

- A generic function can use more than one type parameter

  ```js
  function merge<T, U>(object1: T, object2: U) {
    return {
      ...object1,
      ...object2
    };
  }
  
  // `T` represents the first argument type.
  // `U` represents the second argument type.
  
  const comboObject = merge(
    { name: "Colt" },
    { pets: ["Blue", "Elton"] }
  );
  ```

## Adding Type Constraints

- Generic constraints limit what types are allowed for a generic.

  ```js
  function merge<T extends object, U extends object>(obj1: T, obj2: U) {
    return {
      ...obj1,
      ...obj2
    };
  }
  
  // Now both arguments must be objects.
  
  merge({ name: "Colt" }, { age: 30 }); // ok
  merge({ name: "Colt" }, 9);           // error
  ```

- Constraint with interface

  ```js
  interface Lengthy {
    length: number;
  }
  
  function printDoubleLength<T extends Lengthy>(thing: T): number {
    return thing.length * 2;
  }
  
  //Now `thing` must have a `length` property.
  
  printDoubleLength("hello");     // ok
  printDoubleLength([1, 2, 3]);   // ok
  printDoubleLength(123);         // error
  ```

## Default Type Parameters in Generics 

- Generics can have a default type.

- If we provide a type, TypeScript uses that type.

- If we do not provide a type, TypeScript uses the default.

  ```ts
  function makeEmptyArray<T = number>(): T[] {
    return [];
  }
  
  const strings = makeEmptyArray<string>();
  
  strings.push("hello"); // ok
  strings.push(123);     // error
  
  const nums = makeEmptyArray()
  nums.push(123);     // ok
  nums.push("hello"); // error
  ```

## Generic Classes 

- Classes can also use generics.

  ```ts
  class Playlist<T> {
    public queue: T[] = [];
  
    add(element: T): void {
      this.queue.push(element);
    }
  }
  
  //`T` represents the type of item this playlist stores.
  
  interface Song {
    title: string;
    artist: string;
  }
  
  interface Video {
    title: string;
    creator: string;
    resolution: string;
  }
  
  const songs = new Playlist<Song>();
  
  songs.add({
    title: "Song Title",
    artist: "Artist Name"
  });
  
  onst videos = new Playlist<Video>();
  
  videos.add({
    title: "Video Title",
    creator: "Creator Name",
    resolution: "1080p"
  });
  ```

  