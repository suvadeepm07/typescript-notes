# Type Annotation

## Our First Type Annotation

- **Type annotation** means telling TypeScript the type of a variable

  ```ts
  let movieTitle: string = "Amadeus";
  ```

- Syntax: `variableName: type`

- `string` is used for **text** and must be lowercase.

- After you say a variable is `string`, TypeScript will not allow other 

  ```ts
  types.movieTitle = 123; // Error
  ```

- TypeScript also warns if you use a method that does not exist on strings.

  ```ts
  movieTitle.upper(); // Error
  movieTitle.toUpperCase(); // Correct
  ```

- Type annotations help TypeScript catch wrong values and wrong method usage early.

## Working with Numbers and booleans 

- TypeScript has primitive types like: string, number, boolean

- `number` means **all numbers**. No separate `int` or `float`. 

  ```ts
  let numCatLives: number = 9;
  ```

- `boolean` means only: true , false

  ```ts
  let gameOver: boolean = false;
  ```

- Type names are **lowercase**: number , boolean ,string

## Compiling TypeScript 

- TypeScript code is written in `.ts` files

- To compile TypeScript into JavaScript: `tsc variables.ts`

- This creates a `.js` file:

  ```bash
  variables.ts → variables.js
  ```

- TypeScript removes type annotations in the final JavaScript.

- TypeScript may still create JavaScript **even if there are type errors**.

## Type Inference 

- Type Inference refers to the Typescript compilers ability to infer types from certain values in our code 

- TypeScript can remember a value's type even if you didnt provide a type annotation and it will enforce that type moving forward 

  ```ts
  let age = 27; // TypeScript knows this is number
  let show = "Dark"; // TypeScript knows this is string
  let isDone = false; // TypeScript knows this is boolean 
  ```

- After TypeScript infers a type, it still blocks wrong values.

  ```ts
  show = false; // Error
  ```

## Any 

- any is an escape hatch! .It turns off type checking for a particular variable 

  ```ts
  let thing: any = "hello";
  thing = 123;
  thing = false;
  ```

## Delayed Initialization and Implicit Any 

- If you declare a variable **without assigning a value**, TypeScript may treat it as `any`

  ```ts
  let foundMovie;
  ```

- `any` is bad because TypeScript stops protecting you.

- In this case, add a type annotation manually:

  ```ts
  let foundMovie: string;
  ```

- Then TypeScript will block wrong usage:

  ```ts
  foundMovie = 1; // Error
  foundMovie(); // Error
  ```

  