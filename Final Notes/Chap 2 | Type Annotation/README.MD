# Chap 2 | Type Annotation

## What is Type Annotation

- **Type annotation** means telling TypeScript the type of a variable

  ```ts
  let movieTitle: string = "Amadeus";
  ```

- Syntax: `variableName: type`

- After you say a variable is `string`, TypeScript will not allow other types of variable or methods that are not available on strings

  ```ts
  movieTitle = false //Error
  movieTitle.upper(); // Error
  movieTitle.toUpperCase(); // Correct
  ```

- Examples of type annotations with numbers and booleans

  ```ts
  let numCatLives: number = 9;
  let gameOver: boolean = false;
  ```

## Compiling Typescript 

- To compile a TypeScript file say `variables.ts` to  JavaScript we use the following command :  `tsc variables.ts`

- This creates a `.js` file:

  ```ts
  variables.ts → variables.js
  ```

- TypeScript removes type annotations in the final JavaScript.

## Type Inference 

- Type Inference refers to the Typescript compilers ability to infer types from certain values in our code

- TypeScript can remember a value's type even if we didnt provide a type annotation and it will enforce that type moving forward

  ```ts
  let age = 27; // TypeScript knows this is number
  let show = "Dark"; // TypeScript knows this is string
  let isDone = false; // TypeScript knows this is boolean 
  ```

- After TypeScript infers a type, it will block wrong types.

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

## Implicit any 

- If we declare a variable **without assigning a value**, TypeScript will treat it as `any`

  ```ts
  let foundMovie;
  ```

  
