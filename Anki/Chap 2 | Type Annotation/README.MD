# Chap 2 | Type Annotation

**Q1**:What is Type Annotation ? 

**Solution**:

*telling TS the type of a variable*

Details: 

- **Type annotation** means telling TypeScript the type of a variable

- After you say a variable is `string`, TypeScript will not allow other types of variable or methods that are not available on strings

  ```ts
  let movieTitle: string = "Amadeus";
  let numCatLives: number = 9;
  let gameOver: boolean = false;
  gameOver = "true" //error
  ```

  

**Q2**:What is Type Inference ? 

**Solution**:

*TS compilers ability to infer types from certain values in our code even if we didn't provide a type annotation*

Details:

- Type Inference refers to the TS compilers ability to infer types from  certain values in our code even if we didn't provide a type annotation

- After TypeScript infers a type, it will block wrong types.

  ```ts
  let age = 27; // TypeScript knows this is number
  let show = "Dark"; // TypeScript knows this is string
  let isDone = false; // TypeScript knows this is boolean
  show = false; // Error
  ```

**Q3**:What does `any` do in TypeScript ? 

**Solution**:

*turns off type checking*

Details: 

- any is an escape hatch! .It turns off type checking for a particular variable

  ```ts
  let thing: any = "hello";
  thing = 123;
  thing = false;
  ```

**Q4**: Fill in the blanks 

If we declare a variable **without assigning a value**, TypeScript will treat it as `___________`

**Solution**:

If we declare a variable **without assigning a value**, TypeScript will treat it as `any`