# Tuples and Enums

## Tuples 

- Tuples are a special type exclusive to TypeScript (they don't exist in JS)

- Tuples are arrays of fixed lengths and ordered with specific types -like super rigid arrays

  ```ts
  //Creating a Tuple with its type defination 
  let mytuple :[number,string]
  
  //CAN assign it values per its specs 
  mytuple=[10,"Typescript is fun!"]
  
  //CAN'T assign it values of a diff structure ❌
  mytuple=["Typescript is fun!",10]
  ```

- Limitation: TypeScript may still allow `push()` after creation.

  ```ts
  myTuple.push(123); // allowed, but weird
  ```

## Enums 

- Enums allow us to define a **set of named constants**. We can give these constants numeric or string values

  ```ts
  //Numeric Enums 
  enum Responses1 {
      n0, //0
      yes , //2
      maybe, //3
  
  }
  
  enum Responses2 {
      no = 2, //2
      yes, //3
      maybe , //4
  
  }
  
  enum Responses3 {
      no =2, //2
      yes = 10, //10
      maybe = 24 , //24
  }
  
  //String Enums 
  enum Responses4{
      no ="No",
      yes ='Yes',
      maybe ='Maybe'
  }
  
  //Heterogenous Enums 
  enum Responses5{
      no = 0,
      yes = 1,
      maybe ="Maybe"
  }
  
  function reply(answer: Responses4) {
    if (answer === Responses4.yes) {
      return "User agreed";
    }
  
    if (answer === Responses4.no) {
      return "User rejected";
    }
  
    return "User is unsure";
  }
  
  reply(Responses4.yes);   // "User agreed"
  reply(Responses4.no);    // "User rejected"
  reply(Responses4.maybe); // "User is unsure"
  ```

## Enums Compilation

- Most TypeScript-only syntax is removed when TypeScript compiles to JavaScript.

- Example :  `const name: string = "Suvadeep";` , for this code the compiled Javascript is `const name = "Suvadeep";` . The type annotation: `: string`  does not exist in the final JavaScript.

- Enums are different from most TypeScript features. A normal `enum` does **not** disappear after compilation.It creates extra JavaScript code.TypeScript creates something like a JavaScript object for the enum.

- `const enum`

  - Syntax:

    ```ts
    const enum OrderStatus {
      PENDING,
      SHIPPED,
      DELIVERED,
      RETURNED
    }
    ```

  - A `const enum` gets removed from the final JavaScript.