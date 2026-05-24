# Object Types

## Objects

- Objects can be typed by declaring what the object should look like in the annotation 
- Accessing a property that isnt defined or performing operations without keeping types in mind will throw errors 

```ts
// A function with an object type parameter 
const printName =(name:{first:string;last:string})=>{
    return `Name : ${name.first}${name.last}`
}

printName({first:"Will",last:"Ferrell"})
```

## Object Types 

- Object types can be used for:

  - variables
  - function parameters
  - function return types

  ```ts
  let coordinate: { x: number; y: number } = {
    x: 34,
    y: 2
  };
  ```

  

- Function can return a typed object:

  ```ts
  function randomCoordinate(): { x: number; y: number } {
    return {
      x: Math.random(),
      y: Math.random()
    };
  }
  ```

- The returned object must match the declared shape

## Excess Properties 

- Inline object literals are checked **strictly**.

```ts
printName({ first: "Mick", last: "Jagger", age: 473 }); // Error
```

- Extra properties are not allowed when passing object directly.

- But if the object is stored in a variable first, extra properties are allowed.

  ```ts
  const singer = {
    first: "Mick",
    last: "Jagger",
    age: 473
  };
  
  printName(singer); // OK
  ```

- TypeScript mainly checks that required properties exist.
- Core Idea
  - **Direct object literal = no extra properties.**
  - **Variable object = extra properties are okay.**'

## Type Alias

- instead of writing out object types in an annotation we can declare them seperately in a type alias which is simply the desired shape of the object 

- This allows us to make our code more readable and even reuse the type elsewhere in our code

  ```ts
  // A Type alias 
  type Person ={
      name:string ;
      age:number
  }
  
  const sayHappyBirthday =(person:Person)=>{
      return `Hey ${person.name} congrats on turning ${person.age}!`
  }
  
  sayHappyBirthday({name:"Jerry",age:42})
  ```

## Nested Objects 

- Object types can be **nested**.	

```ts
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};
```

- Use a `type` alias to avoid ugly repeated object annotations.

  ```ts
  function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
  }
  ```

## Optional Properties

- Object properties are **required by default**.

- Use `?` to make a property **optional**.

  ```ts
  type Point = {
    x: number;
    y: number;
    z?: number;
  };
  ```

- Now `z` can exist or be missing.

  ```ts
  const point1: Point = { x: 1, y: 3, z: 9 }; // ok
  const point2: Point = { x: 1, y: 3 };       // ok
  ```

## Readonly modifier

- `readonly` makes an object property **not changeable after creation**.

  ```ts
  type User = {
    readonly id: number;
    username: string;
  };
  ```

- You can set `id` when creating the object.

  ```ts
  const user: User = {
    id: 123,
    username: "catgurl"
  };
  ```

- But you cannot change it later.

  ```ts
  user.id = 999; // Error
  ```

- You can still read it.

  ```ts
  console.log(user.id); // ok
  ```

## Intersection Type 

- **Intersection type** combines multiple types using `&`.

  ```ts
  type ColorfulCircle = Circle & Colorful;
  ```

- The final type must contain properties from **all combined types**.

  ```ts
  type Circle = { radius: number };
  type Colorful = { color: string };
  
  type ColorfulCircle = Circle & Colorful;
  ```

- Example:

  ```ts
  const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow"
  };
  ```

- You can also add extra properties while combining.

  ```
  type CatDog = Cat & Dog & { age: number };
  ```

  
