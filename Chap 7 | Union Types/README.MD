# Union Types

- Union types allow us to give a value a few different possible types .If the eventual value's type is included .Typescript will be happy 
- We can create a union type by using the single | (pipe character) to separate the types we want to include .Its like saying "This thing is allowed to be this, this or this".Typescript will enforce it from there 

​			

```ts
let age: number | string = 21;
age = 23;    // ok
age = "24";  // ok
```

- Union types also work with custom types.

  ```
  type Point = {
    x: number;
    y: number;
  };
  
  type Loc = {
    latitude: number;
    longitude: number;
  };
  
  let coordinates: Point | Loc;
  ```

## Type Narrowing with Union Types 

- Union types can be used in function parameters.

  ​	

  ```ts
  function printAge(age: number | string): void {
    console.log(`You are ${age} years old`);
  }
  ```

- Problem: TypeScript blocks operations that may not work for **all possible types**.

  ```ts
  function calculateTax(price: number | string, tax: number) {
    return price * tax; // Error
  }
  ```

- Fix: use **type narrowing**.

  ```ts
  function calculateTax(price: number | string, tax: number): number {
    if (typeof price === "string") {
      price = parseFloat(price.replace("$", ""));
    }
  
    return price * tax;
  }
  ```

- `typeof` helps TypeScript know the exact type inside a block.

```ts
if (typeof price === "string") {
  // price is string here
} else {
  // price is number here
}
```

## Array Union Types

- Arrays can hold multiple allowed types using a **union type**.		

```ts
const stuff: (number | string)[] = [];
```

- This means array items can be `number` or `string`

  ```ts
  stuff.push(1);      // ok
  stuff.push("hello"); // ok
  stuff.push(true);   // error
  ```

## Literal Types 

- Literal types are not just types - but the value themselves too 

- On its own , that's not super helpful .But combine it with something like unions and we can have very fine tuned type options for Typescript to enforce 

  ```ts
  //A Function with a literal + union type parameter 
  const giveAnswer =(answer:"yes"|"no"|"maybe")=>{
      return `The answer is ${answer}`
  }
  
  // CAN provide one of the literals in the union 
  giveAnswer("no") //The answer is no
  
  //CAN'T provide anything else 
  ```

- **Literal type** means a value must be one exact value.

  ```ts
  let zero: 0 = 0;
  zero = 2; // error
  ```

- Literal types are usually useful with **union types**.

  ```ts
   let mood: "happy" | "sad" = "happy";
  ```

- Now only those exact values are allowed.

  ```ts
  mood = "sad";   // ok
  mood = "angry"; // error
  ```

  